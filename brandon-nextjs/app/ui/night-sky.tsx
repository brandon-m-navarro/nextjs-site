import React, { useRef, useEffect } from "react";
import { randomRange, degreesToRads, lineToAngle } from "../lib/utils";

/**
 * Particle class representing a basic particle with position, velocity, and radius.
 * Provides methods to get and set speed and heading, and to update position.
 *
 * @class Particle
 * @param {Object} options - Options for initializing the particle.
 * @param {number} [options.x=0] - The x-coordinate of the particle.
 * @param {number} [options.y=0] - The y-coordinate of the particle.
 * @param {number} [options.vx=0] - The x-component of the particle's velocity.
 * @param {number} [options.vy=0] - The y-component of the particle's velocity.
 * @param {number} [options.radius=0] - The radius of the particle.
 */
interface ParticleOptions {
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  radius?: number;
}
class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;

  constructor(options: ParticleOptions = {}) {
    this.x = options.x ?? 0;
    this.y = options.y ?? 0;
    this.vx = options.vx ?? 0;
    this.vy = options.vy ?? 0;
    this.radius = options.radius ?? 0;
  }

  /**
   * @method getSpeed - Returns the speed of the particle.
   * @returns {number} The speed of the particle.
   */
  getSpeed() {
    return Math.sqrt(this.vx * this.vx + this.vy * this.vy);
  }

  /**
   * @method setSpeed - Sets the speed of the particle.
   * @param {number} speed - The new speed of the particle.
   */
  setSpeed(speed: number) {
    const heading = this.getHeading();
    this.vx = Math.cos(heading) * speed;
    this.vy = Math.sin(heading) * speed;
  }

  /**
   * @method getHeading - Returns the heading of the particle in radians.
   * @returns {number} The heading of the particle in radians.
   */
  getHeading() {
    return Math.atan2(this.vy, this.vx);
  }

  /**
   * @method setHeading - Sets the heading of the particle.
   * @param {number} heading - The new heading of the particle in radians.
   */
  setHeading(heading: number) {
    const speed = this.getSpeed();
    this.vx = Math.cos(heading) * speed;
    this.vy = Math.sin(heading) * speed;
  }

  /**
   * @method update - Updates the position of the particle based on its velocity.
   */
  update() {
    this.x += this.vx;
    this.y += this.vy;
  }
}

/**
 * ShootingStar class representing a shooting star particle.
 * Inherits from Particle and adds properties for opacity, trail length, and state.
 * Provides methods to manage the shooting star's lifecycle (spawning, dying, dead).
 * @extends Particle
 *
 * @class ShootingStar
 * @param {Object} options - Options for initializing the shooting star.
 * @param {number} [options.opacity=0] - The opacity of the shooting star (0.0 - 1.0).
 * @param {number} [options.trailLengthDelta=0] - Multiplier for the maximum trail length (0.0 - 1.0).
 * @param {boolean} [options.isSpawning=false] - Indicates if the shooting star is spawning.
 * @param {boolean} [options.isDying=false] - Indicates if the shooting star is dying.
 * @param {boolean} [options.isDead=false] - Indicates if the shooting star is dead.
 */
interface ShootingStarOptions extends ParticleOptions {
  opacity?: number;
  trailLengthDelta?: number;
  isSpawning?: boolean;
  isDying?: boolean;
  isDead?: boolean;
}
class ShootingStar extends Particle {
  opacity: number;
  trailLengthDelta: number;
  isSpawning: boolean;
  isDying: boolean;
  isDead: boolean;

  constructor(options: ShootingStarOptions = {}) {
    super(options);
    this.opacity = options.opacity ?? 0;
    this.trailLengthDelta = options.trailLengthDelta ?? 0;
    this.isSpawning = options.isSpawning ?? true;
    this.isDying = options.isDying ?? false;
    this.isDead = options.isDead ?? false;
  }
}

// Animation constants and layers
const starsAngle = 145;
const shootingStarSpeed = { min: 15, max: 20 };
const shootingStarOpacityDelta = 0.01;
const trailLengthDelta = 0.01;
const shootingStarEmittingInterval = 5000;
const shootingStarLifeTime = 500;
const maxTrailLength = 300;
const starBaseRadius = 2;
const shootingStarRadius = 3;
const layers = [
  { speed: 0.0175, scale: 0.25, count: 350 },
  { speed: 0.03, scale: 0.55, count: 50 },
  { speed: 0.05, scale: 0.75, count: 35 },
];

interface NightSkyProps {
  /**
   * Background color for the canvas.
   * @default "#282A3A"
   */
  bg?: string;
}

/**
 * NightSky Component
 *
 *   This component creates a canvas which animates both stars slowly drifting,
 *   as well as occasional shooting stars. It is intended to be used as a
 *   background for the main content of the page.
 *
 *   The Particle class is a basic particle with position, velocity, and radius.
 *   The ShootingStar class extends Particle and adds properties for opacity,
 *   trail length, and state (spawning, dying, dead).
 */
const NightSky: React.FC<NightSkyProps> = ({ bg = "#282A3A" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const intervalRef = useRef<NodeJS.Timeout>();
  const starsRef = useRef<Particle[]>([]);
  const shootingStarsRef = useRef<ShootingStar[]>([]);
  const pausedRef = useRef<boolean>(false);
  const widthRef = useRef<number>(0);
  const heightRef = useRef<number>(0);

  /**
   * Draws a star on the canvas.
   * The star is drawn as a filled circle with a specified radius.
   * The color of the star is set to a light orange color.
   * @param {CanvasRenderingContext2D} ctx - The canvas context.
   * @param {Particle} star - The star to draw.
   */
  const drawStar = (ctx: CanvasRenderingContext2D, star: Particle) => {
    ctx.fillStyle = "rgb(255, 221, 157)";
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2, false);
    ctx.fill();
  };

  /**
   * Draws a shooting star on the canvas.
   * @param {CanvasRenderingContext2D} ctx - The canvas context.
   * @param {ShootingStar} p - The shooting star to draw.
   */
  const drawShootingStar = (ctx: CanvasRenderingContext2D, p: ShootingStar) => {
    const x = p.x,
      y = p.y,
      currentTrailLength = maxTrailLength * p.trailLengthDelta,
      pos = lineToAngle(x, y, -currentTrailLength, p.getHeading());

    ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;

    const starLength = 5;
    ctx.beginPath();
    ctx.moveTo(x - 1, y + 1);
    ctx.lineTo(x, y + starLength);
    ctx.lineTo(x + 1, y + 1);
    ctx.lineTo(x + starLength, y);
    ctx.lineTo(x + 1, y - 1);
    ctx.lineTo(x, y + 1);
    ctx.lineTo(x, y - starLength);
    ctx.lineTo(x - 1, y - 1);
    ctx.lineTo(x - starLength, y);
    ctx.lineTo(x - 1, y + 1);
    ctx.lineTo(x - starLength, y);
    ctx.closePath();
    ctx.fill();

    // Draw the trail
    ctx.fillStyle = `rgba(255, 221, 157, ${p.opacity})`;
    ctx.beginPath();
    ctx.moveTo(x - 1, y - 1);
    ctx.lineTo(pos.x, pos.y);
    ctx.lineTo(x + 1, y + 1);
    ctx.closePath();
    ctx.fill();
  };

  /**
   * The update function is called repeatedly to animate the stars and
   * shooting stars. It clears the canvas, fills the background, updates
   * the positions of stars and shooting stars, and draws them on the
   * canvas. It also handles the spawning and dying of shooting stars.
   * If a shooting star goes out of bounds, it is reset to the opposite
   * side of the canvas. Dead shooting stars are removed from the array.
   */
  const update = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = widthRef.current;
    const height = heightRef.current;

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, width, height);

    // Update and draw stars
    for (const star of starsRef.current) {
      star.update();
      drawStar(ctx, star);
      if (star.x > width) star.x = 0;
      if (star.x < 0) star.x = width;
      if (star.y > height) star.y = 0;
      if (star.y < 0) star.y = height;
    }

    // Update and draw shooting stars
    for (const shootingStar of shootingStarsRef.current) {
      if (shootingStar.isSpawning) {
        shootingStar.opacity += shootingStarOpacityDelta;
        if (shootingStar.opacity >= 1.0) {
          shootingStar.isSpawning = false;
          setTimeout(() => {
            shootingStar.isDying = true;
          }, shootingStarLifeTime);
        }
      }
      if (shootingStar.isDying) {
        shootingStar.opacity -= shootingStarOpacityDelta;
        if (shootingStar.opacity <= 0.0) {
          shootingStar.isDying = false;
          shootingStar.isDead = true;
        }
      }
      shootingStar.trailLengthDelta += trailLengthDelta;
      shootingStar.update();
      if (shootingStar.opacity > 0.0) {
        drawShootingStar(ctx, shootingStar);
      }
    }

    // Delete dead shooting stars
    shootingStarsRef.current = shootingStarsRef.current.filter(
      (s) => !s.isDead
    );

    if (!pausedRef.current) {
      animationRef.current = requestAnimationFrame(update);
    }
  };

  /**
   * Creates a new shooting star with a random position, speed, and heading.
   * The shooting star is initialized with a random x-coordinate in the right
   * half of the canvas, a random y-coordinate in the top half of the canvas,
   * and a radius. The speed is set to a random value between the specified
   * minimum and maximum speeds, and the heading is set to a fixed angle in
   * radians.
   */
  const createShootingStar = () => {
    const width = widthRef.current;
    const height = heightRef.current;
    const shootingStar = new ShootingStar({
      x: randomRange(width / 2, width),
      y: randomRange(0, height / 2),
      radius: shootingStarRadius,
      opacity: 0,
      isSpawning: true,
    });
    shootingStar.setSpeed(
      randomRange(shootingStarSpeed.min, shootingStarSpeed.max)
    );
    shootingStar.setHeading(degreesToRads(starsAngle));
    shootingStarsRef.current.push(shootingStar);
  };

  /**
   * Handles resizing the canvas and reinitializing stars.
   */
  useEffect(() => {
    // Now window is defined
    widthRef.current = window.innerWidth;
    heightRef.current = window.innerHeight;
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = widthRef.current;
      canvas.height = heightRef.current;
    }

    const handleResize = () => {
      widthRef.current = window.innerWidth;
      heightRef.current = window.innerHeight;
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = widthRef.current;
        canvas.height = heightRef.current;
      }
    };

    handleResize();

    // Create all non-shooting stars. Location is randomized within canvas
    // dimensions; speed, size, & count are determined above in 'layers'
    // object.
    starsRef.current = [];
    for (const layer of layers) {
      for (let i = 0; i < layer.count; i++) {
        const radius = starBaseRadius * layer.scale;
        const star = new Particle({
          x: randomRange(0, widthRef.current),
          y: randomRange(0, heightRef.current),
          radius,
        });
        star.setSpeed(layer.speed);
        star.setHeading(degreesToRads(starsAngle));
        starsRef.current.push(star);
      }
    }

    // Start animation
    pausedRef.current = false;
    update();

    // Create a ShootingStar every `shootingStarEmittingInterval` milliseconds
    intervalRef.current = setInterval(() => {
      if (!pausedRef.current) createShootingStar();
    }, shootingStarEmittingInterval);

    window.addEventListener("resize", handleResize);

    return () => {
      pausedRef.current = true;
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: "block",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "600px",
      }}
      width={widthRef.current}
      height={heightRef.current}
    />
  );
};

export default NightSky;

export const debounceResizeListener = (fn: () => void, ms = 150) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return function (this: () => void) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this), ms);
    };
};

// Copy the provided text to the users clipboard, shows errors in console
export const copyTextToClipboard = async (text: string) => {
    try {
        await navigator.clipboard.writeText(text);
        console.log('Text copied to clipboard');
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
}

// Returns a random number between min and max
export function randomRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
}
// Converts radians to degrees
export function degreesToRads(degrees: number) {
    return (degrees * Math.PI) / 180;
}
// Given a point (x, y), length, and angle, returns the point at that angle and
// distance from the original point
export function lineToAngle(x: number, y: number, length: number, angle: number) {
    return {
        x: x + length * Math.cos(angle),
        y: y + length * Math.sin(angle),
    };
}

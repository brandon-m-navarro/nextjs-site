"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import ThemeContext from "../store/ThemeContext";
import { useContext } from "react";

export default function NavBar() {
  const pathname = usePathname();

  const { getIsDark } = useContext(ThemeContext);

  // Map of links to display in the top navigation.
  const links = [
    {
      name: "About",
      href: "/",
      icon: !getIsDark() ? "/house-solid.svg" : "/house-solid_w.svg",
      icon_w: "/house-solid_w.svg",
    },
    {
      name: "Resume",
      href: "/resume",
      icon: !getIsDark() ? "/user-solid.svg" : "/user-solid_w.svg",
      icon_w: "/user-solid_w.svg",
    },
    {
      name: "Projects",
      href: "/projects",
      icon: !getIsDark() ? "/user-solid.svg" : "/user-solid_w.svg",
      icon_w: "/user-solid_w.svg",
    },
  ];

  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'relative after:content-[""] after:bottom-0 after:w-3/4 after:bg-[#81A988] after:h-[2px] after:left-1/2 after:absolute after:top-[calc(100% + -2px)] after:transition-all after:translate-x-[-175%] overflow-hidden min-[475px]:h-[42px] w-fit p-[12px] min-[475px]:p-0 min-[475px]:w-24 transition-all box-border text-center leading-[42px] rounded-sm text-sm font-medium text-black dark:text-white hover:bg-headerHover',
              {
                "opacity-50": pathname !== link.href,
              },
              {
                "after:translate-x-[-50%] font-semibold opacity-100 text-black dark:text-white pointer-events-none":
                  pathname === link.href,
              }
            )}
          >
            {link.name}
          </Link>
        );
      })}
    </>
  );
}

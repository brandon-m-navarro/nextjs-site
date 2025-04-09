'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import ThemeContext from "../store/ThemeContext";
import { useContext } from 'react';
import Image from 'next/image';


  export default function NavBar () {
    const pathname = usePathname();


    const {getIsDark} = useContext(ThemeContext);

    // Map of links to display in the top navigation.
    const links = [
        {
          name: 'About',
          href: '/',
          icon: !getIsDark() ? '/house-solid.svg' : '/house-solid_w.svg',
          icon_w: '/house-solid_w.svg'
        },
        {
          name: 'Resume',
          href: '/resume',
          icon: !getIsDark() ? '/user-solid.svg' : '/user-solid_w.svg',
          icon_w: '/user-solid_w.svg'
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
                // 'min-[475px]:h-[42px] w-fit p-[12px] min-[475px]:p-0 min-[475px]:w-24 transition-colors box-border text-center leading-[42px] rounded-sm text-sm font-medium text-black hover:bg-greenHover dark:text-white dark:bg-white20 dark:hover:bg-nightPurple/50',
                'min-[475px]:h-[42px] w-fit p-[12px] min-[475px]:p-0 min-[475px]:w-24 transition-all box-border text-center leading-[42px] rounded-sm text-sm font-medium text-black dark:text-white bg-gray-500/15 dark:bg-white20 hover:opacity-75',
                {
                  // 'bg-green text-white hover:!bg-green dark:!bg-nightPurple dark:hover:!bg-nightPurple': pathname === link.href
                  '!bg-green dark:!bg-nightPurple text-white pointer-events-none': pathname === link.href
                },
              )}
            >
              <div className='flex justify-center items-center'>
              <Image
                src={pathname === link.href ? link.icon_w : link.icon}
                width={20}
                height={20}
                alt={link.name + ' Icon'}
                className='min-[475px]:hidden min-[475px]:mr-0'
              />
              <p className='min-[475px]:block hidden'>{link.name}</p>
              </div>
            </Link>
          );
        })}
      </>
    );
  }
  
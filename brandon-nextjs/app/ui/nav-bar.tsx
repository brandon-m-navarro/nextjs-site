'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the top navigation.
const links = [
    {
      name: 'Home',
      href: '/'
    },
    {
      name: 'Resume',
      href: '/resume',
    },
  ];

  export default function NavBar () {
    const pathname = usePathname();
    return (
      <>
        {links.map((link) => {
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                'h-[42px] w-24 transition-colors box-border text-center leading-[42px] gap-6 rounded-sm bg-gray-50 text-sm font-medium text-black hover:bg-greenHover dark:text-white dark:bg-white20 dark:hover:bg-nightPurple/50',
                {
                  'bg-green text-white hover:bg-green dark:bg-nightPurple50 ': pathname === link.href
                },
              )}
            >
              <p>{link.name}</p>
            </Link>
          );
        })}
      </>
    );
  }
  
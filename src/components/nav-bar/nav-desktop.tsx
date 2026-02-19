'use client';

import { NavigationMenuList } from '@/ui/navigation-menu';
import { NavbarItem } from './nav-bar-item';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getIsHalfwayScrollPosition, useStore } from '@/context/store-provider';
import { Logo } from '@/assets/logo';
import React from 'react';
import { getNavigationLinks } from '@/utils/navigation-links';

export const NavDesktop: React.FC = () => {
  const navItems = getNavigationLinks(false);
  const pathname = usePathname();
  const { state } = useStore();
  const halfHeightReached = getIsHalfwayScrollPosition(state);

  return (
    <div className="hidden md:flex flex-1 justify-between w-screen items-center p-0 mx-8 min-h-[65px]">
      <NavigationMenuList>
        {(pathname !== '/' || halfHeightReached) && (
          <Link href={'/'} legacyBehavior passHref>
            <div>
              <Logo.SingleLine
                className="text-foreground py-[4px] h-[65px] w-[415px] cursor-pointer"
                scale={0.25}
              />
            </div>
          </Link>
        )}
      </NavigationMenuList>
      <NavigationMenuList>
        {navItems.map(({ title, linkTo }, index) => (
          <NavbarItem key={index}>
            <Link href={linkTo} legacyBehavior passHref>
              {title}
            </Link>
          </NavbarItem>
        ))}
      </NavigationMenuList>
    </div>
  );
};

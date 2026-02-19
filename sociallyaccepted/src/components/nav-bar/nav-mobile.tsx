'use client';

import { Menu, X } from 'lucide-react';
import React, { Fragment, useState } from 'react';
import { NavigationMenuList } from '@/ui/navigation-menu';
import { NavbarItem } from './nav-bar-item';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getIsHalfwayScrollPosition, useStore } from '@/context/store-provider';
import { Logo } from '@/assets/logo';
import { getNavigationLinks } from '@/utils/navigation-links';

export const NavMobile: React.FC = () => {
  const navItems = getNavigationLinks(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { state } = useStore();
  const halfHeightReached = getIsHalfwayScrollPosition(state);

  return (
    <>
      <div className="md:hidden flex flex-1 justify-between w-screen items-center p-2 mx-4">
        {isOpen ? <X onClick={() => setIsOpen(false)} /> : <Menu onClick={() => setIsOpen(true)} />}
        {(pathname !== '/' || halfHeightReached) && (
          <Link href={'/'} legacyBehavior passHref>
            <div>
              <Logo.SingleLine
                className="text-foreground h-[22px] w-[166px] cursor-pointer"
                scale={0.1}
              />
            </div>
          </Link>
        )}
        <div />
      </div>
      {isOpen && (
        <div className="md:hidden flex">
          <NavigationMenuList className="flex flex-col">
            {navItems.map(({ title, linkTo }, index) => (
              <Fragment key={index}>
                <NavbarItem onClick={() => setIsOpen(false)}>
                  <Link href={linkTo} legacyBehavior passHref>
                    {title}
                  </Link>
                </NavbarItem>
                {index !== navItems.length - 1 && <div className="w-[90vw] bg-border h-[1px]" />}
              </Fragment>
            ))}
          </NavigationMenuList>
        </div>
      )}
    </>
  );
};

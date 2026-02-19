import { NavigationMenu } from '@/ui/navigation-menu';
import { NavDesktop } from './nav-desktop';
import { NavMobile } from './nav-mobile';

export const Navbar = () => {
  return (
    <NavigationMenu className="p-[2px] bg-header text-foreground shadow-md flex-col md:flex-row">
      <NavDesktop />
      <NavMobile />
    </NavigationMenu>
  );
};

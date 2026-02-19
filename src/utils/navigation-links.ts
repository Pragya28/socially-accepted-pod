import { NavItems } from '@/types/interface';

export const getNavigationLinks = (includeHome: boolean): NavItems[] => {
  const navItems: NavItems[] = [{ title: 'Episodes', linkTo: '/episodes' }];
  if (includeHome) return [{ title: 'Home', linkTo: '/' }, ...navItems];
  return navItems;
};

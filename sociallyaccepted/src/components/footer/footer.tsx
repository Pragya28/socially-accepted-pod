import React from 'react';
import { SVGS } from '@/assets/svgs';
import { getSubscriptionList } from '@/utils/subscription-list';
import Link from 'next/link';
import { getNavigationLinks } from '@/utils/navigation-links';

const SOCIALS = [
  { icon: SVGS.Instagram, link: 'https://www.instagram.com/' },
  {
    icon: SVGS.Linkedin,
    link: 'https://in.linkedin.com/',
  },
];

export const Footer: React.FC = () => {
  const quickLinks = getNavigationLinks(true);
  const subscription = getSubscriptionList(true);

  return (
    <footer className="bg-footer text-foreground w-full">
      <div className="max-w-5xl px-4 py-8 flex flex-col gap-6 md:gap-8">
        {/* Contact */}
        <div className="text-base md:text-lg">
          <span>Contact: </span>
          <a
            href="mailto:business@sociallysacceptedpod.com"
            className="text-cyan-400 hover:underline"
          >
            business@sociallysacceptedpod.com
          </a>
        </div>
        {/* Socials */}
        <div className="flex items-center gap-2">
          <span className="font-semibold">Follow Us:</span>
          {SOCIALS.map(({ icon: Icon, link }, index) => (
            <a key={index} href={link} className="hover:opacity-80">
              <Icon className="w-6 h-6" />
            </a>
          ))}
        </div>
        {/* Quick Links */}
        <div className="flex flex-wrap gap-x-2 gap-y-1 text-base md:text-lg">
          <span className="font-semibold">Quick Links:</span>
          {quickLinks.map(({ linkTo, title }, index) => (
            <React.Fragment key={index}>
              <Link href={linkTo} passHref className="hover:underline">
                {title}
              </Link>
              {index !== quickLinks.length - 1 && <span>|</span>}
            </React.Fragment>
          ))}
        </div>
        {/* Policies */}
        <div className="flex flex-wrap gap-x-2 gap-y-1 text-base md:text-lg">
          <a href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </a>
          <span>|</span>
          <a href="/terms" className="hover:underline">
            Terms of Service
          </a>
        </div>
        {/* Subscribe */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-semibold">Subscribe:</span>
          <div className="flex flex-wrap items-center gap-3">
            {subscription.map(({ icon: Icon, url }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                <Icon className="w-7 h-7" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="text-xs md:text-sm py-3 px-4 text-left">
        © 2024 Socially Accepted. All rights reserved.
      </div>
    </footer>
  );
};

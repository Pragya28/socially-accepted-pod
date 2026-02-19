import { Container } from '@/ui/container';
import { getSubscriptionList } from '@/utils/subscription-list';
import React from 'react';

export const ListenNowSection = () => {
  return (
    <Container className="">
      <div className="font-semibold text-[20px] mb-8 tracking-wide">
        Subscribe and listen to Socially Accepted wherever you get your podcasts
      </div>
      <div className="flex justify-center items-start gap-12 flex-wrap max-w-5xl mx-auto">
        {getSubscriptionList(false).map(({ icon: Icon, name, url }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <div className="w-24 h-24 rounded-2xl mb-4 flex items-center justify-center ">
              <Icon className="w-24 h-24" />
            </div>
            <div className="font-semibold text-lg tracking-wide leading-tight text-center">
              {name.split(' ').map((word, i) => (
                <div key={i}>{word}</div>
              ))}
            </div>
          </a>
        ))}
      </div>
    </Container>
  );
};

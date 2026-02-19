'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { EpisodeData } from '@/types/interface';

export const EpisodeItem: React.FC<EpisodeData> = ({
  name,
  airDate,
  duration,
  description,
  coverImage,
  id,
}) => {
  const router = useRouter();

  const handleListenNow = () => {
    router.push(`/episodes/${id}`);
  };

  return (
    <div
      key={id}
      className="w-full bg-card text-foreground rounded-lg shadow-md overflow-hidden"
      onClick={handleListenNow}
    >
      <div className="relative w-full aspect-[16/9]">
        <Image
          src={coverImage}
          alt={`Episode: ${name}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">Episode: {name}</h3>
        </div>
        <div className="flex items-center text-sm mb-3">
          <span className="mr-4">{airDate}</span>
          <span>{duration}</span>
        </div>
        <p className="text-sm line-clamp-3 mb-4">{description}</p>
        <button className="w-full py-2 px-4 bg-background text-foreground rounded-md hover:bg-primary/90 transition-colors cursor-pointer">
          Listen Now
        </button>
      </div>
    </div>
  );
};

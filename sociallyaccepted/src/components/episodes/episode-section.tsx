import { EpisodeData } from '@/types/interface';
import { EpisodeItem } from './episode-item';
import React from 'react';

interface EpisodeSectionProps {
  items: EpisodeData[];
}

export const EpisodeSection: React.FC<EpisodeSectionProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {items.map((item, idx) => (
        <EpisodeItem key={idx} {...item} />
      ))}
    </div>
  );
};

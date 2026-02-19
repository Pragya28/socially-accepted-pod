import { EpisodeData } from '@/types/interface';
import fs from 'fs';
import path from 'path';

export const fetchEpisodeById = async (id: string): Promise<EpisodeData | null> => {
  const filePath = path.resolve(process.cwd(), 'public', 'data', 'episodes.json');

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const raw = fs.readFileSync(filePath, 'utf-8');
  const episodes: EpisodeData[] = JSON.parse(raw);

  const episode = episodes.find((ep) => ep.id === id);

  if (!episode) {
    return null;
  }

  return episode;
};

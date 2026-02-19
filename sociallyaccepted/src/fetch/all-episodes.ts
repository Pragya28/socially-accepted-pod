import { EpisodeData } from '@/types/interface';
import fs from 'fs';
import path from 'path';

interface Request {
  pageNo?: number;
  pageSize?: number;
}

export const fetchAllEpisodes = async ({
  pageNo = 1,
  pageSize = 10,
}: Request): Promise<EpisodeData[]> => {
  // Calculate offset and limit based on pageNo and pageSize
  const offset = (pageNo - 1) * pageSize;
  const limit = offset + pageSize;

  // Read from local JSON file
  const filePath = path.resolve(process.cwd(), 'public', 'data', 'episodes.json');
  if (fs.existsSync(filePath)) {
    const raw = fs.readFileSync(filePath, 'utf-8');
    const all: EpisodeData[] = JSON.parse(raw);
    return all.slice(offset, limit);
  }
  return [];
};

import { EpisodeSection } from '@/components/episodes';
import { fetchAllEpisodes } from '@/fetch/all-episodes';
import { Container } from '@/ui/container';

export default async function Episodes() {
  const episodes = await fetchAllEpisodes({});
  return (
    <Container className="flex-1 md:flex-col gap-5">
      <div className="font-bold text-[40px]">EPISODES</div>
      <EpisodeSection items={episodes} />
    </Container>
  );
}

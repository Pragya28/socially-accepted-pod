import { EpisodeSection } from '@/components/episodes';
import { IntroSection, ListenNowSection } from '@/components/home';
import { fetchAllEpisodes } from '@/fetch/all-episodes';
import { Container } from '@/ui/container';

export default async function Home() {
  const episodes = await fetchAllEpisodes({ pageNo: 1, pageSize: 3 });

  return (
    <div>
      <IntroSection />
      <Container className="flex-1 md:flex-col gap-5 bg-highlight border-t-2 border-b-2">
        <div className="font-bold text-[20px]">Latest Episodes</div>
        <EpisodeSection items={episodes} />
      </Container>
      <ListenNowSection />
    </div>
  );
}

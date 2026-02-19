import { notFound } from 'next/navigation';
import Image from 'next/image';
import { fetchEpisodeById } from '@/fetch/episode-by-id';
import { PlatformList } from '@/utils/subscription-list';
import { Platforms } from '@/types/interface';
import { fetchAllEpisodes } from '@/fetch/all-episodes';

type EpisodePageProps = Promise<{ id: string }>;

export async function generateStaticParams() {
  // Example: Fetch your episodes list
  const episodes = await fetchAllEpisodes({ pageNo: 1, pageSize: 10 });

  // Return params for each static page
  return episodes.map((episode) => ({
    id: episode.id.toString(),
  }));
}

export default async function EpisodePage(props: { params: EpisodePageProps }) {
  const params = await props.params;

  const episode = await fetchEpisodeById(params.id);

  if (!episode) {
    notFound();
  }

  const platformList = Object.entries(episode.platforms).map(([key, value]) => {
    const platform = PlatformList[key as Platforms];
    return {
      name: platform.name,
      url: value,
      icon: platform.icon,
    };
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative w-full aspect-[16/9] mb-8 rounded-lg overflow-hidden">
          <Image
            src={episode.coverImage}
            alt={`Episode: ${episode.name}`}
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Episode: {episode.name}</h1>
            <div className="flex items-center text-sm text-muted-foreground">
              <span className="mr-4">{episode.airDate}</span>
              <span>{episode.duration}</span>
            </div>
          </div>

          <div className="prose max-w-none">
            <p className="text-lg">{episode.description}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-3 justify-center py-2">
        {platformList.map(({ url, icon: Icon }, index) => (
          <a
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80"
          >
            <Icon className="w-10 h-10" />
          </a>
        ))}
      </div>
    </div>
  );
}

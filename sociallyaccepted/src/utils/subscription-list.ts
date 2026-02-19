import { SVGS } from '@/assets/svgs';
import { SUBSCRIPTION_LIST } from '@/types/constants';
import { Platforms } from '@/types/interface';

export const PlatformList: Record<
  Platforms,
  {
    name: string;
    icon: any;
    gsIcon: any;
  }
> = {
  [Platforms.Spotify]: {
    name: 'Spotify',
    icon: SVGS.Spotify,
    gsIcon: SVGS.SpotifyGS,
  },
  [Platforms.ApplePodcast]: {
    name: 'Apple Podcast',
    icon: SVGS.ApplePodcast,
    gsIcon: SVGS.ApplePodcastGS,
  },
  [Platforms.AmazonMusic]: {
    name: 'Amazon Music',
    icon: SVGS.AmazonMusic,
    gsIcon: SVGS.AmazonMusicGS,
  },
  [Platforms.YoutubeMusic]: {
    name: 'YouTube Music',
    icon: SVGS.YoutubeMusic,
    gsIcon: SVGS.YoutubeMusicGS,
  },
  [Platforms.Pocketcasts]: {
    name: 'Pocketcasts',
    icon: SVGS.Pocketcasts,
    gsIcon: SVGS.PocketcastsGS,
  },
  [Platforms.YouTube]: {
    name: 'YouTube',
    icon: SVGS.Youtube,
    gsIcon: SVGS.YoutubeGS,
  },
};

export const getSubscriptionList = (isGS: boolean) => {
  const subscriptionList = Object.entries(PlatformList).map(([key, { name, icon, gsIcon }]) => ({
    name,
    url: SUBSCRIPTION_LIST[key as Platforms],
    icon: isGS ? gsIcon : icon,
  }));
  return subscriptionList;
};

import { defineField, defineType } from 'sanity';

export const episodeType = defineType({
  name: 'episode',
  title: 'Episode',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (rule) => rule.required(),
      hidden: true,
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'airDate',
      title: 'Air Date',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      validation: (rule) =>
        rule.regex(/^(\d{1,2}:)?[0-5]?\d:[0-5]\d$/, {
          name: 'time format',
          invert: false,
        }),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'url',
    }),
    // URLs for each platform as separate fields:
    defineField({
      name: 'spotifyUrl',
      title: 'Spotify URL',
      type: 'url',
      validation: (rule) => rule.uri({ scheme: ['http', 'https'] }),
    }),
    defineField({
      name: 'applePodcastUrl',
      title: 'Apple Podcast URL',
      type: 'url',
      validation: (rule) => rule.uri({ scheme: ['http', 'https'] }),
    }),
    defineField({
      name: 'amazonMusicUrl',
      title: 'Amazon Music URL',
      type: 'url',
      validation: (rule) => rule.uri({ scheme: ['http', 'https'] }),
    }),
    defineField({
      name: 'youtubeMusicUrl',
      title: 'YouTube Music URL',
      type: 'url',
      validation: (rule) => rule.uri({ scheme: ['http', 'https'] }),
    }),
    defineField({
      name: 'pocketcastsUrl',
      title: 'Pocketcasts URL',
      type: 'url',
      validation: (rule) => rule.uri({ scheme: ['http', 'https'] }),
    }),
    defineField({
      name: 'youtubeUrl',
      title: 'YouTube URL',
      type: 'url',
      validation: (rule) => rule.uri({ scheme: ['http', 'https'] }),
    }),
  ],
});

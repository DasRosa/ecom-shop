import sanityClient from '@sanity/client';
export const client = sanityClient({
  projectId: 'ptc29pkt',
  dataset: 'production',
  useCdn: true
});
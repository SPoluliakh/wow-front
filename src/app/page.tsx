import { Metadata } from 'next';
import { HomeFeature } from '@/features';

export const metadata: Metadata = {
  title: 'Wow | clean&shine',
  description: 'residential and commercial exterior cleaning services in Aiken and the CSRA.',
};

export default async function RootPage() {
  return <HomeFeature />;
}

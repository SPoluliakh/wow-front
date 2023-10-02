import { Metadata } from 'next';
import { AboutFeature } from '@/features';

export const metadata: Metadata = {
  title: 'Home | Wow',
  description: 'Wow description',
};

export default async function RootPage() {
  return <AboutFeature />;
}

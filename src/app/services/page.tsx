import { Metadata } from 'next';
import { ServicesFeature } from '@/features';

export const metadata: Metadata = {
  title: 'Services | Wow',
  description: 'Wow description',
};

export default async function AboutPage() {
  return <ServicesFeature />;
}

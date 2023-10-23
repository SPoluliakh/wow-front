import { Metadata } from 'next';
import { HomeFeature } from '@/features';

export const metadata: Metadata = {
  title: 'WOW | Clean&Shine',
  description: 'Residential and commercial exterior cleaning services in Aiken and the CSRA',
  openGraph: {
    type: 'website',
    title: 'WOW Clean&Shine',
    description: 'Residential and commercial exterior cleaning services in Aiken and the CSRA',
    images: 'https://wowcleanandshine.com/images/og/og-img.jpg',
    url: 'https://wowcleanandshine.com/',
    siteName: 'WOW Clean&Shine',
  },
};

export default async function RootPage() {
  return <HomeFeature />;
}

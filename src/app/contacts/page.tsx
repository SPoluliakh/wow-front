import { Metadata } from 'next';
import { ContactsFeature } from '@/features';

export const metadata: Metadata = {
  title: 'Contacts | Wow',
  description: 'Wow description',
};

export default async function ContactsPage() {
  return <ContactsFeature />;
}

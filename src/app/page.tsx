import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Sections from '@/components/Sections';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://tigranmedia.be/',
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Sections />
    </>
  );
}

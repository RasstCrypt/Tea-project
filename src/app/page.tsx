'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import NFTCounter from '@/components/NFTCounter';
import VideoSection from '@/components/VideoSection';
import RoadMap from '@/components/RoadMap';
import Team from '@/components/Team';
import Newsletter from '@/components/NewsLetter';


export default function Home() {
  return (
    <main className="min-h-screen bg-[#020B2D] text-white">
      <Header />
      <Hero />
      <NFTCounter />
      <VideoSection />
      <RoadMap />
      <Team />
      <Newsletter />
    </main>
  );
}
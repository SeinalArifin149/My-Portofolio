import React from 'react';
import { Profile } from './profile';
import { Text } from './text';
import { Knowledge } from './knowledge';

// Definisi komponen StatItem (diperlukan agar tidak error)
const StatItem = ({ label, value }: { label: React.ReactNode, value: string }) => (
  <div className="flex flex-col lg:items-end items-center text-center lg:text-right">
    <span className="text-gray-400 text-sm mb-1">{label}</span>
    <span className="text-4xl md:text-5xl font-bold text-white">{value}</span>
  </div>
);

export function Home() {
  return (
    /* HERO SECTION */
    /* Menggunakan Grid untuk membagi 3 area: Teks Kiri, Foto Tengah, Stats Kanan */
    <main className="container mx-auto px-6 py-10 lg:py-0 lg:h-[calc(100vh-100px)] flex items-center relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-center">
        
        <Text/>
        <Profile/>
        <Knowledge/>
        
        </div>
    </main>
  );
}
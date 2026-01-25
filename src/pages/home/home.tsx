// import React from 'react';
import { Profile } from './profile';
import { Text } from './text';
import { Knowledge } from './knowledge';

export function Home() {
  return (
    <main className="container mx-auto px-6 py-10 lg:py-0 lg:h-[calc(100vh-100px)] flex items-center relative z-10 mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-center">
        <Text />
        <Profile />
        <Knowledge />
      </div>
    </main>
  );
}
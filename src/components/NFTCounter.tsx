'use client';

import { motion } from 'framer-motion';

export default function NFTCounter() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">NFT Collection Stats</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <p className="text-4xl font-bold">10K+</p>
            <p className="text-gray-400">Total Items</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold">5K+</p>
            <p className="text-gray-400">Total Owners</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold">1 $TEA</p>
            <p className="text-gray-400">Floor Price</p>
          </div>
        </div>
      </div>
    </section>
  );
}

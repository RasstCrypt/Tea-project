'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-2xl font-bold mb-8 text-center">UPDATES</h2>
        <form onSubmit={handleSubmit} className="flex gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email..."
            className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white"
            required
          />
          <button
            type="submit"
            className="px-6 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
}

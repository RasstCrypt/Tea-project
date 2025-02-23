"use client";

import React from 'react';
import Image from 'next/image';
import { ClaimButton } from "thirdweb/react";
import { client, teaAssamChain } from '../lib/config';
import toast from 'react-hot-toast';

export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold mb-4">The First NFT Collection on Tea Assam Chain</h1>
          <p className="text-xl mb-8">Memorable Moments, Unforgettable Memories</p>
          <ClaimButton
            contractAddress={process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || ""}
            chain={teaAssamChain}
            client={client}
            claimParams={{
              type: "ERC721",
              quantity: BigInt(1),
            }}
            className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition"
            onTransactionConfirmed={async () => {
              try {
                toast.loading('Claiming NFT...', { id: 'claim' });
                await new Promise(resolve => setTimeout(resolve, 1000));
                toast.success('NFT claimed successfully!', { id: 'claim' });
              } catch (error) {
                const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
                toast.error(`Failed to claim: ${errorMessage}`, { id: 'claim' });
              }
            }}
          >
            MINT
          </ClaimButton>
        </div>
        <div className="mt-8 md:mt-0">
          <Image 
            src="/giphy.gif" 
            alt="NFT Cat Carrier" 
            width={500}
            height={500}
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}

'use client';
import { transferEvent } from "thirdweb/extensions/erc721";
import { getContract } from "thirdweb";
import { useContractEvents } from "thirdweb/react";
import { teaAssamChain, client } from "../lib/config";
import React from "react";

export default function VideoSection() {
  const contract = getContract({
    client: client,
    chain: teaAssamChain,
    address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "",
  });

  const contractEvents = useContractEvents({
    contract: contract,
    events: [transferEvent()],
    blockRange: 100,
  });

  // Get only the 4 most recent events
  const recentEvents = contractEvents.data?.slice(0, 4);

  return (
    <section className="py-20 px-4 bg-opacity-50 bg-black">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Recent Transfers</h2>
        <div className="max-w-4xl mx-auto bg-gray-900/50 rounded-lg p-6">
          {recentEvents?.map((event, index) => (
            <div key={index} className="mb-4 text-left font-mono">
              <p className="text-gray-300">
                <span className="text-gray-400">{event.args.from.slice(0, 6)}...{event.args.from.slice(-4)}</span>
                {' '}transferred{' '}
                <span className="text-green-400">#{event.args.tokenId.toString()}</span>
                {' '}to{' '}
                <span className="text-gray-400">{event.args.to.slice(0, 6)}...{event.args.to.slice(-4)}</span>
              </p>
            </div>
          ))}
          {!contractEvents.data?.length && (
            <p className="text-gray-400">No recent transfers found</p>
          )}
        </div>
      </div>
    </section>
  );
}

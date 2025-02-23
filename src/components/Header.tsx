'use client';

import { ConnectButton } from "thirdweb/react";
import { client, teaAssamChain } from '../lib/config';
import toast from 'react-hot-toast';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-transparent p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">CryptNFTs</div>
        <div className="flex items-center space-x-4">
          <a href="https://x.com/AreYouWinningg" className="text-white hover:text-gray-300">Twitter</a>
          <a href="#" className="text-white hover:text-gray-300">Discord</a>
          <ConnectButton
            client={client}
            chain={teaAssamChain}
            theme="dark"
            connectModal={{
              title: "Sign in",
              titleIcon: "/favico.ico",
              size: "compact",
              showThirdwebBranding: false,
              
            }}
            onConnect={(wallet) => {
              console.log("Wallet connected:", );
              toast.success('Wallet connected successfully!');
            }}
            onDisconnect={() => {
              toast('Wallet disconnected');
            }}
          />
        </div>
      </div>
    </header>
  );
}
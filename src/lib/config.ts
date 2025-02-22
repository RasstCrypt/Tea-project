import { createThirdwebClient } from "thirdweb";
import { defineChain } from "thirdweb/chains";

export const teaAssamChain = defineChain({
  id: 93384 ,
  name: "tea-assam",
  nativeCurrency: {
    name: "tea-assam",
    symbol: "Tea", 
    decimals: 18
  },
  
  
});

export const client = createThirdwebClient({
  secretKey: process.env.THIRDWEB_SECRET_KEY || "YOUR-SECRET-KEY-HERE",
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID || "YOUR-CLIENT-ID-HERE"
});
import type { AppProps } from "next/app";
import { ChainId, Web3sdksProvider } from "@web3sdks/react";
import "../styles/globals.css";
import { MagicConnector } from "@web3sdks/react/evm/connectors/magic";

const magicLinkConnector = new MagicConnector({
  options: {
    apiKey: process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY!,
    rpcUrls: {
      [ChainId.Mumbai]: "https://mumbai.magic.io/rpc",
    },
  },
});

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mumbai;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3sdksProvider
      desiredChainId={activeChainId}
      walletConnectors={[magicLinkConnector]}
    >
      <Component {...pageProps} />
    </Web3sdksProvider>
  );
}

export default MyApp;

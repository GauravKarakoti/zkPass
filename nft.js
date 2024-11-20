import { Network, Alchemy } from 'alchemy-sdk';

const settings = {
  apiKey: "Qpv1YCHa2n67iG7-qctau3MO2rakZj5W",
  network: Network.ETH_HOLESKY,
};

const alchemy = new Alchemy(settings);

// get all NFTs owned by the provided address or ENS domain
const nfts = alchemy.nft.getNftsForOwner("vitalik.eth");
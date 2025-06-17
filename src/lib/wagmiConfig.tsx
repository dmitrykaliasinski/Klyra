'use client';

import {http, createConfig} from 'wagmi';
import {base, mainnet} from 'wagmi/chains';
import {injected} from 'wagmi/connectors';
import {WagmiProvider} from 'wagmi';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

export const config = createConfig({
    chains: [base, mainnet],
    connectors: [injected()],
    transports: {
        [base.id]: http('https://base-mainnet.g.alchemy.com/v2/1GT2yHQyxsx85NgcUuxrmOBcXZC-NtHb'),
        [mainnet.id]: http('https://eth-mainnet.g.alchemy.com/v2/1GT2yHQyxsx85NgcUuxrmOBcXZC-NtHb'),
    },
    ssr: true,
});

export function Web3Provider({children}) {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}> {children} </QueryClientProvider>
        </WagmiProvider>
    );
}
import React from 'react';
import styles from './MainSection.module.scss';
import {VaultCard} from "@/components/MainPage/VaultCard/VaultCard";

const vaults = [
    {
        title: "Bullish Call",
        description: "Profit when the underlying asset price increases.",
        tvl: "$12,585.39",
        nextCycle: "0d 0h 0m",
        vaultType: 'bullish' as const
    },
    {
        title: "Bearish Put",
        description: "Profit when the underlying asset price decreases.",
        tvl: "$0.00",
        nextCycle: "0d 0h 0m",
        vaultType: 'bearish' as const
    },
    {
        title: "Range-Bound Condor",
        description: "Enhance yield when the price stays within a range.",
        tvl: "$0.00",
        nextCycle: "N/A",
        vaultType: 'condor' as const
    }
];

export const MainSection = () => {
    return (
        <section className={styles.optionsVaults}>
            <h1 className={styles.title}>Explore Options Vaults</h1>
            <p className={styles.subtitle}>Deposit stablecoins into strategy vaults based on your market outlook.</p>

            <div className={styles.vaultsContainer}>
                {vaults.map((vault, index) => (
                    <VaultCard
                        key={index}
                        title={vault.title}
                        description={vault.description}
                        tvl={vault.tvl}
                        nextCycle={vault.nextCycle}
                        vaultType={vault.vaultType}
                    />
                ))}
            </div>
        </section>
    );
};
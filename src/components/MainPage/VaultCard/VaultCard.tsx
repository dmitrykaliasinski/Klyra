import React from "react";
import styles from './VaultCard.module.scss';
import {PiChartLineDown, PiChartLineUp} from "react-icons/pi";
import {RiArrowUpDownFill} from "react-icons/ri";
import Link from "next/link";

export type VaultType = 'bullish' | 'bearish' | 'condor';

interface VaultCardProps {
    title: string;
    description: string;
    tvl: string;
    nextCycle: string;
    hasDetails?: boolean;
    vaultType: VaultType;
}

export const VaultCard: React.FC<VaultCardProps> = ({
                                                        title,
                                                        description,
                                                        tvl,
                                                        nextCycle,
                                                        vaultType
                                                    }) => {
    const getTitleColor = () => {
        switch (vaultType) {
            case 'bullish':
                return styles.bullishTitle;
            case 'bearish':
                return styles.bearishTitle;
            case 'condor':
                return styles.rangeBoundTitle;
            default:
                return '';
        }
    };

    const getTitleIcon = () => {
        switch (vaultType) {
            case 'bullish':
                return <PiChartLineUp size={20} />;
            case 'bearish':
                return <PiChartLineDown size={20}  />;
            case 'condor':
                return <RiArrowUpDownFill size={20}  />;
            default:
                return '';
        }
    };

    return (
        <div className={styles.vaultCard}>
            <div className={getTitleColor()}>
                <div className={styles.iconTitleContainer}>
                    <span>{getTitleIcon()}</span>
                    <h2 className={styles.vaultTitle}>{title}</h2>
                </div>
                <span className={styles.valute}>sUSDS</span>
            </div>
            <p className={styles.vaultDescription}>{description}</p>

            <div className={styles.divider}/>

            <div className={styles.vaultStats}>
                <div className={styles.statItem}>
                    <span className={styles.statLabel}>Total Value Locked</span>
                    <span className={styles.statValue}>{tvl}</span>
                </div>
                <div className={`${styles.statItem} ${styles.cycle}`}>
                    <span className={styles.statLabel}>Next Cycle</span>
                    <span className={styles.statValue}>{nextCycle}</span>
                </div>
            </div>

            <Link href={`/strategy/${vaultType}`}>
                <button className={styles.detailsButton}>
                    View Details
                </button>
            </Link>
        </div>
    );
};
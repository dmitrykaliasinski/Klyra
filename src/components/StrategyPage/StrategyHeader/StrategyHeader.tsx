import styles from './StrategyHeader.module.scss'
import {VaultType} from "@/components/MainPage/VaultCard/VaultCard";
import {PiChartLineDown, PiChartLineUp} from "react-icons/pi";
import {RiArrowUpDownFill} from "react-icons/ri";
import React from "react";

interface StrategyHeaderProps {
    title: string
    description: string
    tvl: string
    sharePrice: string
    expiry: string
    depositAmount: string
    depositValue: string
    theme?: VaultType
}

export default function StrategyHeader({
                                           title,
                                           description,
                                           tvl,
                                           sharePrice,
                                           expiry,
                                           depositAmount,
                                           depositValue,
                                           theme,
                                       }: StrategyHeaderProps) {
    const getTitleIcon = () => {
        switch (theme) {
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
        <div className={`${styles.header} ${styles[theme]}`}>
            <div className={styles.left}>
                <h2><span className={styles.icon}>{getTitleIcon()}</span>{title} <span className={styles.token}>sUSDS</span></h2>
                <p>{description}</p>
                <div className={styles.metrics}>
                    <div>
                        <small>Total Value Locked</small>
                        <strong>{tvl}</strong>
                    </div>
                    <div>
                        <small>Share Price</small>
                        <strong>{sharePrice}</strong>
                    </div>
                    <div>
                        <small>Next Expiry</small>
                        <strong>{expiry}</strong>
                        <span className={styles.ready}>Ready for deposits</span>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <small>Your Deposit</small>
                <strong>{depositAmount}</strong>
                <span>≈ {depositValue}</span>
            </div>
        </div>
    )
}
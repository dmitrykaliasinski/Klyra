import styles from './StrategyOverview.module.scss'
import {FaChartColumn} from "react-icons/fa6";
import {FaRegClock} from "react-icons/fa";

interface StrategyOverviewProps {
    strikePrice: string
    currentPrice: string
    theme: string
}

export default function StrategyOverview({ strikePrice, currentPrice, theme }: StrategyOverviewProps) {
    return (
        <div className={styles.overview}>
            <h3>
                <span className={styles[theme]} ><FaChartColumn size={16} /></span>
                <span>Strategy Overview</span>
            </h3>

            <div className={styles.content}>
                <div className={styles.howItWorks}>
                    <h4>How It Works</h4>
                    <ol>
                        <li>The vault analyzes market conditions to determine a directional bias.</li>
                        <li>
                            It creates option spread positions that profit if the market moves in the expected direction.
                        </li>
                        <li>
                            At the end of each weekly cycle, positions are settled and profits are distributed.
                        </li>
                    </ol>
                </div>

                <div className={styles.currentPosition}>
                    <h4>Current Position</h4>
                    <div className={styles.type}>
                        <span className={`${styles.badge} ${styles[theme]}`}>{theme[0].toUpperCase() + theme.slice(1)}</span> Call Option
                    </div>
                    <div className={styles.metrics}>
                        <div>
                            <small>Strike Price</small>
                            <strong>{strikePrice}</strong>
                        </div>
                        <div>
                            <small>Current Price</small>
                            <strong>{currentPrice}</strong>
                        </div>
                    </div>
                    <div className={styles.placeholder}>
                        <div className={styles.chartPlaceholder}>Price vs Strike</div>
                    </div>
                </div>
            </div>

            <div className={styles.expiryNotice}>
                <FaRegClock size={12} /> Next option expiry in <strong>0d 0h 0m</strong>
            </div>
        </div>
    )
}
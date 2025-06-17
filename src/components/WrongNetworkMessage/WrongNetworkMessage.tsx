import {useAccount, useChainId} from 'wagmi'
import {FaExclamationTriangle} from "react-icons/fa";

import styles from './WrongNeworkMessage.module.scss'

const BASE_MAINNET_ID = 8453;

export default function WrongNetworkMessage() {
    const {isConnected} = useAccount();
    const chainId = useChainId();

    if (!isConnected) return null;

    const isWrongNetwork = chainId !== BASE_MAINNET_ID;

    if (!chainId || !isWrongNetwork) return null;

    return (
        <div className={styles.warning}>
            <span><FaExclamationTriangle size={12} /></span>
            <span>
               <strong>Wallet connected to wrong network. Please switch to Base Mainnet.</strong>
            </span>
        </div>
    )
}
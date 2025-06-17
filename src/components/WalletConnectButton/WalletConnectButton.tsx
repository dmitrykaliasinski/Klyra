'use client';
import {injected, useAccount, useConnect, useDisconnect} from 'wagmi';
import {useEffect, useRef, useState} from "react";
import {FaArrowUpRightFromSquare, FaRegCopy, FaWallet} from "react-icons/fa6";
import styles from "./WalletConnectButton.module.scss";

export default function WalletConnectButton() {
    const {address, isConnected} = useAccount();
    const {connect, error} = useConnect();
    const {disconnect} = useDisconnect();

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (error?.message.includes('not found')) {
            alert('Please install a wallet extension like MetaMask.')
        }
    }, [error])

    const disconnectWallet = () => {
        disconnect();
        setDropdownOpen(false);
    };

    const copyAddress = () => {
        if (address) {
            navigator.clipboard.writeText(address);
            setDropdownOpen(false)
        }
    };

    const connectWallet = () => {
        connect({connector: injected()})
    }

    const shortAddress = (addr) =>
        addr ? `${addr.slice(0, 6)}...${addr.slice(-4)}` : "";

    return (
        <div className={styles.walletContainer} ref={dropdownRef}>
            {isConnected ? (
                <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className={styles.connectedButton}
                >
                    <span className={styles.statusDot}></span>
                    {shortAddress(address)}
                    <span style={{fontSize: 10}}>▾</span>
                </button>
            ) : (
                <button onClick={connectWallet} className={styles.connectButton}>
                    Connect Wallet
                </button>
            )}

            {dropdownOpen && (
                <div className={styles.dropdown}>
                    <button onClick={copyAddress} className={styles.dropdownItem}>
                        <FaRegCopy size={12}/> <span>Copy Address</span>
                    </button>
                    <a
                        href={`https://basescan.org/address/${address}`}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.dropdownItemLink}
                        onClick={() => setDropdownOpen(false)}
                    >
                        <FaArrowUpRightFromSquare size={12}/> <span>View on Basescan</span>
                    </a>
                    <button onClick={disconnectWallet} className={styles.dropdownItem}>
                        <FaWallet size={12}/> <span>Disconnect</span>
                    </button>
                </div>
            )}
        </div>
    );
}
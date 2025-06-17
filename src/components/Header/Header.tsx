'use client';

import {useState} from "react";
import Link from 'next/link'
import WalletConnectButton from "@/components/WalletConnectButton/WalletConnectButton";
import {usePathname} from "next/navigation";
import styles from './Header.module.scss'

export default function Header() {
    const pathname = usePathname()
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { href: '/', label: 'Products' },
        { href: '/portfolio', label: 'Portfolio' },
        { href: '/docs', label: 'Docs' },
    ]

    return (
        <header className={styles.header}>
            <Link href='/' className={styles.logoBlock}>
                <div className={styles.logoCircle}>K</div>
                <h1 className={styles.logoText}>Klyra</h1>
            </Link>
            <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
                {navLinks.map(({ href, label }) => (
                    <Link
                        key={href}
                        href={href}
                        className={pathname === href ? styles.activeLink : ''}
                        onClick={() => setMenuOpen(false)}
                    >
                        {label}
                    </Link>
                ))}
            </nav>
            <div className={styles.rightBlock}>
                <WalletConnectButton/>
                <button
                    className={styles.burger}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? 'X' : '☰'}
                </button>
            </div>
        </header>
    )
}
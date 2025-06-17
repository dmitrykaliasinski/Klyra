import Link from "next/link";
import {FaDiscord, FaGithub, FaTwitter} from "react-icons/fa";
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.logoBlock}>
                    <div className={styles.logoCircle}>K</div>
                    <h1 className={styles.logoText}>Klyra</h1>
                </div>
                <div className={styles.links}>
                    <Link href="/documentation">Documentation</Link>
                    <Link href="/terms">Terms of Service</Link>
                    <Link href="/privacy">Privacy Policy</Link>
                    <Link href="/faq">FAQ</Link>
                </div>
            </div>
            <div className={`${styles.footerContent} ${styles.footerLast}` }>
                <div className={styles.copyright}>
                    © {new Date().getFullYear()} Klyra. All rights reserved.
                </div>
                <div className={styles.links}>
                    <a href="#"><FaTwitter size={20} /></a>
                    <a href="#"><FaGithub size={20} /></a>
                    <a href="#"><FaDiscord size={20} /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
'use client'

import {useState} from 'react'
import styles from './DepositPanel.module.scss'

export default function DepositPanel() {
    const [mode, setMode] = useState<'deposit' | 'withdraw'>('deposit')
    const [amount, setAmount] = useState<number | string>('')
    const balance = 0;

    const handleSetPercent = (percent: number) => {
        const calculated = (balance * percent).toFixed(2)
        setAmount(calculated)
    }

    return (
        <div className={styles.panel}>
            <div className={styles.modeButtons}>
                <button
                    className={mode === 'deposit' ? styles.active : ''}
                    onClick={() => setMode('deposit')}
                >
                    Deposit
                </button>
                <button
                    className={mode === 'withdraw' ? styles.active : ''}
                    onClick={() => setMode('withdraw')}
                >
                    Withdraw
                </button>
            </div>
            {mode === 'deposit' ? (<>
                    <div className={styles.form}>
                        <label htmlFor="amount">Amount (sUSDS)</label>
                        <div className={styles.inputRow}>
                            <input
                                type="number"
                                id="amount"
                                min="0"
                                placeholder="0.00"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                            />
                            <span className={styles.balance}>Balance: ${balance.toFixed(2)}</span>
                        </div>

                        <div className={styles.percentButtons}>
                            {[25, 50, 75, 100].map((pct) => (
                                <button key={pct} onClick={() => handleSetPercent(pct / 100)}>
                                    {pct}%
                                </button>
                            ))}
                        </div>

                        <button className={styles.actionButton}>
                            {mode === 'deposit' ? `Approve sUSDS` : 'Withdraw'}
                        </button>
                    </div>

                    <div className={styles.infoBox}>
                        <ul>
                            <li>You will receive vault tokens representing your share of the vault.</li>
                            <li>Any profits from options will accrue separately and can be claimed manually.</li>
                            <li>Deposits during an active cycle will be queued for the next cycle.</li>
                        </ul>
                    </div>
                </>
            ) : (<p style={{color: 'red'}}>Not found</p>)}

        </div>
    )
}
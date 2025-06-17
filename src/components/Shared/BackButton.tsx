import Link from "next/link";

import styles from './BackButton.module.scss'
import {IoIosArrowRoundBack} from "react-icons/io";

interface Iprops {
    url: string
}

export const BackButton = ({url}: Iprops) => {
    return <Link href={url} className={styles.main}><div><IoIosArrowRoundBack size={18}/> <span>Back to Vaults</span></div></Link>
}
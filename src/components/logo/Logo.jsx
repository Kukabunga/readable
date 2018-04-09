import styles from './LogoStyles'
import { Link } from 'react-router-dom'
import { css } from 'aphrodite'

export default function Logo({ texts }) {
    return (
        <span className={css(styles.logo)}><Link className={css(styles.logoLink)} to="/">{texts.logo}</Link></span>
    )
}

import { css } from 'aphrodite/no-important'
import styles from './PageHeaderStyles'

export default function PageHeader() {
    return (
        <header className={css(styles.pageHeader)}>
            <div className={css(styles.mainNavbar)}>
                <div className={css(styles.mainNavbarSectionLeft)}>
                    Section Left
                </div>
                <div className={css(styles.mainNavbarSectionRight)}>
                    Section Rigth
                </div>
            </div>
        </header>
    )
}
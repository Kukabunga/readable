import { css } from 'aphrodite/no-important'
import styles from './PageHeaderStyles'

import Logo from '../../logo/Logo'
import MainMenu from '../../menu/MainMenu'

export default function PageHeader({texts}) {
    return (
        <header className={css(styles.pageHeader)}>
            <div className={css(styles.mainNavbar)}>
                <div className={css(styles.mainNavbarSectionLeft)}>
                    <Logo texts={texts}/>
                    <MainMenu texts={texts}/>
                </div>
            </div>
        </header>
    )
}
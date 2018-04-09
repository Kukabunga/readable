import styles from './MainMenuStyles'
import { css } from 'aphrodite'
import { Link } from 'react-router-dom'

export default function MainMenu({ texts }) {
    return (
        <ul className={css(styles.menu)}>
            <li className={css(styles.menuItem)}><Link className={css(styles.menuLink)} to="/categories">{texts.menu.categories}</Link></li>
            <li className={css(styles.menuItem)}><Link className={css(styles.menuLink)} to="/posts">{texts.menu.posts}</Link></li>
            <li className={css(styles.menuItem)}><Link className={css(styles.menuLink)} to="/makePost">{texts.menu.makePost}</Link></li>
        </ul>
    )
}
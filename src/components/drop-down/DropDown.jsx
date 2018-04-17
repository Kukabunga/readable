import { css } from 'aphrodite/no-important'
import styles from './DropDownStyles'
import { string, object, array } from 'prop-types'

export default class DropDown extends React.Component {
    static propTypes = {
        name: string.isRequired,
        texts: object.isRequired,
        items: array.isRequired
    }

    state = {
        expanded: false
    }

    OnExpand = (e) => {
        e.preventDefault();
        this.setState(state => {
            return { ...state, expanded: !state.expanded }
        })
    }

    render() {
        const { texts, items } = this.props;
        const { expanded } = this.state;
        const _styles = expanded ? css(styles.dropDown) + ' ' + css(styles.dropDownActive): css(styles.dropDown)
        return (
            <div className={css(styles.dropDown)}>
                <div className={`${css(styles.dropDownBlock)} ${expanded && css(styles.dropDownActive)}` }>
                    <a href="#" className={css(styles.dropDownButton)} onClick={this.OnExpand}>{this.props.name}</a>
                </div>
                {
                    expanded && <ul className={`${css(styles.dropDownList)} ${expanded && css(styles.dropDownListActive)}`}>
                        {
                            items && items.map((item) => (
                                <li key={item.name} className={css(styles.dropDownItem)}>
                                    <a href="">{item.name}</a>
                                </li>
                            ))
                        }
                    </ul>
                }
            </div>
        )
    }
}
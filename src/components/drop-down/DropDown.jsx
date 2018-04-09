import { css } from 'aphrodite/no-important'
import styles from './DropDownStyles'
import { string, object } from 'prop-types'

class DropDown extends React.Component {
    static propTypes = {
        name: string.isRequired,
        texts: object.isRequired
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
        return (
            <div className={css(styles.dropDown)}>
                <div className={css(styles.dropDownBlock)}>
                    <a href="#" className={css(styles.dropDownButton)} onClick={this.OnExpand}>{texts.name}</a>
                </div>
                <div className={css(styles.dropDownList)}>
                    {
                        items && items.map((item) => {
                            <div className={css(styles.dropDownItem)}>
                                <a href="">{item.name}</a>
                            </div>
                        })
                    }
                </div>
            </div>
        )
    }
}
import DropDown from '../../components/drop-down/DropDown'



const items = [
    {name: 'item1'},
    {name: 'item2'},
    {name: 'item3'},
    {name: 'item4'}
]
export default class MainPage extends React.Component {
    render() {
        return (
            <div>
                <div>MainPage</div>
                <DropDown name={`categories`} texts={{}} items={items} />
            </div>

        )
    }
}
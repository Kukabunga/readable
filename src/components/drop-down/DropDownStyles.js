import { StyleSheet } from 'aphrodite/no-important'

export default StyleSheet.create({
    dropDown: {
        width: '200px',
        marginLeft: '30px'
    },
    dropDownBlock: {
        marginLeft: '24px'

    },
    dropDownButton: {
        fontSize: '36px',
        textDecoration: 'none',
        fontSize: '36px',
        color: '#164ea0'
    },
    dropDownActive: {
        border: '2px solid #e2e2e2',
        borderRadius: '5px',
        borderStyle: 'groove'
    },
    dropDownListActive : {
        border: '1px solid #e5e5e5',
        borderRadius: '3px',
        borderStyle: 'groove',
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px 0 rgba(0,0,0,.1);'
    },
    dropDownList: {
        marginTop: '0',
        marginLeft: '26px',
        listStyle: 'none',
        padding: '0',
        paddingLeft: '12px'
    }, 
    dropDownItem: {

    }
})
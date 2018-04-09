import { StyleSheet } from 'aphrodite'


export default StyleSheet.create({
    menu: {
        display: 'inline-block',
        listStyle: 'none',
    },
    menuItem: {
        paddingLeft: '12px',
        paddingRight: '12px',
        display: 'inline-block',
    },
    menuLink: {
        fontSize: '24px',
        textDecoration: 'none',
        color: '#616366',
        ':hover': {
            color: '#164ea0'
        },
        ':active': {
            color: '#164ea0'
        }
    }
});

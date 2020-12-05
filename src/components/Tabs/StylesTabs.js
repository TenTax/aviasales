const styles = theme => ({
    button: {
        width: '50%',
        '&:first-child': {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
        },
        '&:last-child': {
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
        }
    },
    selected: {
        backgroundColor: '#2196f3',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#2196f3'
        }
    },
    unselected: {
        color: '#4a4a4a',
        border: '1px solid #dfe5ec;',
        backgroundColor: '#fff'
    }
});

export default styles;
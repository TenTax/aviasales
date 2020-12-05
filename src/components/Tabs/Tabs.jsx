import React from 'react';
import { connect } from 'react-redux';

import { sorting } from '../../redux/actions';

import { Button, withStyles } from '@material-ui/core';

import styles from './StylesTabs';
import './Tabs.css';

class Tabs extends React.Component {
    render() {
        const { sort, sorting, classes } = this.props;

        return (
            <div className="tabs">
                <Button
                    onClick={() => sorting('price')}
                    className={`${classes.button} ${sort === 'price' ? classes.selected : classes.unselected}`}
                >
                    Самый дешевый
                </Button>
                <Button
                    onClick={() => sorting('duration')}
                    className={`${classes.button} ${sort === 'duration' ? classes.selected : classes.unselected}`}
                >
                    Самый быстрый
                </Button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        sort: state.ticketsReduce.sort
    };
}

const mapDispatchToProps = {
    sorting
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Tabs));
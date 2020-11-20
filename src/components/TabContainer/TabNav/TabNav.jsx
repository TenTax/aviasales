import React from 'react';
import { connect } from 'react-redux';

import { sortingPrice, sortingDuration } from '../../../redux/actions';

import './TabNav.css';

class TabNav extends React.Component {
    render() {
        const { sortingPrice, sortingDuration, sort } = this.props;

        return (
            <div className='TabNav'>
                <button
                    onClick={sortingPrice}
                    className={`TabNavButton ${sort === 'price' && '_active'}`}>
                    Самый дешевый
                </button>
                <button
                    onClick={sortingDuration}
                    className={`TabNavButton ${sort === 'duration' && '_active'}`}>
                    Самый быстрый
                </button>
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
    sortingPrice,
    sortingDuration
}

export default connect(mapStateToProps, mapDispatchToProps)(TabNav);
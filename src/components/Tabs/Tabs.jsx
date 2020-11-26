import React from 'react';
import { connect } from 'react-redux';

import { sortingPrice, sortingDuration } from '../../redux/actions';

import './Tabs.css';

class Tabs extends React.Component {
    render() {
        const { sortingPrice, sortingDuration, sort } = this.props;

        return (
            <div className="tabs">
                <button
                    onClick={sortingPrice}
                    className={`tabs__btn ${sort === 'price' && '_active'}`}>
                    Самый дешевый
                </button>
                <button
                    onClick={sortingDuration}
                    className={`tabs__btn ${sort === 'duration' && '_active'}`}>
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

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
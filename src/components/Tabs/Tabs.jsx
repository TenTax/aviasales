import React from 'react';
import { connect } from 'react-redux';

import { sorting } from '../../redux/actions';

import './Tabs.css';

class Tabs extends React.Component {
    render() {
        const { sort, sorting } = this.props;

        return (
            <div className="tabs">
                <button
                    onClick={() => sorting('price')}
                    className={`tabs__btn ${sort === 'price' && '_active'}`}>
                    Самый дешевый
                </button>
                <button
                    onClick={() => sorting('duration')}
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
    sorting
}

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
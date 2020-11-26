import React from 'react';
import { connect } from 'react-redux';
import { addFilter, delFilter } from '../../redux/actions';
import './Filter.css';

class Filter extends React.Component {
    render() {
        const { addFilter, delFilter } = this.props;

        const filterCheck = (e) => {
            if (e.target.checked) {
                addFilter(e.target.getAttribute('data-filter'));
            } else {
                delFilter(e.target.getAttribute('data-filter'))
            }
        }

        return (
            <div className="filter">
                <h2 className="filter__title">Количество пересадок</h2>
                <label className="filter__label" htmlFor="stopsWithout">
                    <input className="filter__checkbox" onChange={filterCheck} type="checkbox" id='stopsWithout' data-filter='0' />
                    <span>Без пересадок</span>
                </label>
                <label className="filter__label" htmlFor="oneStop">
                    <input className="filter__checkbox" onChange={filterCheck} type="checkbox" id='oneStop' data-filter='1' />
                    <span>1 пересадка</span>
                </label>
                <label className="filter__label" htmlFor="twoStops">
                    <input className="filter__checkbox" onChange={filterCheck} type="checkbox" id='twoStops' data-filter='2' />
                    <span>2 пересадки</span>
                </label>
                <label className="filter__label" htmlFor="threeStops">
                    <input className="filter__checkbox" onChange={filterCheck} type="checkbox" id='threeStops' data-filter='3' />
                    <span>3 пересадки</span>
                </label>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = {
    addFilter,
    delFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
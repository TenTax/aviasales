import { connect } from 'react-redux';
import './TabNav.css';
import { sortingPrice } from '../../../redux/actions';
import React from 'react';


const TabNav = (props) => {
    return (
        <div className='TabNav'>
            <button className='TabNavButton _active'>Самый дешевый</button>
            <button className='TabNavButton'>Самый быстрый</button>
        </div>
    );
}

export default TabNav;
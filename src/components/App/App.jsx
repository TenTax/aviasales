import Axios from 'axios';
import React from 'react';
import Filter from '../Filter/Filter';

import TabContainer from '../TabContainer/TabContainer';

import './App.css';

const App = () => {
    return (
        <div className="App">
            <Filter />
            <TabContainer />
        </div>
    );
}

export default App;

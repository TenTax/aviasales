import React from 'react';

import FilterPanel from '../FilterPanel';
import SortPanel from '../SortPanel';
import TicketList from '../TicketList';
import ButtonLoadMore from '../ButtonLoadMore';
import Logo from '../Logo';
import './App.css';

const AppView = ({ handlerLoadMore, handlerSortPanel, handlerFilterPanel, sort, tickets, filters }) => (
    <div className="App">
        <Logo />
        <div className="AppContainer">
            <FilterPanel filters={filters} handlerFilterPanel={handlerFilterPanel} />
            <div>
                <SortPanel sort={sort} handlerSortPanel={handlerSortPanel} />
                <TicketList tickets={tickets} />
                <ButtonLoadMore handlerLoadMore={handlerLoadMore} />
            </div>
        </div>
    </div>
);

export default AppView;

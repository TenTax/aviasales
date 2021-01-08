import React from 'react';

import FilterPanelLabel from './FilterPanelLabel';
import './FilterPanel.css';

const FilterPanel = ({ handlerFilterPanel, filters }) => (
    <div className="FilterPanel">
        <div className="FilterPanelTitle">Количество пересадок</div>
        <FilterPanelLabel
            id="allTickets"
            handlerFilterPanel={handlerFilterPanel}
            checked={filters.length === 4 ? true : false}
            label="Все"
        />
        <FilterPanelLabel
            id="withoutTransfers"
            handlerFilterPanel={handlerFilterPanel}
            checked={filters.indexOf(0) !== -1 ? true : false}
            label="Без пересадок"
            filter={0}
        />
        <FilterPanelLabel
            id="oneTransfer"
            handlerFilterPanel={handlerFilterPanel}
            checked={filters.indexOf(1) !== -1 ? true : false}
            label="Одна пересадка"
            filter={1}
        />

        <FilterPanelLabel
            id="twoTransfers"
            handlerFilterPanel={handlerFilterPanel}
            checked={filters.indexOf(2) !== -1 ? true : false}
            label="Две пересадки"
            filter={2}
        />

        <FilterPanelLabel
            id="threeTransfers"
            handlerFilterPanel={handlerFilterPanel}
            checked={filters.indexOf(3) !== -1 ? true : false}
            label="Три пересадки"
            filter={3}
        />
    </div>
);

export default FilterPanel;

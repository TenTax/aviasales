import React from 'react';

import './FilterPanelLabel.css';

const FilterPanelLabel = ({ label, id, handlerFilterPanel, checked, filter }) => (
    <label htmlFor={id} className="FilterPanelLabel">
        <input
            id={id}
            onChange={() => handlerFilterPanel(filter)}
            checked={checked}
            type="checkbox"
        /> {label}
    </label>
);

export default FilterPanelLabel;

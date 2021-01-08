import React from 'react';

import ButtonSort from './ButtonSort';
import './SortPanel.css';

const SortPanel = (props) => (
    <div className="SortPanel">
        <ButtonSort label="Самый дешевый" sortable="price" {...props} />
        <ButtonSort label="Самый быстрый" sortable="duration" {...props} />
    </div>
);

export default SortPanel;

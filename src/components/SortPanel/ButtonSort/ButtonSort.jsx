import React from 'react';

import './ButtonSort.css';

const ButtonSort = ({ label, sort, sortable, handlerSortPanel }) => {
    const classActive = sort === sortable ? 'active' : '';

    return (
        <button
            className={`ButtonSort ${classActive}`}
            onClick={() => handlerSortPanel(sortable)}>
            {label}
        </button>
    )
};

export default ButtonSort;

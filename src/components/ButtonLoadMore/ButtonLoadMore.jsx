import React from 'react';

import './ButtonLoadMore.css';

const ButtonLoadMore = ({handlerLoadMore}) => (
    <button 
        onClick={handlerLoadMore} 
        type="button"
        className="ButtonLoadMore">
            Загрузить еще
    </button>
);

export default ButtonLoadMore;

import './Filter.css';

const Filter = () => {
    return (
        <div className='Filter'>
            <div className='FilterTitle'>Количество пересадок</div>
            <label className='FilterLabel' htmlFor="stopsWithout">
                <input className='FilterCheckbox' type="checkbox" id='stopsWithout' />
                <span>Без пересадок</span>
            </label>
            <label className='FilterLabel' htmlFor="oneStop">
                <input className='FilterCheckbox' type="checkbox" id='oneStop' />
                <span>1 пересадка</span>
            </label>
            <label className='FilterLabel' htmlFor="twoStops">
                <input className='FilterCheckbox' type="checkbox" id='twoStops' />
                <span>2 пересадки</span>
            </label>
            <label className='FilterLabel' htmlFor="threeStops">
                <input className='FilterCheckbox' type="checkbox" id='threeStops' />
                <span>3 пересадки</span>
            </label>
        </div>
    );
}

export default Filter;
import './TabNav.css';

const TabNav = () => {
    return (
        <div className='TabNav'>
            <button className='TabNavButton _active'>Самый дешевый</button>
            <button className='TabNavButton'>Самый быстрый</button>
        </div>
    );
}

export default TabNav;
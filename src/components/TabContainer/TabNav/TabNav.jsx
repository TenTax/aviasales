import './TabNav.css';

const TabNav = (props) => {
    return (
        <div className='TabNav'>
            <button className='TabNavButton _active'>Самый дешевый</button>
            <button className='TabNavButton'>Самый быстрый</button>
        </div>
    );
}

export default TabNav;
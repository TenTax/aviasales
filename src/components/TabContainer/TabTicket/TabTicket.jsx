import './TabTicket.css';

const TabTicket = ({ ticket }) => {
    const { price, carrier, segments } = ticket;

    const parseDate = (date, difference) => {
        const newDate = new Date(Date.parse(date) + parseInt(difference) * 60 * 1000).toLocaleTimeString();
        return newDate.substring(0, newDate.lastIndexOf(':'));
    }

    const parseTime = (time) => {
        return `${Math.floor(time / 60)}ч ${Math.ceil(time % 60)}м`;
    }

    const stopsParse = (stops) => {
        if (stops.length) {
            return 'Пересадок ' + stops.length;
        } else {
            return 'Без пересадок';
        }
    }

    return (
        <div className='TabTicket'>
            <div className='TabTicketRow'>
                <div className='TabTicketCol'>
                    <div className='TabTicketPrice'>{price.toLocaleString()} Р</div>
                </div>
                <div className='TabTicketCol'>
                    <img className='TabTicketImage' src={`//pics.avs.io/99/36/${carrier}.png`} alt="" />
                </div>
            </div>
            <div className='TabTicketRow'>
                <div className='TabTicketCol'>
                    <div className='TabTicketTitle'>{segments[0].origin} - {segments[0].destination}</div>
                    <div className='TabTicketText'>
                        {parseDate(segments[0].date, 0)} - {parseDate(segments[0].date, segments[0].duration)}
                    </div>
                </div>
                <div className='TabTicketCol'>
                    <div className='TabTicketTitle'>В пути</div>
                    <div className='TabTicketText'>{parseTime(segments[0].duration)}</div>
                </div>
                <div className='TabTicketCol'>
                    <div className='TabTicketTitle'>{stopsParse(segments[0].stops)}</div>
                    <div className='TabTicketText'>
                        {segments[0].stops.map((stop, i, stops) => {
                            return <span key={i}>{++i !== stops.length ? stop + ',' : stop} </span>
                        })}
                    </div>
                </div>
            </div>
            <div className='TabTicketRow'>
                <div className='TabTicketCol'>
                    <div className='TabTicketTitle'>{segments[1].origin} - {segments[1].destination}</div>
                    <div className='TabTicketText'>
                        {parseDate(segments[1].date, 0)} - {parseDate(segments[1].date, segments[1].duration)}
                    </div>
                </div>
                <div className='TabTicketCol'>
                    <div className='TabTicketTitle'>В пути</div>
                    <div className='TabTicketText'>{parseTime(segments[1].duration)}</div>
                </div>
                <div className='TabTicketCol'>
                    <div className='TabTicketTitle'>{stopsParse(segments[1].stops)}</div>
                    <div className='TabTicketText'>
                        {segments[1].stops.map((stop, i, stops) => {
                            return <span key={i}>{++i !== stops.length ? stop + ',' : stop} </span>
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TabTicket;
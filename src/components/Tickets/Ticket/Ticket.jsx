import TicketInfo from './TicketInfo';

import './Ticket.css';

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

    const ticketData = {
        price: price.toLocaleString() + ' P',
        logo: `//pics.avs.io/99/36/${carrier}.png`,

        directionTo: segments[0].origin + ' - ' + segments[0].destination,
        timeTo: parseDate(segments[0].date, 0) + ' - ' + parseDate(segments[0].date, segments[0].duration),
        durationTo: parseTime(segments[0].duration),
        stopsCountTo: stopsParse(segments[0].stops),
        stopsNameTo: segments[0].stops.map((stop, i, stops) => <span key={i}>{++i !== stops.length ? stop + ',' : stop} </span>),

        directionFrom: segments[1].origin + ' - ' + segments[1].destination,
        timeFrom: parseDate(segments[1].date, 0) + ' - ' + parseDate(segments[1].date, segments[1].duration),
        durationFrom: parseTime(segments[1].duration),
        stopsCountFrom: stopsParse(segments[1].stops),
        stopsNameFrom: segments[1].stops.map((stop, i, stops) => {
            return <span key={i}>{++i !== stops.length ? stop + ',' : stop} </span>
        })
    }

    return (
        <div className='ticket'>
            <div className='ticket__row'>
                <div className='ticket__price'>{ticketData.price}</div>
                <img className='ticket__logo' src={ticketData.logo} alt="" />
            </div>

            <div className='ticket__grid'>
                <TicketInfo title={ticketData.directionTo} text={ticketData.timeTo} />
                <TicketInfo title='В пути' text={ticketData.durationTo} />
                <TicketInfo title={ticketData.stopsCountTo} text={ticketData.stopsNameTo} />

                <TicketInfo title={ticketData.directionFrom} text={ticketData.timeFrom} />
                <TicketInfo title='В пути' text={ticketData.durationFrom} />
                <TicketInfo title={ticketData.stopsCountFrom} text={ticketData.stopsNameFrom} />
            </div>
        </div>
    );
}

export default TabTicket;
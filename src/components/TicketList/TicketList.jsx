import React from 'react';

import Ticket from '../Ticket';
import './TicketList.css';

const TicketList = ({ tickets }) => {

    let ticketsList = tickets.map(({ id, ...tickets }) => {
        return <Ticket key={id} {...tickets} />
    });

    return (
        <div className="TicketList">{ticketsList}</div>
    );
}

export default TicketList;

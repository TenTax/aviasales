import React, { Fragment } from 'react';

import TicketInfo from './TicketInfo';
import './Ticket.css';

const Ticket = ({ price, carrier, segments }) => {

    const ticketInfo = segments.map((segment, index) => {
        return (
            <Fragment key={index}>
                <TicketInfo
                    header={`${segment.origin} - ${segment.destination}`}
                    content={`${segment.departure} - ${segment.arrival}`}
                />
                <TicketInfo
                    header="В пути"
                    content={segment.duration}
                />
                <TicketInfo
                    header={`Пересадок ${segment.stopsCount}`}
                    content={segment.stopsNames}
                />
            </Fragment>
        );
    });

    return (
        <div className="Ticket">
            <div className="TicketPrice">{price} Р</div>
            <img className="TicketLogo" src={`//pics.avs.io/99/36/${carrier}.png`} alt="" />
            {ticketInfo}
        </div>
    );
};

export default Ticket;

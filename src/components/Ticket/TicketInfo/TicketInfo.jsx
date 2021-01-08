import React from 'react';

import './TicketInfo.css';

const TicketInfo = ({ header, content }) => (
    <div className="TicketInfo">
        <div className="TicketInfoHeader">{header}</div>
        <div className="TicketInfoContent">{content}</div>
    </div>
);

export default TicketInfo;

import React from 'react';
import { connect } from 'react-redux';

import { setTickets } from '../../redux/actions';

import TabNav from './TabNav/TabNav';
import TabTicket from './TabTicket/TabTicket';

import './TabContainer.css';

class TabContainer extends React.Component {
    componentDidMount() {
        this.props.setTickets();
    }

    render() {
        const { tickets, sort } = this.props;

        const ticketsSorting = () => {
            return tickets
                .sort((a, b) => {
                    if (sort === 'price') {
                        if (a.price > b.price) return 1;
                        if (a.price === b.price) return 0;
                        if (a.price < b.price) return -1;
                    } else if (sort === 'duration') {
                        a = a.segments[0].duration + a.segments[1].duration;
                        b = b.segments[0].duration + b.segments[1].duration;
                        if (a > b) return 1;
                        if (a === b) return 0;
                        if (a < b) return -1;
                    }
                })
                .map((ticket, i) => <TabTicket key={i} ticket={ticket} />);
        }


        return (
            <div className='TabContainer'>
                <TabNav />
                {ticketsSorting()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tickets: state.ticketsReduce.tickets,
        sort: state.ticketsReduce.sort
    };
}

const mapDispatchToProps = {
    setTickets
}

export default connect(mapStateToProps, mapDispatchToProps)(TabContainer);

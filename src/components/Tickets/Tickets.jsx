import React from 'react';
import { connect } from 'react-redux';

import { nextPage } from '../../redux/actions';

import Ticket from './Ticket/Ticket';

import './Tickets.css';

class Tickets extends React.Component {

    render() {
        const { tickets, sort, perPage, pageCount, nextPage, filter } = this.props;

        return (
            <div className="tickets">
                {
                    tickets
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
                            return null;
                        })
                        .slice(1, pageCount * perPage + 1)
                        .filter((ticket) => {
                            if (filter.length > 0) {
                                for (let i = 0; i < filter.length; i++) {
                                    if (ticket.segments[0].stops.length === +filter[i]) {
                                        for (let j = 0; j < filter.length; j++) {
                                            if (ticket.segments[1].stops.length === +filter[j]) {
                                                return ticket;
                                            }
                                        }
                                    }
                                }
                            } else {
                                return ticket;
                            }
                            return null;
                        })
                        .map((ticket, i) => <Ticket key={i} ticket={ticket} />)
                }
                <button onClick={() => nextPage(pageCount)}>Загрузить еще</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tickets: state.ticketsReduce.tickets,
        sort: state.ticketsReduce.sort,
        perPage: state.ticketsReduce.perPage,
        pageCount: state.ticketsReduce.pageCount,
        filter: state.ticketsReduce.filter
    };
}

const mapDispatchToProps = {
    nextPage
}

export default connect(mapStateToProps, mapDispatchToProps)(Tickets);

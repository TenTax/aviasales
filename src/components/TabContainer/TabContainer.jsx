import React from 'react';
import { connect } from 'react-redux';

import { setTickets, nextPage } from '../../redux/actions';

import TabNav from './TabNav/TabNav';
import TabTicket from './TabTicket/TabTicket';

import './TabContainer.css';
import Preloader from '../Preloader/Preloader';

class TabContainer extends React.Component {
    componentDidMount() {
        this.props.setTickets();
    }

    render() {
        const { tickets, sort, perPage, pageCount, nextPage, isFetching, filter } = this.props;

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
                    return null;
                })
                .slice(1, pageCount * perPage + 1)
                .filter((ticket) => {
                    if(filter.length > 0) {
                        for(let i = 0; i < filter.length; i++) {
                            if(ticket.segments[0].stops.length === +filter[i]) {
                                for(let j = 0; j < filter.length; j++) {
                                    if(ticket.segments[1].stops.length === +filter[j]) {
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
                .map((ticket, i) => <TabTicket key={i} ticket={ticket} />);
        }

        return (
            <div className='TabContainer'>
                <TabNav />
                {isFetching
                    ? <Preloader />
                    : <div className='TabContainerTicketsBox'>
                        {ticketsSorting()}
                        <button
                            className='TabContainerBtn'
                            onClick={() => nextPage(pageCount)}>
                            Загрузить еще
                        </button>
                      </div>
                }
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
        isFetching: state.ticketsReduce.isFetching,
        filter: state.ticketsReduce.filter
    };
}

const mapDispatchToProps = {
    setTickets,
    nextPage
}

export default connect(mapStateToProps, mapDispatchToProps)(TabContainer);

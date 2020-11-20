import './TabContainer.css';
// import TabNav from './TabNav/TabNav';
import TabTicket from './TabTicket/TabTicket';
import { setTickets, sortingPrice, sortingDuration } from '../../redux/actions';
import { connect } from 'react-redux';
import React from 'react';


class TabContainer extends React.Component {
    componentDidMount() {
        console.log(this.props);
        this.props.setTickets();
    }

    render() {
        const { tickets, sortingPrice, sortingDuration } = this.props;

        const sortOfPrice = () => {
            console.log(tickets);
            sortingPrice(tickets);
            this.forceUpdate();
        }

        const sortOfDuration = () => {
            console.log(tickets);
            sortingDuration(tickets);
            this.forceUpdate();
        }


        return (
            <div className='TabContainer'>
                <div className='TabNav'>
                    <button onClick={sortOfPrice} className='TabNavButton _active'>Самый дешевый</button>
                    <button onClick={sortOfDuration} className='TabNavButton'>Самый быстрый</button>
                </div>
                {tickets.map((ticket, i) => <TabTicket key={i} ticket={ticket} />)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tickets: state.ticketsReduce.tickets
    };
}

const mapDispatchToProps = {
    setTickets,
    sortingPrice,
    sortingDuration
}

export default connect(mapStateToProps, mapDispatchToProps)(TabContainer);

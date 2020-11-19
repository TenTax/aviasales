import './TabContainer.css';
import TabNav from './TabNav/TabNav';
import TabTicket from './TabTicket/TabTicket';
import {setTickets} from '../../redux/actions';
import { connect } from 'react-redux';
import React from 'react';


class TabContainer extends React.Component {
  componentDidMount() {
      this.props.setTickets();
  }

  render() {
    const { tickets } = this.props;

    return (
      <div className='TabContainer'>
        <TabNav />
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
  setTickets
}

export default connect(mapStateToProps, mapDispatchToProps)(TabContainer);

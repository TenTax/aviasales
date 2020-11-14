import './TabContainer.css';
import TabNav from './TabNav/TabNav';
import TabTicket from './TabTicket/TabTicket';

const TabContainer = ({ tickets }) => {
  return (
    <div className='TabContainer'>
      <TabNav />
      {tickets.map(ticket => <TabTicket ticket={ticket} />)}
    </div>
  );
}

export default TabContainer;
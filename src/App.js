import Axios from 'axios';
import React from 'react';

import GridList from '@material-ui/core/GridList';
import Card from '@material-ui/core/Card';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchId: '',
            tickets: []
        };
    }

    componentDidMount() {
        Axios.get('https://front-test.beta.aviasales.ru/search')
            .then(res => {
                this.setState(res.data);
                getTickets();
            })

        const getTickets = () => {
            const state = this.state;
            Axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${state.searchId}`)
                .then(res => {
                    this.setState(res.data);
                })
        }
    }

    render() {
        const tickets = this.state.tickets.map((ticket, i) => {
        return <Card key={i}>{ticket.price} {ticket.carrier}</Card>;
        });
        return (
            <GridList cellHeight={'auto'} cols={1}>
                {tickets}
            </GridList>
        );
    }
}

export default App;

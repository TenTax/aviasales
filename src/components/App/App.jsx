import Axios from 'axios';
import React from 'react';
import Filter from '../Filter/Filter';

import TabContainer from '../TabContainer/TabContainer';

import './App.css';

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
        return (
            <div className="App">
                <Filter />
                <TabContainer tickets={this.state.tickets} />
            </div>
        );
    }
}

export default App;

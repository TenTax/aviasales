import React from 'react';
import Filter from '../Filter/Filter';

import { setTickets, nextPage } from '../../redux/actions';

import Logo from '../Logo/Logo';
import Tickets from '../Tickets/Tickets';
import Tabs from '../Tabs/Tabs';

import './App.css';
import { connect } from 'react-redux';
import Preloader from '../Preloader/Preloader';

class App extends React.Component {
    componentDidMount() {
        this.props.setTickets();

        window.addEventListener('scroll', () => {
            const docHeight = document.documentElement.offsetHeight,
                clientHeight = document.documentElement.clientHeight,
                scrollBottom = document.documentElement.scrollTop;

            if ((scrollBottom + clientHeight) > (docHeight - clientHeight)) {
                this.props.nextPage(this.props.pageCount)
            }
        });
    }

    render() {
        const { isFetching } = this.props;

        return (
            <div className="app">
                <div className="app__logo">
                    <Logo />
                </div>
                <div className="app__row">
                    <div className="app__filter">
                        <Filter />
                    </div>
                    <div className="app__container">
                        <div className="app__tabs">
                            <Tabs />
                        </div>
                        <div className="app__tickets">
                            {isFetching ? <Preloader /> : <Tickets />}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.ticketsReduce.isFetching,
        pageCount: state.ticketsReduce.pageCount
    }
}

const mapDispatchToProps = {
    setTickets,
    nextPage
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

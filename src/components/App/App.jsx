import React, { Component } from 'react';

import ServiceApi from '../../services/ServiceApi';
import ErrorMessage from '../ErrorMessage';
import Preloader from '../Preloader';
import AppView from './AppView';

export default class App extends Component {
    serviceApi = new ServiceApi();

    state = {
        tickets: [],
        error: false,
        loading: true,
        page: 1,
        sort: 'price',
        filters: []
    }

    componentDidMount() {
        this.serviceApi.getAllTickets()
            .then((tickets) => {
                this.setState({
                    tickets,
                    loading: false
                });
            })
            .catch((err) => {
                console.log(err.message);
                this.setState({
                    error: true,
                    loading: false
                });
            })
    }

    handlerSortPanel(sort) {
        this.setState({
            sort,
            page: 1
        });
    }

    handlerLoadMore() {
        this.setState(({ page }) => {
            return {
                page: page + 1
            }
        });
    }

    handlerFilterPanel(filter) {
        this.setState(({ filters }) => {
            const index = filters.indexOf(filter);

            let newFilters;

            if (filter === undefined) {
                newFilters = filters.length !== 4 ? [0, 1, 2, 3] : [];
            }
            else if (index !== -1) {
                newFilters = [...filters.slice(0, index), ...filters.slice(index + 1)];
            }
            else {
                newFilters = [...filters, filter];
            }

            return {
                filters: newFilters
            }
        });
    }

    filtering(arr, filters) {

        if (filters.length === 4 || !filters.length) {
            return arr;
        }

        return arr.filter(({ segments: [thither, back] }) => {
            if (filters.indexOf(thither.stopsCount) !== -1 && filters.indexOf(back.stopsCount) !== -1) {
                return true;
            }

            return false;
        });
    }

    sorting(arr, sort) {
        return arr.sort((a, b) => {
            if (a[sort] > b[sort]) return 1;
            if (a[sort] === b[sort]) return 0;
            if (a[sort] < b[sort]) return -1;
            return null;
        });
    }

    paginate(arr, page = 1) {
        return arr.slice(0, page * 10);
    }

    render() {
        const { tickets, error, loading, page, sort, filters } = this.state;

        const filterTickets = this.filtering(tickets, filters);
        const sortTickets = this.sorting(filterTickets, sort);
        const viewTickets = this.paginate(sortTickets, page);

        if (loading) {
            return <Preloader />
        }
        else if (error) {
            return <ErrorMessage />
        }
        else {
            return (
                <AppView
                    tickets={viewTickets}
                    sort={sort}
                    filters={filters}
                    handlerLoadMore={this.handlerLoadMore.bind(this)}
                    handlerSortPanel={this.handlerSortPanel.bind(this)}
                    handlerFilterPanel={this.handlerFilterPanel.bind(this)}
                />
            );
        }
    }
}

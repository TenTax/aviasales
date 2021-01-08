import Axios from 'axios';

export default class ServiceApi {

    _baseURL = 'https://front-test.beta.aviasales.ru';

    async getResourse(url) {
        const { data } = await Axios.get(`${this._baseURL}${url}`);
        return data;
    }

    async getAllTickets() {
        const { searchId } = await this.getResourse(`/search`);
        const { tickets } = await this.getResourse(`/tickets?searchId=${searchId}`);
        return this._transformAllTickets(tickets);
    }

    _dateTransform(date, duration) {
        const newDate = new Date(Date.parse(date) + parseInt(duration) * 60 * 1000).toLocaleTimeString();
        return newDate.substring(0, newDate.lastIndexOf(':'));
    }

    _durationTransform(duration) {
        return `${Math.floor(duration / 60)}ч ${Math.ceil(duration % 60)}м`
    }

    _segmentTransform({ origin, destination, date, duration, stops }) {
        return {
            origin,
            destination,
            departure: this._dateTransform(date, 0),
            arrival: this._dateTransform(date, duration),
            duration: this._durationTransform(duration),
            stopsCount: stops.length,
            stopsNames: stops.join(', ')
        }
    }

    _transformAllTickets(tickets) {
        return tickets.map((ticket, index) => {
            const { price, carrier, segments: [thither, back] } = ticket;

            return {
                id: index,
                price: price.toLocaleString(),
                carrier,
                segments: [
                    this._segmentTransform(thither),
                    this._segmentTransform(back),
                ],
                duration: thither.duration + back.duration
            }
        });
    }
}

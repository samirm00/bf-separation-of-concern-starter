import data from '../data.js';
import dom from '../dom.js';
import sortFlights from '../utils/sortFlights.js';
import createFlight from '../components/createFlight.js';

const loadHandler = () => {
    const organizedFlights = sortFlights(data);
    organizedFlights.forEach((flight) => {
        const flightDom = createFlight(flight);
        dom.parent.appendChild(flightDom);
    });
};

export default loadHandler;

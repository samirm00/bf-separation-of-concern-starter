/**
 * Create a flight element.
 *
 * @param {object} flight - Flight object.
 * @returns {HTMLElement} - Flight element.
 */

const createFlight = (flight) => {
    // FLIGHT
    const flightDom = document.createElement('div');
    flightDom.className = 'flight';
    flightDom.innerHTML = flight.flightNumber;

    return flightDom;
};

export default createFlight;

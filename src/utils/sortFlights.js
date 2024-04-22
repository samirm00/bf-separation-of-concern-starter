/**
 * Sorts the flights by departure date.
 *
 * @param {object} data - The data object.
 * @property {Array} data.flights - The flights to be sorted.
 * @returns {Array} - The sorted flights.
 */

const sortFlights = (data) => {
    const organizedFlights = data.flights.sort((a, b) => {
        return (
            new Date(a.departureDate).getTime() -
            new Date(b.departureDate).getTime()
        );
    });

    return organizedFlights;
};

export default sortFlights;

import sortFlights from './sortFlights.js';

describe(' Sort flights by departure date', () => {
    test('sort 2 flight', () => {
        const actual = sortFlights({
            flights: [
                {
                    id: 2,
                    name: 'KK-001',
                    plane: 'ATR001',
                    departureDate: '2023-08-31 13:45:00',
                    origin: 'DAC',
                    arrivalDate: '2023-08-30 15:40:00',
                    destination: 'CGP',
                    stops: 10,
                },
                {
                    id: 1,
                    name: 'VQ-903',
                    plane: 'ATR725',
                    departureDate: '2023-08-05 13:45:00',
                    origin: 'DAC',
                    arrivalDate: '2023-08-05 14:40:00',
                    destination: 'CGP',
                    stops: 0,
                },
            ],
        });
        expect(actual).toEqual([
            {
                id: 1,
                name: 'VQ-903',
                plane: 'ATR725',
                departureDate: '2023-08-05 13:45:00',
                origin: 'DAC',
                arrivalDate: '2023-08-05 14:40:00',
                destination: 'CGP',
                stops: 0,
            },
            {
                id: 2,
                name: 'KK-001',
                plane: 'ATR001',
                departureDate: '2023-08-31 13:45:00',
                origin: 'DAC',
                arrivalDate: '2023-08-30 15:40:00',
                destination: 'CGP',
                stops: 10,
            },
        ]);
    });
});

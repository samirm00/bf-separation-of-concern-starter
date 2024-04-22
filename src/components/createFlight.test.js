/**
 * @jest-environment jsdom
 */

import createFlight from './createFlight.js';

describe('create a flight component ', () => {
    const flightDom = createFlight({
        id: 1,
        number: 'VQ-903',
        name: 'VQ-903',
        plane: 'ATR725',
        departureDate: '2023-08-05 13:45:00',
        origin: 'DAC',
        arrivalDate: '2023-08-05 14:40:00',
        destination: 'CGP',
        stops: 0,
    });

    test('NodeName -> DIV', () => {
        expect(flightDom.nodeName).toEqual('DIV');
    });
});

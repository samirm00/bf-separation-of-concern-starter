/**
 * @jest-environment jsdom
 */

import createUser from './createUser.js';

{
    /* <div>
       <h4>name</h4>
    </div> */
}
describe('create a user component ', () => {
    test('name -> John', () => {
        const user = createUser({ name: 'John' });
        expect(user.nodeName).toEqual('DIV');
        expect(user.childElementCount).toEqual(1);
        expect(user.children[0].nodeName).toEqual('H4');
        expect(user.children[0].innerText).toEqual('John');
    });
});

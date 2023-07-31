import { data, dom } from '../data.js';

dom.usersInput.addEventListener('keypress', (e) => {
    dom.error.innerText = '';
    dom.error.classList.remove('error1');
});

import { data, dom } from '../data.js';

dom.clearAllBtn.addEventListener('click', () => {
    dom.taskList.innerHTML = '';
    data.tasks = [];
});

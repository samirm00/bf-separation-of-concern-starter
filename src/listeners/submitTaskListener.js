import addTaskList from '../handlers/addTaskItem.js';
import { data, dom } from '../data.js';

dom.submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addTaskList(dom.usersInput.value);
});

import loadHandler from '../handlers/loadHandler.js';

const loadEvent = () => {
    window.addEventListener('load', loadHandler);
};

export default loadEvent;

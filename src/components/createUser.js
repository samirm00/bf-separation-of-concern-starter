

const createUser = (userInfo) => {
    const container = document.createElement('div');

    const name = document.createElement('h4');
    name.innerText = userInfo.name;

    container.append(name);

    return container;
};

export default createUser;

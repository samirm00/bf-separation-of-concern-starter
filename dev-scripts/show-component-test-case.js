import { getParameterList } from './get-parameter-list.js';

export const showComponentTestCase = (
  // title,
  description,
  component,
  ...args
) => {
  if (typeof description !== 'string') {
    throw new TypeError('description must be a string');
  }
  if (typeof component !== 'function') {
    throw new TypeError('component must be a function');
  }

  const container = document.createElement('div');
  container.style =
    'background-color:#bdbdbd;border-radius:20px;padding:20px;margin:20px;border: 2px solid;';

  // add the title
  const titleEl = document.createElement('div');
  // titleEl.innerText = title;
  titleEl.innerText = component.name + ':';
  titleEl.style = 'font-size: large; font-weight: bold; padding-bottom: 5px;';
  container.appendChild(titleEl);

  // add the description
  const descriptionEl = document.createElement('p');
  descriptionEl.innerText = description;
  container.appendChild(descriptionEl);

  // add the argument list and values
  const argsTitleEl = document.createElement('div');
  argsTitleEl.innerText = 'Arguments:';
  argsTitleEl.style =
    'padding-top: 10px;font-size: large; padding-bottom: 5px;';
  container.appendChild(argsTitleEl);
  const argNames = getParameterList(component);
  const tableElement = document.createElement('table');
  tableElement.style =
    'background-color: white;border-collapse: collapse;width:100%;';
  for (let i = 0; i < argNames.length; i++) {
    const rowElement = document.createElement('tr');

    const argNameElement = document.createElement('td');
    argNameElement.style = 'border: 1px solid; padding-left: 10px;';
    argNameElement.innerText = argNames[i];
    rowElement.appendChild(argNameElement);

    const argValueElement = document.createElement('td');
    argValueElement.style = 'border: 1px solid;  padding-left: 10px;';
    argValueElement.innerHTML = `<pre>${JSON.stringify(
      args[i],
      null,
      2
    )}</pre>`;
    rowElement.appendChild(argValueElement);

    tableElement.appendChild(rowElement);
  }
  container.appendChild(tableElement);

  const componentTitle = document.createElement('div');
  componentTitle.innerText = 'Visual:';
  componentTitle.style =
    'padding-top: 10px;font-size: large; padding-bottom: 5px;';

  const visualContainerEl = document.createElement('div');
  visualContainerEl.style =
    'background-color: white; width:100%; border: 1px solid; display: flex; justify-content: center;';
  container.appendChild(componentTitle);

  try {
    visualContainerEl.appendChild(component(...args));
  } catch (err) {
    console.error(err);
    const errorMessage = document.createElement('pre');
    errorMessage.innerHTML = `${err.name}: ${err.message}\n\n- see console for callstack`;
    errorMessage.style.color = 'red';
    visualContainerEl.appendChild(errorMessage);
    componentTitle.innerHTML = 'Error:';
  }

  container.appendChild(visualContainerEl);
  document.body.appendChild(container);
};

const reactElement = {
  type: 'a',
  prop: {
    href: 'https://google.com',
    target: '_blank'
  },
  children: 'Click on Link to Visit Google'
}

const mainContainer = document.querySelector('.main');

function customRender(reactElement, container){
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  //this old way and repeated way
  // domElement.setAttribute('href',reactElement.prop.href);
  // domElement.setAttribute('target', reactElement.prop.target);
  for(let prop in reactElement.prop){
    if(prop === 'children') continue;
    domElement.setAttribute(prop, reactElement.prop[prop])
  }
  
  container.appendChild(domElement);
}
customRender(reactElement, mainContainer);
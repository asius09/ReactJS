// function customRender(element, container) {
//     const domElement = document.createElement(element.type);
//     domElement.innerHTML = element.children;
//     domElement.setAttribute("href", element.props.href)
//     domElement.setAttribute("target", element.props.target);
//     container.appendChild(domElement);
// }
function customRender(element, container) {
  const domElement = document.createElement(element.type);
  domElement.innerHTML = element.children;
  for(const prop in element.props) {
    if (prop === 'children') continue;
    domElement.setAttribute(prop, reactElement.props.prop);
  }
  container.appendChild(domElement);
}

const root = document.getElementById("root");
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};
customRender(reactElement, root);

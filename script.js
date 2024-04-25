// Step 1: Create an object for the React-like element
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        children: 'Click me'
    }
};

// Step 2: Create a function to generate HTML code from the reactElement
function generateHTML(element) {
    const { type, props } = element;
    const children = Array.isArray(props.children) ? props.children : [props.children];
    const attributes = Object.keys(props)
        .filter(prop => prop !== 'children')
        .map(prop => `${prop}="${props[prop]}"`)
        .join(' ');

    const childHTML = children.map(child => typeof child === 'object' ? generateHTML(child) : child).join('');

    return `<${type} ${attributes}>${childHTML}</${type}>`;
}

// Step 3: Create a function to render the HTML to a specified path
function customRender(element, path) {
    const html = generateHTML(element);
    document.querySelector(path).innerHTML = html;
}

// Render the anchor tag to a specified path
customRender(reactElement, '#root');
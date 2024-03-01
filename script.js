// First basic custom react by chai and react
//                          custom React version 0.1


// let index_container = document.querySelector('#root');

// let react_element = {
//     type : 'a',
//     props : {
//         href : 'https://www.google.com/',
//         target : '_blanck'
//     },
//     inner_html : 'Click here to visit google'
// }

// function inserting_into_index_file (react_element, index_container){
//     const dom_element = document.createElement(react_element.type);
//     dom_element.innerHTML = react_element.inner_html;
//     dom_element.setAttribute('href', react_element.props.href);
//     dom_element.setAttribute('target', react_element.props.target);
        
//     index_container.appendChild(dom_element);
// }

// inserting_into_index_file (react_element, index_container);


// First custom react by myself

// let index_container = document.querySelector('#root');

// let react_object = {
//     type : 'button',
//     inner_html : 'Submit'
// }

// function inserting_into_index_file(react_object, index_container){
//     let dom_element = document.createElement(react_object.type);
//     dom_element.innerHTML = react_object.inner_html;

//     index_container.appendChild(dom_element);
// }

// inserting_into_index_file (react_object, index_container);

//              Custom React version 0.2

let index_container = document.querySelector('#root');

let react_element = {
    type : 'a',
    props : {
        href : 'https://www.google.com/',
        target : '_blanck'
    },
    inner_html : 'Click here to visit google'
}

function inserting_into_index_file (react_element, index_container){
    const dom_element = document.createElement(react_element.type);
    dom_element.innerHTML = react_element.inner_html;
    // dom_element.setAttribute('href', react_element.props.href);
    // dom_element.setAttribute('target', react_element.props.target);
    for (const prop in react_element.props) {
        if(prop === 'children') {
            continue;
        }
        dom_element.setAttribute(prop, react_element.props[prop]);
    }
        
    index_container.appendChild(dom_element);
}

inserting_into_index_file (react_element, index_container);
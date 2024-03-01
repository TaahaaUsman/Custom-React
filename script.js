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
    dom_element.setAttribute('href', react_element.props.href);
    dom_element.setAttribute('target', react_element.props.target);
        
    index_container.appendChild(dom_element);
}

inserting_into_index_file (react_element, index_container);
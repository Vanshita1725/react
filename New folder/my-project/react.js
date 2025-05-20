function customrender(reactelement, container){
    // const domelement = document.createElement(reactelement.type)
    // domelement.innerHTML = reactelement.Children
    // domelement.setAttribute('href', reactelement.props.href)
    // domelement.setAttribute('target', reactelement.props.target)
   
    // container.appendChild(domelement)
    const domelement = document.createElement(reactelement.type)
    domelement.innerHTMl = reactelement.Children
    for (const prop in prop){
        if (prop== children ){} {
            const Element = Object[prop];
         }
    }
}
const reactelement = {
    type: 'a',
    props:{
        href:'https://google.com',
        target: '_blank',
    },
    Children:'click me to visit google'
}
const maincontainer = document. querySelector('#root')


customrender(reactelement,maincontainer)
function setHtmlDisplay(className, propertie) {
    let elements = document.getElementsByClassName(className);
    for (let index = 0; index < elements.length; index++) {
        const element = elements[index].style.display = propertie;
    }
}

function setHtmlIdDisplay(id, propertie) {
    let element = document.getElementById(id);
    element.style.display = propertie; 
}


function setHtmlValue(id, content) {
    let input = document.getElementById(id);
    input.value = content;
}


function setHtmlInnerHtml(id, content) {
    let input = document.getElementById(id);
    input.innerHTML = content;
}

function getHtmlValue(id) {
    let input = document.getElementById(id);
    return input.value;
}
function getHtmlInnerHtml(id) {
    let input = document.getElementById(id);
    return input.innerHTML;
}

export {
    getHtmlInnerHtml,
    getHtmlValue,
    setHtmlIdDisplay,
    setHtmlValue,
    setHtmlDisplay,
    setHtmlInnerHtml,
}
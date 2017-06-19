
function addLoadEvent(func){
    var oldonload = window.onload;
    if (typeof window.onload !== 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}

function positionMessage() {
    var elem=document.getElementById("message");
    elem.style.position="absolute";
    elem.style.left="50px";
    elem.style.top="100px";
    moveElement("message",200,200,10);
}

addLoadEvent(positionMessage);
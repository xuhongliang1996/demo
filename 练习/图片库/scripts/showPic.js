function showPic(whichpic) {

    if(!document.getElementById("placeholder")) return false;
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",source);

    if(document.getElementById("description")){
        var text = whichpic.getAttribute("title");
        var description = document.getElementById("description");
        description.childNodes[0].nodeValue=text;
    }

    return true;
}
function prepareGallery() {
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imagegallery")) return false;
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for(var i=0;i<links.length;i++){
        links[i].onclick = function () {
            showPic(this);
            return false;
        }
    }
}

addLoadEvent(prepareGallery);

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

function insertAfter(newElement,targetElement) {
    var parent = targetElement.parentNode;
    if(parent.lastChild === targetElement){
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}
function getNextElement(node) {
    if (node.nodeType === 1){
        return node;
    }
    if(node.nextSibling){
        return getNextElement(node.nextSibling);
    }
    return null;
}

function styleHeaderSiblings(tag,theclass) {
    var headers=document.getElementsByTagName(tag);
    for(var i=0;i<headers.length;i++){
        //下一个节点
        //headers[i].nextSibling;
        //下一个元素
        var elem=getNextElement(headers[i].nextSibling);
        // elem.styles.fontWeight="bold";
        // elem.styles.fontSize="1.2em";
        addClass(elem,theclass);
    }
}

addLoadEvent(function () {
    styleHeaderSiblings("h1","intro");
});
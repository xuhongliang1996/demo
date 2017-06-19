function prepareSlideshow() {

    //考虑不支持js的用户
    var slideshow=document.createElement("div");
    slideshow.setAttribute("id","slideshow");

    var preview=document.createElement("img");
    preview.setAttribute("src","images/topics.jpg");
    preview.setAttribute("alt","building blocks of web design");
    preview.setAttribute("id","preview");

    slideshow.appendChild(preview);

    //取得列表中的所有链接
    var list=document.getElementById("linklist");
    insertAfter(slideshow,list);
    var links=list.getElementsByTagName("a");
    links[0].onmouseover=function () {
        moveElement("preview",-120,0,10);
    };
    links[1].onmouseover=function () {
        moveElement("preview",-240,0,10);
    };
    links[2].onmouseover=function () {
        moveElement("preview",-360,0,10);
    };

}

window.onload=prepareSlideshow;
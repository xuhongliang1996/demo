function getHTTPObject(){
    var xmlHttp = false;
    try {
        xmlHttp = new ActiveXObject("Msxml2.XMLHTTP"); // ie msxml3.0+（IE7.0及以上）
    } catch (e) {
        try {
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP"); //ie msxml2.6（IE5/6）
        } catch (e2) {
            xmlHttp = false;
        }
    }
    if (!xmlHttp && typeof XMLHttpRequest !== 'undefined') {// Firefox, Opera 8.0+, Safari
        xmlHttp = new XMLHttpRequest();
    }
    return xmlHttp;
}
function displayAbberviations() {
    //取得缩略语
    var abberviations=document.getElementsByTagName("abbr");
    if(abberviations.length<1) return false;
    var defs=[];
    //遍历所有缩略语
    for(var i=0;i<abberviations.length;i++){
        var current_abbr=abberviations[i];
        var definition=current_abbr.getAttribute("title");
        var key=current_abbr.lastChild.nodeValue;
        defs[key]=definition;
    }
    //创建定义列表
    var dlist=document.createElement("dl");
    for(key in defs){
        var definition=defs[key];
        //创建定义标题
        var dtitle=document.createElement("dt");
        var dtitle_text=document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        //创建定义描述
        var ddesc=document.createElement("dd");
        var ddesc_text=document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
        //把它们添加到定义列表
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    var header=document.createElement("h2");
    var header_text=document.createTextNode("Abbrevations");
    header.appendChild(header_text);
    document.body.appendChild(header);
    document.body.appendChild(dlist);
}

function displayCitations() {
    //取得所有引用
    var quotes=document.getElementsByTagName("blockquote");
    //遍历引用
    for(var i=0;i<quotes.length;i++){
        //如果没有cite继续循环
        if(!quotes[i].getAttribute("cite")) continue;
        //保存cite属性
        var url=quotes[i].getAttribute("cite");
        //取得引用中的所有元素节点
        var quoteChilden=quotes[i].getElementsByTagName('*');
        //如果没有元素节点继续循环
        if(quoteChilden.length<1) continue;
        //取得引用中的最后一个元素（防止使用lastChild定位到文本节点）
        var elem=quoteChilden[quoteChilden.length-1];
        //创建标记
        var link=document.createElement('a');
        var link_text=document.createTextNode("source");
        link.appendChild(link_text);
        link.setAttribute("href",url);
        var superscript=document.createElement("sup");
        superscript.appendChild(link);
        //把标记添加到引用中的最后一个元素节点
        elem.appendChild(superscript);

    }
}

addLoadEvent(displayAbberviations);
addLoadEvent(displayCitations);
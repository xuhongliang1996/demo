// 参数：
//     （1）打算移动的元素的ID。
//     （2）该元素的目的地的“左”位置。
//     （3）该元素的目的地的“上”位置。
//     （4）两次移动之间的停顿时间。
function moveElement(elementID, final_x, final_y, interval) {
    var elem=document.getElementById(elementID);
    //当movement存在清楚定时器
    if(elem.movement){
        clearTimeout(elem.movement)
    }
    //安全检查
    if(!elem.style.left){
        elem.style.left="0px";
    }
    if(!elem.style.top){
        elem.style.top="0px";
    }
    var xpos=parseInt(elem.style.left);
    var ypos=parseInt(elem.style.top);
    var dist=0;
    if(xpos===final_x&&ypos===final_y){
        return true;
    }
    if(xpos<final_x){
        dist=Math.ceil((final_x-xpos)/10);
        xpos=xpos+dist;
    }
    if(xpos>final_x){
        dist=Math.ceil((-final_x+xpos)/10);
        xpos=xpos-dist;
    }
    if(ypos<final_y){
        dist=Math.ceil((final_y-ypos)/10);
        ypos=ypos+dist;
    }
    if(ypos>final_y){
        dist=Math.ceil((-final_y+ypos)/10);
        ypos=ypos-dist;
    }
    elem.style.left=xpos+"px";
    elem.style.top=ypos+"px";
    var repeat="moveElement('"+elementID+"','"+final_x+"','"+final_y+"','"+interval+"')"
    elem.movement=setTimeout(repeat,interval);
}

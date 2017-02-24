  function rightClick(element, type, handler) {
    if(element.addEventListener){
      element.addEventListener(type, handler, false);
    }else{
      element.attachEvent('on' + type, handler);
    }
  }
  function preventDefault(e) {
    e = event || window.event;
    if(e.preventDefault){
      e.preventDefault();
    }else{
      e.returnValue = false;
    }
  }
  window.onload = function(e) {
    var div = document.getElementById('content');
    var menu = document.getElementById('menu');
    rightClick(div, 'contextmenu', function(e) {
      e = event || window.event;
      e.preventDefault();
        var x = e.clientX;
        var y = e.clientY;
        var winW = document.body.clientWidth || document.documentElement.clientWidth;
        var winH = document.body.clientHeight || document.documentElement.clientHeight;
        e.defaultPrevented;
        menu.style.display = 'block';
        if (x > (winW - 200) && y > (winH - 90)) {
            menu.style.left = (x-200) + 'px';
            menu.style.top = (y-90) + 'px';
        } else if (x > (winW - 200)) {
            menu.style.left = (x-200) + 'px';
            menu.style.top = y + 'px';
        } else if (y > (winH - 90)) {
            menu.style.left = x + 'px';
            menu.style.top = (y-90) + 'px';
        } else {
            menu.style.left = x + 'px';
            menu.style.top = y + 'px';
        }
    });
    rightClick(menu, 'contextmenu', function(e) {
      e = event || window.event;
      e.preventDefault();
    });
    rightClick(document, 'mousedown', function(e){
      e = event || window.event;
      e.preventDefault();
        menu.style.display = 'none';
    });
  }
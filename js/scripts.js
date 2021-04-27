function itemFocus(event) {
    if( event.target ) event.target.parentNode.classList.add("focus");
  }

  function itemBlur(event) {
    if( event.target ) event.target.parentNode.classList.remove("focus");
  }

  window.addEventListener('load', function load(event) {
    var itemList = document.querySelectorAll('fieldset input');

    for(var i = 0; i < itemList.length; i++) {
      var item = itemList[i];
      item.addEventListener('focus', itemFocus, true);
      item.addEventListener('blur', itemBlur, true);
    }
  }, false);
(function () {

  var QueryWrapper = function (elems) {
    elems.each = function( func ) {
      $.each(this, func);
    };

    elems.get = function(i) {
      if (i === -1) {
        return this[this.lenght - 1];
      } else {
        return this[i];
      }
    };

    elems.hide = function () {
      this.each(function(elem) {
        elem.style.display = "none";
      });
    };

    elems.show = function () {
      this.each(function(elem) {
        elem.style.display = "block";
      });
    };

    elems.addClass = function (classes) {
      this.each(function(elem) {
        elem.className = classes;
      });
    };

    elems.replaceClass = function (oldClass, newClass) {
      this.each(function(elem) {
        if (elem.className === oldClass) {
          elem.className = newClass;
        }
      });
    };

    elems.removeClass = function (oldClass) {
      this.each(function(elem) {
        elem.className = elem.className.replace(oldClass, '');
      });
    };

    elems.css = function(css_oject) {
      this.each(function(elem) {
        for (var key in css_oject) {
          elem.style[key] = css_oject[key];
        }
      });
    };

    elems.on = function(event, func) {
      this.each(function(elem) {
        elem.addEventListener(event, func);
      });
    };

    elems.append = function(newElement, content) {
      elem = document.createElement(newElement);
      text = document.createTextNode(content);
      elem.appendChild(text);
      this[0].parentNode.insertBefore(elem);
      return this;
    };

    return elems;
  };

  var myQuery = function (selector) {
    var elems = [];

    if (selector.toString() === "[object HTMLCollection]") {
      return QueryWrapper(selector);
    }

    if (selector.charAt(0) === '#') {
      selector = selector.slice(1);
      var id = document.getElementById(selector);
      elems.push(id);
    } else if (selector.charAt(0) === '.') {
      selector = selector.slice(1);
      elems = document.getElementsByClassName(selector);
    } else {
      elems = document.getElementsByTagName(selector);
    }

    return QueryWrapper(elems);
  };

  window.$ = myQuery;

  $.version = 'beta';
  $.each = function(array, func) {
    for(var i = 0; i < array.length; i++) {
      func(array[i], i);
    }
    return array;
  };

})();

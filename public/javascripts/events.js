(function() {
  //removes overlay and closes menus
  $('#overlay').on('click', function() {
    var menus = $('ul');
    var classList = [];
    var toggle = $('#menu-toggle').get(0);
    for (var i = 0; i < menus.length; i++) {
      classList.push(menus[i].className);
    };

    $('#overlay').removeClass('overlay');

    if (toggle.checked) {
      toggle.checked = false;
    }

    //checks to see if menu is down closes everthing if it is
    if (classList.indexOf("clicked") > -1) {
      $('ul').removeClass('clicked');
      $('a').replaceClass('chevron-down','chevron');
      $('li').removeClass('active');
    } else {
      return;
    }
  });

  //adds overlay and opens menus and toggles chevrons
  $('a').on('click', function() {
    var target = this;
    //clears everything
    $('ul').removeClass('clicked');
    $('li').removeClass('active');

    //clears and applies chevron toggle
    if (this.className === 'chevron') {
      $('a').replaceClass('chevron-down','chevron');
      this.className = 'chevron-down';
    } else if (this.className === 'chevron-down') {
      this.className = 'chevron';
      return;
    }

    //opens menu and adds overlay
    if (target.parentNode.parentNode.parentNode.className === 'menu') {
        setTimeout(function() {
          target.parentNode.children[1].className = 'clicked';
          $('#overlay').addClass('overlay');
          target.parentNode.className = 'active';
        }, 25);
    }
  });

  //adds and removes overlay when the toggle is clicked
  $('#menu-toggle').on('click', function() {
    var target = this;

    if (this.checked) {
      $('#overlay').addClass('overlay');
    } else {
      $('#overlay').removeClass('overlay');
    }
  });
})();

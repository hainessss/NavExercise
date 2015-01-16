(function () {
  //Send GET request to retrieve navigation items
  function httpGet(theUrl)
  {
    var xmlHttp = null;

    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return JSON.parse(xmlHttp.responseText);
  };

  //recursively populate DOM
  function populateNav(itemsArray, parentElement) {
    if(itemsArray === undefined || itemsArray === []) {
      return;
    }

    var navList = document.createElement('ul');
    parentElement.insertBefore(navList);

    for (var i = 0; i <= itemsArray.length - 1; i++) {
      var currentItem = itemsArray[i];

      var lineItem = document.createElement('li');
      var link = document.createElement('a');
      var text = document.createTextNode(currentItem["label"]);
      link.href = currentItem["url"].substring(1);

      if (currentItem["items"] !== undefined && currentItem["items"].length > 0) {
        link.className += 'chevron';
        link.href = currentItem["url"];
      }

      link.appendChild(text);
      lineItem.appendChild(link);
      navList.insertBefore(lineItem);

      populateNav(currentItem["items"], lineItem);
    };
  }

  var navigationItems = httpGet('/api/nav.json');
  var navigation = $('nav').get(0);

  populateNav(navigationItems['items'], navigation);
})();


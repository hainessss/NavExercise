describe("myQuery", function () {

  beforeEach(function () {
    // `setFixtures` comes from the jasmine-jquery plugin.
    // Although *you* are not using jQuery, we use this plugin to
    // help us create HTML elements for testing.
    //
    // Key point: The HTML elements we create here are available
    // for our tests to select. They also get destroyed after each test.
    setFixtures(
      '<div id="profile" class="noice">' +
        '<div class="button first"></div>' +
        '<img class="avatar" />' +
        '<a class="button second"></a>' +
        '<a class="straggler"><label>Click meh</label></a>' +
      '</div>'
    );
  });

  describe("General each function", function () {
    it("iterates through an array", function () {
      var testResult = [];
      var someArray = [10, 20, 30];
      $.each(someArray, function (number) {
        testResult.push(number * number);
      });

      expect(testResult.length).toEqual(3);
      expect(testResult[0]).toEqual(100);
      expect(testResult[1]).toEqual(400);
      expect(testResult[2]).toEqual(900);
    });
  });

  describe("Selectors", function () {

    it("selects an element by id", function() {
      var elem = $('#profile').get(0);
      expect(elem.className).toEqual('noice');
    });

    it("selects elements by class name", function() {
      var buttons = $('.button');
      expect(buttons.get(0).className).toMatch(/first/);
      expect(buttons.get(1).className).toMatch(/second/);
    });

    it("selects elements by tag name", function() {
      var anchors = $('a');
      expect(anchors.length).toEqual(2)
      expect(anchors.get(0).className).toEqual("button second");
      expect(anchors.get(1).className).toEqual("straggler");

      var images = $('img');
      expect(images.length).toEqual(1)
      expect(images.get(0).className).toEqual("avatar");
    });
  });

  describe("Selected elements each function", function () {
    it("iterates through all selected elements", function() {
      var testResult = [];
      $('.button').each(function (elem, i) {
        testResult.push(elem.className + ' ' + i);
      });

      expect(testResult.length).toEqual(2);
      expect(testResult[0]).toEqual("button first 0");
      expect(testResult[1]).toEqual("button second 1");
    });
  });

  describe("Show and Hide", function () {
    // TODO: Write tests for .show() and .hide()
    it("toggles the display of an element in the DOM hidden", function() {
      test = $('#profile').get(0);
      $('#profile').hide();

      expect(test.style.display).toEqual("none");
    });

    it("toggles the display of an element in the DOM to visible", function() {
      test = $('#profile').get(0);
      $('#profile').hide();
      $('#profile').show();

      expect(test.style.display).toEqual("block");
    });
  });

  describe("addClass", function () {
    it("can add a class to an element", function() {
      test = $('.button second').get(0);
      $('.button second').addClass('straggler');

      expect(test.className).toEqual("straggler");
    });
  });

  describe("removeClass", function () {
    it("can remove a class from an element", function() {
      test = $('.second button').get(0);
      $('.second button').addClass('straggler');
      $('.straggler').removeClass('straggler');

      expect(test.className).toEqual('');
    });
  });

  describe("replaceClass", function () {
    it("can give a list of elements new classes if they have the target class", function() {
      elements = $('a');
      $('a').replaceClass('straggler', 'newClass');

      expect(elements[0].className).toEqual('button second');
      expect(elements[1].className).toEqual('newClass');
    });
  });

  describe("Modifying CSS", function () {

    it("can set a single property", function() {
      // Ensure they're not already hidden
      expect( $('.button').get(0).style.display ).toEqual('');
      expect( $('.button').get(1).style.display ).toEqual('');

      // Now make sure displays have updated
      $('.button').css({display: 'none'});
      expect( $('.button').get(0).style.display ).toEqual('none');
      expect( $('.button').get(1).style.display ).toEqual('none');
    });

    it("can set multiple properties in one call", function() {
      expect( $('.button').get(0).style.display ).toEqual('');
      expect( $('.button').get(1).style.display ).toEqual('');

      // Now make sure displays have updated
      $('.button').css({display: 'none', width: '100px'});
      expect( $('.button').get(0).style.display ).toEqual('none');
      expect( $('.button').get(1).style.display ).toEqual('none');
      expect( $('.button').get(0).style.width ).toEqual('100px');
      expect( $('.button').get(1).style.width ).toEqual('100px');
    });
  });

  describe("append", function () {
    it("adds an element to a list of elements", function() {
      var originalNumElements = $('a').length;

      $('a').append('a', 'newLink');

      var newNumElements = $('a').length;

      expect(newNumElements).toEqual(originalNumElements + 1);
    });
  });
});

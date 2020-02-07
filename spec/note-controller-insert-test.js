(function testInsert(){

  var mockDiv = {
    innerHTML: ""
  }

  var mockDocument = {
    getElementById: function(){
      return mockDiv;
    }
  }

  var noteController = new NoteController(mockDocument);
  noteController.add('second');
  noteController.insert("app");
  console.log(mockDiv)

  assert.isTrue(mockDiv.innerHTML.includes('second'))

})();

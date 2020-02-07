


(function testAdd() {
  var noteController = new NoteController();
  var note = new Note
  var noteList = new NoteList
  noteController.add('Hello')
  assert.isTrue(noteController.noteList.notes.length === 1)
  assert.isTrue(noteController.noteList.notes[0].showNote() === 'Hello')
  console.log("testAdd passing")

})();

(function testHtmlify() {
  var noteController = new NoteController();
  noteController.add('Hello')
  assert.isTrue(noteController.htmlify() === '<ul><li><div>Hello</div></li></ul>')
  console.log("testHtmlify passing")
})();







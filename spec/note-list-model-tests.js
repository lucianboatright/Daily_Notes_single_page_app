(function testNoteList() {
  var noteList = new NoteList()
  assert.isTrue(noteList.notes.length === 0);
  console.log('testNoteList passing')
})();

(function testAddNoteList() {
  var notelist = new NoteList()
  notelist.add('hello')
  notelist.add('test')
  assert.isTrue(notelist.notes.length === 2)
  assert.isTrue(notelist.notes[0].showNote() === 'hello')
  console.log(notelist.notes[0])
  assert.isTrue(notelist.notes[0].showid() === 0)
  console.log('addNoteList test passing')
})();

// (function listNotes() {
//   var notelist = new NoteList()
  
//   notelist.add('hello')
//   notelist.add('test')
//   console.log(notelist.showNotes())
//   assert.isTrue(notelist.showNotes() == 'hello', 'test')
//   console.log("listNotes test")
// })();
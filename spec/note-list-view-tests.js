(function testViewNote() {
  var noteListView = new NoteListView()
  var noteList = noteListView.noteList
  noteList.add('one')
  noteList.add('two')
  assert.isTrue(noteListView.display() === "<ul><li><div>one</div></li><li><div>two</div></li></ul>")
  console.log("testViewNote passing")
})();

(function testLongerThan20char(){
  var noteListView = new NoteListView()
  var noteList = noteListView.noteList
  noteList.add('12345678901234567890hello')
  assert.isTrue(noteListView.display() === "<ul><li><div>12345678901234567890</div></li></ul>")
  console.log("TestLongerthan20 passed")
})();
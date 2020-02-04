(function testViewNote() {
  var noteListView = new NoteListView()
  var noteList = noteListView.noteList
  noteList.add('one')
  noteList.add('two')
  assert.isTrue(noteListView.display() === "<ul><li><div>one</div></li><li><div>two</div></li></ul>")
  console.log("testViewNote passing")
})();
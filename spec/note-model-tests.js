(function testFirstNote() {
  var note = new Note('We are the fricking business');
  assert.isTrue(note.showNote() === 'We are the fricking business');
  console.log("testFirstNote passing")
})();

(function testfirstNoteID(){
  var note = new Note('We are the fricking business', 0);
  console.log(note)
  assert.isTrue(note.showid() === 0);
  console.log("testFirstNote passing")
})()




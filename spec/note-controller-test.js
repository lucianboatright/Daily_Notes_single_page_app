(function testNoteControllerInstance(){

  var noteControler = new NoteContoller

  assert.isTrue(noteControler.noteList instanceof NoteContoller)
  assert.isTrue(noteControler.noteListView.noteList instanceof NoteContoller)
})();

(function testNoteControllerAdd(){
  var noteControler = new NoteContoller();
  noteControler.insert('string')
  assert.isTrue(noteControler.noteList.list.length === 1)
  assert.isTrue(noteControler.noteList.list[0] == 'string')
  // assert.isTrue(noteControler.noteList.list instanceof Note)



})




  // function NoteDouble(){}

  // NoteDouble.prototype = {
  //   add: function(){}
  // };

  // var note = new NoteContoller()

  // note.add = function(){
  //   return this.noteList.add()
  // }

  // var noteDouble = new NoteDouble('hello');
  // var noteList = new NoteList(note);

  // noteList.add(noteDouble)

  // assert.isTrue(noteList.add(noteDouble) === 'hello')
  // // console.log(noteList.add(noteDouble))


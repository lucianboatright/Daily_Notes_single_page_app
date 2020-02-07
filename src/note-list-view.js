(function(exports) {
  function NoteListView(noteList) {
    this.noteList = new NoteList()
  }

  NoteListView.prototype.display = function() {
    var array = ["<ul>"]
    for(var i = 0; i < this.noteList.notes.length; i++) {
      if(this.noteList.notes[i].showNote().length > 20 ) { array.push("<li><div>" + this.noteList.notes[i].showNote().slice(0,20) + "</div></li>")} 
      else { array.push("<li><div>" + this.noteList.notes[i].showNote() + "</div></li>") }
    }
    array.push("</ul>")
    return array.join("")
  }

  exports.NoteListView = NoteListView
})(this)
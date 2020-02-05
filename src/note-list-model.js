(function(exports) {
  function NoteList() {
    this.notes = []
  }

  NoteList.prototype.add = function(string) {
    var note = new Note(string)
    this.notes.push(note)
  }

  NoteList.prototype.showNotes = function() {
    return this.notes;
  }

  exports.NoteList = NoteList
})(this);
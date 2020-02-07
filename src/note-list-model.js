(function(exports) {
  function NoteList() {
    this.notes = []
    this.number = 0
  }

  NoteList.prototype.add = function(string) {
    var note = new Note(string, this.number)
    this.number++
    this.notes.push(note)
  }

  NoteList.prototype.showNotes = function() {
    return this.notes;
  }

  exports.NoteList = NoteList
})(this);
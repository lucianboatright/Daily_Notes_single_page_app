(function(exports) {
  function Note(note, number = "noID") {
    this.text = note
    this.id = number
  }

  Note.prototype.showNote = function() {
    return this.text;
  }

  Note.prototype.showid = function(){
    return this.id
  }


  exports.Note = Note 
})(this)





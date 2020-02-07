function NoteController(doc = document){

  this.noteListView = new NoteListView()
  this.noteList = this.noteListView.noteList
  this.doc = doc

  NoteController.prototype.add = function(string){
    this.note = new Note()
    this.noteList.add(string)
  }


  NoteController.prototype.htmlify = function(){
    return (this.noteListView.display())
  }

  NoteController.prototype.insert = function(){
    var message = this.htmlify()
    var element = this.doc.getElementById("app")

    element.innerHTML = message
  }


  NoteController.prototype.greeting = function(message){
    var element = this.doc.getElementById("app")

    element.innerHTML = message
  }

}
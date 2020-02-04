function NoteController(){

  this.noteListView = new NoteListView()
  this.noteList = this.noteListView.noteList
  // this.noteList = this.noteListView.noteList

  NoteController.prototype.add = function(string){
    this.noteList.add(string)
  }

  NoteController.prototype.show = function(){
    return this.noteListView
  }


  NoteController.prototype.greeting = function(message){
    var element = document.getElementById("app")

    element.innerHTML = message
  }

}
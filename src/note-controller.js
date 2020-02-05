function NoteController(){

  this.noteListView = new NoteListView()
  this.noteList = this.noteListView.noteList

  NoteController.prototype.add = function(string){
    this.noirbd(string)
  }


  NoteController.prototype.htmlify = function(){
    return (this.noteListView.display())
  }

  NoteController.prototype.insert = function(){
    var message = this.htmlify()
    var element = document.getElementById("app") 

    element.innerHTML = message
  }


  NoteController.prototype.greeting = function(message){
    var element = document.getElementById("app")
    console.log(element)
    console.log(message)
    console.log(document.getElementById("app"))
    element.innerHTML = message
  }

}
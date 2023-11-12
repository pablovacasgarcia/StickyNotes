window.onload=()=>{
    //Start the app

    //Create the NoteList
    noteList = new NoteList;

    //Create necessary variables
    counter=1;
    mover=false

    //Add Events
    addBtn.addEventListener("click", newNote)
    document.addEventListener("mousemove", (event) => {
        if (mover){
          noteDiv.style.left=event.clientX-posX+"px";
          noteDiv.style.top=event.clientY-posY+"px";
        }
    })
}

function newNote(){
    title="Nueva nota "+counter;
    content="Escribe el contenido de la nota aquí...";
    note = new Note(title, content);
    
    noteList.addNote(note);

    counter++;

    createNote();

    //Create events
    newDiv.addEventListener("mousedown", (event)=>{
        noteDiv = event.target;
        mover=true
        posX = event.clientX - event.target.offsetLeft;
        posY = event.clientY - event.target.offsetTop;
    })
    newDiv.addEventListener("mouseup", ()=>{mover=false})
    title.addEventListener("click", (event)=>
    {
        editTitle(event);
        inputTitle.addEventListener("keydown", saveTitle);
    });
    content.addEventListener("click", (event)=>
    {
        editContent(event);
        inputContent.addEventListener("keydown", saveContent);
    });


    

}

function move(){
    mover=!mover;
}

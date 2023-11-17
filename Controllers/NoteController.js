var dateModel = {
    "notes":[]
};

window.onload = () => {
    // Start the app

    // Create the NoteList
    noteList = new NoteList();

    // Create necessary variables
    counter = 1;
    mover = false;

    // Add Events
    addBtn.addEventListener("click", ()=>{newNote()});

    // Load notes from local storage on page load
    if (localStorage.getItem("notes")){
        loadNotesFromLocalStorage();
    }

    document.addEventListener("mousemove", (event) => {
        if (mover) {
            noteDiv.style.left = event.clientX - posX + "px";
            noteDiv.style.top = event.clientY - posY + "px";
        }
    });
}

function newNote(title="Nueva nota", content="Escribe el contenido de la nota aquí...", top="100px", left="100px", first=false) {
    note = new Note(title, content, top, left);

    note.idNote = counter;

    noteList.addNote(note);

    newDiv=createNote();

    top = note.top;
    left = note.left;

    noteObject = {
        "id": counter,
        "title": title,
        "content": content,
        "top": top,
        "left": left
    };

    dateModel.notes.push(noteObject) 

    // Create events
    newDiv.addEventListener("mousedown", (event) => {
        noteDiv = event.target;
        mover = true;
        posX = event.clientX - event.target.offsetLeft;
        posY = event.clientY - event.target.offsetTop;
    });

    newDiv.addEventListener("mouseup", () => {
        mover = false;
    });

    newDiv.querySelector("h2").addEventListener("click", (event) => {
        editTitle(event);
        inputTitle.addEventListener("keydown", saveTitle);
    });

    newDiv.querySelector("p").addEventListener("click", (event) => {
        editContent(event);
        inputContent.addEventListener("keydown", saveContent);
    });

    img.addEventListener("click", deleteNote);

    counter++;

    if(!first){
        saveNotesToLocalStorage();
    }
}

function saveNotesToLocalStorage() {
    // Save the updated notes back to local storage
    localStorage.setItem("notes", JSON.stringify(dateModel));
}

function loadNotesFromLocalStorage() {
    // Retrieve notes from local storage
    localData = JSON.parse(localStorage.getItem("notes"));
    storedNotes = localData.notes

    console.log(storedNotes)
    console.log(storedNotes.length)

    // Iterate through stored notes and create them
    for (let i=0; i<storedNotes.length; i++) {
        title=storedNotes[i]['title']
        content=storedNotes[i]['content']
        top=storedNotes[i]['top']
        left=storedNotes[i]['left']
        newNote(title, content, top, left, true)
    };
}

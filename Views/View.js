function createNote()
{
    newDiv=document.createElement("div");
    newDiv.className="note"

    title=document.createElement("h2")
    title.innerHTML=note.title;
    newDiv.appendChild(title);
    content=document.createElement("p");
    content.innerHTML=note.content;
    newDiv.appendChild(content);
    notes.appendChild(newDiv);
}

function editTitle(event)
{
    inputTitle=document.createElement("input")
    inputTitle.value=event.target.textContent;
    event.target.innerHTML="";
    event.target.appendChild(inputTitle);
}

function editContent(event)
{
    inputContent=document.createElement("input")
    inputContent.value=event.target.textContent;
    event.target.innerHTML="";
    event.target.appendChild(inputContent);
}

function saveTitle(event){
    if (event.key=="Enter"){
        title.innerHTML=event.target.value;
    }
}

function saveContent(event){
    if (event.key=="Enter"){
        content.innerHTML=event.target.value;
    }
}
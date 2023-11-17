class Note{
    constructor (title, content, top=0, left=0){
        this.title=title;
        this.content=content;
        this.top=top;
        this.left=left;
    }

    setTitle(title){
        this.title=title;
    }

    setContent (content){
        this.content=content;
    }
}
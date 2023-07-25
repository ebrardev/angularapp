export  class Model {
    user;
    items;

    constructor(){
        this.user = "John Doe";
        this.items = [
            new TodoItem("do dishes", true),
            new TodoItem("walk the dog", false),
            new TodoItem("clean the house", false),
            new TodoItem("do laundry", false),
            new TodoItem("take out trash", true),
            new TodoItem("make dinner", false),
          
        ];
    }
}

export class TodoItem {
   
    description;
    action;

    constructor(description:any , action:boolean){  
        this.description = description;
        this.action = action;
    }
}
class Controls{
    constructor(type){
        this.forward=false;
        this.left=false;
        this.right=false;
        this.reverse=false;

        switch(type){
            case "KEYS":
                this.#addKeyboardListeners();
                break;
            case "DUMMY":
                this.forward=true;
                break;
        }
    }

    #addKeyboardListeners() { //# for private method..
        document.onkeydown=(event)=>{
            switch(event.key){
                case "a":
                case "ArrowLeft":
                    this.left=true;
                    break;
                case "d":
                case "ArrowRight":
                    this.right=true;
                    break;
                case "w":
                case "ArrowUp":
                    this.forward=true;
                    break;
                case "s":
                case "ArrowDown":
                    this.reverse=true;
                    break;
                default:                 
                    // console.log(event.key)
            }
            // console.table(this); //prints to console as a table.
        }

        document.onkeyup=(event)=>{
            switch(event.key){
                case "a":
                case "ArrowLeft":
                    this.left=false;
                    break;
                case "d":
                case "ArrowRight":
                    this.right=false;
                    break;
                case "w":
                case "ArrowUp":
                    this.forward=false;
                    break;
                case "s":
                case "ArrowDown":
                    this.reverse=false;
                    break;
                default:                 
                    // console.log(event.key)             
            }
            // console.table(this); //prints to console as a table.
        }

    }
}
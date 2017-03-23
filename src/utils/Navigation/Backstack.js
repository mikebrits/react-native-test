class BackstackUtil {
    constructor(){
        this.stack = [];
    }

    top(){
        return this.stack.length ? this.stack[this.stack.length - 1] : null;
    }

    add(route){
        this.stack.push(route);
        console.log("Backstack", this.stack);
    }

    pop(){
        return this.stack.pop();
    }

    clear(){
        this.stack = [];
    }
}

export const Backstack = new BackstackUtil();
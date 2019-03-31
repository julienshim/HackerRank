function Solution(){
  //Write your code here
    this.stack = [];
    this.queue = [];

    this.pushCharacter = function(char){
        this.stack.push(char);
    }

    this.enqueueCharacter = function(char){
        this.queue.push(char);
    }

    this.popCharacter = function(){
        return this.stack.pop();
    }

    this.dequeueCharacter = function () {
        return this.queue.shift();
    }
}

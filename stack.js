/* Stacks! */
// functions: push, pop, peek, length
// Real life uses: reverse a word, undo in editors, Back/Forward in browsers

// Below is a js implementation of stack data structure
var Stack = function () {
    this.collection = [];
    this.count = 0;
}

Stack.prototype.push = function () {
    var tempArr = [];
    for (var i = 0; i < arguments.length; i++) {
        tempArr.push(arguments[i])
    }
    this.collection.push(...tempArr);
    this.count++;
    return tempArr;
}

Stack.prototype.pop = function () {
    var topItem = this.collection[this.count - 1];
    delete this.collection[this.count - 1];
    this.collection.length = this.count - 1;
    this.count--;
    return topItem;
}

Stack.prototype.peek = function () {
    return this.collection;
}

Stack.prototype.size = function () {
    return this.collection.length;
}

var stck1 = new Stack();

console.log(stck1.push("Husny", "Ahamed"));
console.log(stck1.size());
console.log(stck1.peek());
console.log(stck1.pop());
console.log(stck1.size());
console.log(stck1.peek());
// display('stck1.size()');

// A simple usecase of stack dataSctructure is finding a word is a palindrome (reads the same backwards)
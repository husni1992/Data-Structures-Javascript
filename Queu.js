/* Queues and priority queues */
// This is a list which is first in first out
// Real life uses: Printer queue

function Queue() {
    var collection = [];

    this.print = function () {
        console.log(collection);
    }

    this.enqueue = function (element) {
        collection.push(element);
    }

    this.dequeue = function () {
        return collection.shift();
    }

    this.front = function () {
        return collection[0];
    }

    this.size = function () {
        return collection.length;
    }

    this.isEmpty = function () {
        return collection.length === 0;
    }
}

var q1 = new Queue();
console.log(q1)
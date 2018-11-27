function Setz() {
    var collection = [];

    // check if the element exists in a set
    this.has = function (element) {
        return collection.indexOf(element) != -1;
    }

    this.values = function () {
        return collection;
    }

    this.add = function (element) {
        if (!this.has(element)) {
            collection.push(element);
        }
        return element;
    }

    this.remove = function (element) {
        if (this.has(element)) {
            var index = collection.indexOf(element);
            collection.splice(index, 1);
            return true;
        }
        return false;
    }

    // will return the size of the current set
    this.size = function () {
        return collection.length;
    }

    // will return the union of two sets a: {1,2,3}, b: {3,4}, Union: {1,2,3,4}
    this.union = function (otherSet) {
        var unionSet = new Setz();

        this.values().forEach(item => {
            unionSet.add(item);
        })
        otherSet.values().forEach(item => {
            unionSet.add(item);
        })
        return unionSet;
    }

    // will return as set with common values of the this set and other set
    this.intersection = function (otherSet) {
        var interSectedSet = new Setz();
        this.values().forEach(item => {
            if (otherSet.has(item)) {
                interSectedSet.add(item);
            }
        })
        return interSectedSet;
    }

    // return a set with values that does not included in otherSet
    this.difference = function (otherSet) {
        var differentSet = new Setz();
        this.values().forEach(function (i) {
            if (!otherSet.has(i)) {
                differentSet.add(i)
            }
        })
        return differentSet;
    }

    // check if this set's all values are existed inside otherSet
    this.subset = function (otherSet) {
        return this.values().every(item => {
            return otherSet.has(item);
        })
    }
}

var s1 = new Setz();
s1.add(1);
s1.add(2);
s1.add(3);
s1.add(4);
console.log(s1.values());

var s2 = new Setz();
s2.add(4);
s2.add(5);
s2.add(6);
s2.add(7);
console.log(s2.values());

s1.difference(s2).values();
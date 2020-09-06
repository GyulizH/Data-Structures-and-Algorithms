// the built-in set obj of Js does not contain all the methods that are common to set
function mySet() {
    //collection will hold the set
   let collection = []
    //this method will check for the presense of an element and return true or false
    this.has = function (element) {
       return(collection.indexOf(element) !== -1)
    }
    //this method will return all the values in the set
    this.values = function () {
       return collection
    }
   // this method will add an element to the set
   this.add = function (element) {
       if(!this.has(element)){
           collection.push(element)
           return true
       }
       return false
   }
   //this method will remove an element from the set
    //in es6 this is delete
    this.remove = function (element) {
       if(this.has(element)){
           let index = collection.indexOf(element)
           collection.splice(index,1)
           return true
       }
       return false
    }
    // this method will return the size of the collection
    this.size = function () {
       return collection.length
    }
    //the methods below are not included in ES6 sets
    //this method will return the union of two sets
    this.union = function (otherSet) {
       let unionSet = new mySet()
       let firstSet = this.values()
       let secondSet = otherSet.values()
        firstSet.forEach(function (e) {
            unionSet.add(e)
        })
        secondSet.forEach(function (e) {
            unionSet.add(e)
        })
        return unionSet
    }
    //this method will return the intersection of two sets as a new set
    this.intersection = function (otherSet) {
       let intersectionSet = new mySet()
       let firstSet = this.values()
       firstSet.forEach(function (e) {
           if(otherSet.has(e)){
               intersectionSet.add(e)
           }
       })
        return intersectionSet
    }
    //this method will return the difference of two sets as a new set
    this.difference = function (otherSet) {
        let differenceSet = new mySet()
        let firstSet = this.values()
        firstSet.forEach(function (e) {
            if(!otherSet.has(e)){
                differenceSet.add(e)
            }
        })
        return differenceSet
    }
    //this method will test if the set is a subset of a different set
    this.subset = function (otherSet) {
       let firstSet = this.values()
        return firstSet.every(function (value) {
            return otherSet.has(value)
        })
    }
}

let setA = new mySet()
let setB = new mySet()
setA.add("a")
setB.add("b")
setB.add("c")
setA.add("d")
console.log(setA.subset(setB))


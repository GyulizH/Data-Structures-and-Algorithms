//functions: push,pop,peek,length


//using an array as a stack

let letters = []// already a stack, arrays are stacks in js

let word = "racecar"

let rword = ""

//put letters of word into stack

for(let letter of word){
    letters.push(letter)
}


console.log(letters)

for(let letter of word){
    rword += letters.pop()
}

if(rword === word){
    console.log(word + "is a palindrome")
}else{
    console.log(word + "is not a palindrome")
}

//create a stack

let Stack  = function () {
    this.count = 0
    this.storage = {}

    //adds a new value to the end of the stack
    this.push = function (value) {
        this.storage[this.count] =  value
        this.count++
    }

    //removes and returns the value at the end of the stack
    this.pop = function () {
        if(this.count === 0){
            return undefined
        }
        this.count--
        let result =  this.storage[this.count]
        delete this.storage[this.count]
        return result
    }

    //returns the size of the stack, the number of items in the stack
    this.size =  function () {
      return this.count
    }

    //returns the value at the end of the stack without removing the item unlike pop
    this.peek = function () {
        return this.storage[this.count-1]
    }
}

let myStack =  new Stack()

myStack.push(1)
myStack.push(2)
myStack.push(3)
console.log(myStack.peek())

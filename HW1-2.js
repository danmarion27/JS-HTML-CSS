class Stack {
  constructor() {
    this.items = []
  }
  push(item){
    this.items.push(item)
    console.log(item)
  }
  pop(){
    return this.items.pop()
  }
  peek(){
    if(this.items.length == 0) {
      return
    }
    return this.items[this.items.length - 1]
  }
  isEmpty(){
    return this.getSize() == 0
  }
}
const myStack = new Stack()
myStack.push("Oni Phantom")
myStack.push("Spectrum Phantom")
myStack.push("Ion Phantom")
console.log(myStack)
console.log("-----------------------------------------------")
console.log(myStack.peek(), "will be popped!")
console.log(myStack.pop(), "is popped!")
console.log(myStack)
console.log("-----------------------------------------------")
console.log(myStack.peek(), "will be popped!")
console.log(myStack.pop(), "is popped!")
console.log(myStack)
console.log("-----------------------------------------------")
console.log(myStack.peek(), "will be popped!")
console.log(myStack.pop(), "is popped!")
console.log(myStack)
console.log("-----------------------------------------------")
console.log("Stack is Empty")

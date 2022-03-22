class Stack {
  
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
    console.log(item)
  }

  //remove the last element
  pop() {
    // return this.items.pop();
    if(!this.items.length == 0)
      this.items.pop()
    else
      console.log('Stack is currently empty.')
  }

  checkingtheitems(){
    console.log(my_stack);
  }

  peek() {
    if (this.item.length == 0) {
      return;
    }
    
    return this.items[this.items.length]
  }

  isEmpty() {
    return this.getSize() == 0;
  }
  
}
const my_stack = new Stack()
my_stack.push("Oni Phantom")
my_stack.push("Sheriff")
my_stack.push("Glitch pop Axe")
my_stack.checkingtheitems()
my_stack.pop()
my_stack.checkingtheitems()
my_stack.pop()
my_stack.checkingtheitems()
my_stack.pop()
my_stack.checkingtheitems()
my_stack.pop()
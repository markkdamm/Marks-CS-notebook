class node {
  constructor(data, next) {
    this.data = data;
    this.next = next; //build node and add nex one
  }
}

const tail = new node(7, null)
const nodeD = new node(3, tail)
const nodeC = new node(9, nodeD)
const nodeB = new node(6, nodeC)
const head = new node(1, nodeB)


function elementscount(headnode, count) {
  if (headnode.next == null) {
    return;
  }
  elementscount(headnode = headnode.next, count += 1, console.log(count))
}
console.log(elementscount(head, 1));
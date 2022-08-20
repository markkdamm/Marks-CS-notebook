class node {
    constructor(data, next) {
      this.data = data; // data [data in the node]
      this.next = next; //pointer to the next node [arrow]
    }
  }
  const tail = new node(7, null) // last node (tail) always points to null
  const nodeC = new node(3, tail)
  const nodeB = new node(6, nodeC)
  const head = new node(1, nodeB) //head node (head)

  console.log(head.next.next.data);
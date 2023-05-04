/* Add Front */

class SLL {
    constructor() {
        this.head = null;
    }

    addFront(value) {
        const newNode = {
            data: value,
            next: this.head,           // sets the next property to the current head
        };

        this.head = newNode;        // sets the head to the new node
        
        return this.head;
    }

/* Remove Front */

    removeFront() {         
        if (!this.head) {       
            return null;      
        }

        const currentHead = this.head;
        this.head = currentHead.next;           // sets the head to the next node
        currentHead.next = null;                // remove route to old head node

        return this.head;
    }

    front() {
        return this.head ? this.head.data : null;       // returns the data of the head node
        }


    display() {
    let runner = this.head;
    let values = [];
    while (runner) {
        values.push(runner.data);               // pushes the data of each node into the values array
        runner = runner.next;                   
    }
    return values.join(", ");
  }
}

SLL1 = new SLL()

SLL1.addFront(76); 
console.log(SLL1); 
SLL1.addFront(2); 
console.log(SLL1);

console.log(SLL1.display());

SLL1.addFront(11.41);
console.log(SLL1);

console.log(SLL1.display());

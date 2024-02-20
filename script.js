class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    push(data){
        let newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
    pop() {
        if (!this.head) return null;

        let removedNode = this.tail;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        return removedNode.data;
    }
    print() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

function insertValues(values, linkedList) {
    for (let i = 0; i < values.length; i++) {
        linkedList.push(values[i]);
    }
}

//loop through lists
function checkValid(llist) {
    let current = llist.head;
    let stack = [];
    let openBrackets = ["(", "[", "{"];
    let closeBrackets = [")", "]", "}"];

    while (current) {
        if (openBrackets.includes(current.data)) {
            stack.push(openBrackets.indexOf(current.data));
        } else if (closeBrackets.includes(current.data)) {
            if (stack.length === 0 || stack.pop() !== closeBrackets.indexOf(current.data)) {
                return false;
            }
        }
        current = current.next;
    }
    return stack.length === 0;
}

// function LinkedList(){
//   this.make
// }
//
// var node1={
//  data:null,
//  next:null
// };
//
// var node2={
//  data:null,
//  next:null
// };
//
// node2.data="data2";
// node1.next=node2;
//
//
// var methodsOfLinkedList = {
//   add: function(value) {
//
//     /*
//      * Creates a new instance of a
//      * node.
//      */
//     var newNode = makeNode(value);
//
//     /*
//      * If the list is empty,
//      * then assign the new node
//      * as the head of the list.
//      */
//     if (!this.head) {
//      this.head = newNode;
//     }
//
//     /*
//      * If the list contains a
//      * tail, then assign the new
//      * node as the next node in
//      * the list.
//      */
//     if (this.tail) {
//      this.tail.next = newNode;
//     }
//
//     /*
//      * Assigns the new node as the
//      * tail of the list.
//      */
//     this.tail = newNode;
//   },
//
//   remove: function() {
//
//     /*
//      * Creates a variable that
//      * references the current
//      * head of a list.
//      */
//     var currentNode = this.head;
//
//     /*
//      * Assigns the head of the
//      * list to the node next to
//      * the current head.
//      */
//     this.head = currentNode.next;
//
//     /*
//      * Sets the initial head of
//      * the list to null.
//      */
//     currentNode = null;
//   },
//
//   contains: function(value) {
//
//     /*
//      * Creates a variable that
//      * references the current
//      * head of a list.
//      */
//     var currentNode = this.head;
//
//     /*
//      * Continues iteration while
//      * there is a node in the
//      * list.
//      */
//     while (currentNode) {
//
//       /*
//        * If the current node matches
//        * the target value, then
//        * return true.
//        */
//       if (currentNode.data === value) {
//         return true;
//       }
//
//       /*
//        * Assigns currentNode to
//        * reference the next node
//        * in the list.
//        */
//       currentNode = currentNode.next;
//      }
//
//      /*
//       * Returns false if there are
//       * no matches in the list.
//       */
//     return false;
//   }
// };
//
// var makeNode = function(value) {
//
//   /*
//    * Creates an object with the
//    * two properties of a node.
//    */
//   var instanceOfNode = {
//     data: value,
//     next: null
//   };
//
//   /*
//    * Returns an instance of a
//    * node.
//    */
//   return instanceOfNode;
// };

// My Implementation

function ListNode(){
  this.data = null;
  this.next = null;
}

ListNode.prototype = {
  setData: function(val) {this.data = val;},
  getData: function() {var val = this.data; return val;},
  setNext: function(listNode) {this.next = listNode;},
  getNext: function() {var listNode = this.next; return listNode;}
}

function List() {  
  this.head = null;
  this.tail = null;
};

List.prototype = {
  add: function(value) {
    var newNode = new ListNode();
    
    if (value) {
      newNode.setData(value);
    }

    if (!this.head) {
     this.head = newNode;
    } 
    if (this.tail) {
     this.tail.next = newNode;
    }
    this.tail = newNode;
  },

  remove: function() {
    var currentNode = this.head;    
    this.head = currentNode.next; 
    currentNode = null; 
  },

  contains: function(value) {
    var currentNode = this.head; 

    while (currentNode) {
      if (currentNode.data === value) {
        return true;
      }
      currentNode = currentNode.next;
     }
    return false; 
  }
}


// new ListElement() has getters and setters provided to the object created through object properties

function ListElement() {
  this.data = null;
  this.next = null;
}

// Tracking the head

var listHead;

function insertInFront(list, data) {
  var elem1 = new ListElement();
  elem1.data = data;
  elem1.next = list;
  return elem1;
}

head = insertInFront(head, "new data");
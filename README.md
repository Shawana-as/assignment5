1) getElementById vs getElementsByClassName vs querySelector / querySelectorAll

getElementById("id") → one element by id.

getElementsByClassName("class") → many elements by class (HTMLCollection).

querySelector("selector") → first element by CSS selector.

querySelectorAll("selector") → all elements by CSS selector (NodeList).


2) How to create and insert a new element?
let div = document.createElement("div");
div.textContent = "Hello";
document.body.appendChild(div);

3) What is Event Bubbling?

Event goes from child → parent → up to document.


4) What is Event Delegation?

Put one listener on parent, handle events of all children.

Useful → less code, better performance.


5) preventDefault() vs stopPropagation()

preventDefault() → stops default action (form submit, link open).

stopPropagation() → stops event from going to parent.



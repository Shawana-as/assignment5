1) What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById("id") → Finds one element by its unique id.

getElementsByClassName("class") → Finds all elements with that class name. Returns a live HTMLCollection (like an array but not exactly).

querySelector("selector") → Finds the first element that matches a CSS selector (id, class, tag, etc.).

querySelectorAll("selector") → Finds all elements that match a CSS selector. Returns a NodeList (can use forEach).



2) How do you create and insert a new element into the DOM?

Steps:

Use document.createElement("tag") to make a new element.

Add text or attributes if needed.

Insert into the page using methods like:

appendChild() → adds at the end.

prepend() → adds at the start.

insertBefore() → adds before another element.

Example:
let newDiv = document.createElement("div");
newDiv.textContent = "Hello World!";
document.body.appendChild(newDiv);



3) What is Event Bubbling and how does it work?

Event Bubbling means when an event happens on a child element, it “bubbles up” to its parent, then grandparent, and so on until it reaches document.

Example: If you click a button inside a div, the click event first runs on the button, then the div, then body, etc.



4) What is Event Delegation in JavaScript? Why is it useful?

Event Delegation means attaching one event listener to a parent element instead of many child elements.

It works because of event bubbling.

Useful when:

You have many child elements (better performance).

New child elements are added dynamically (no need to add listeners again).

Example:
document.getElementById("list").addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    alert("You clicked on " + e.target.textContent);
  }
});




5) What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() → Stops the default action of an element.

Example: Stops a link from opening or a form from submitting.

stopPropagation() → Stops the event bubbling (event will not go up to parent elements).

Example:
link.addEventListener("click", function(e) {
  e.preventDefault(); // stops link opening
  e.stopPropagation(); // stops bubbling to parent
});

//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded

// Create HTML element
var elementt = document.createElement('div');

// Add text inside HTML Element
element.innerHTML = 'Hello, DOM';

// Change background color of element
element.style.backgroundColor = '#f9f9f9';

// Add the element to the actual DOM
document.body.appendChild(element);

// update element
element.style.textAlign = 'center';

// append elements to element created above
var ul = document.createElement('ul');

// loop through to add li to ul
for (let i = 0; i < 3; i++) {
  let li = document.createElement(li);
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li);
}

// append ul to div
element.appendChild(ul)

// style new elements
ul.style.textAlign = 'left';




// DELETE SINGLE ELEMENT
ul.removeChild(ul.querySelector('li:nth-child(2)'));

// REMOVE ENTIRE UL
ul.remove();
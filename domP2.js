// Traversing the dom//

var itemList=document.querySelector('#items');

//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='darkgrey';
// console.log(itemList.parentNode.parentNode.parentNode)

//ParentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='orange';
// console.log(itemList.parentElement.parentElement.parentElement)

//childNodes
// console.log(itemList.childNodes);
// console.log(itemList.children)
// console.log(itemList.children[1])
// itemList.children[1].style.backgroundColor="yellow"

//first child
// console.log(itemList.firstChild)

// //first element child

// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent="hello 1"

//last child element
// console.log(itemList.lastChild);

//last child element

// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent="hello there"

//next sibling
// console.log(itemList.nextSibling);
// //next element sibling
// console.log(itemList.nextElementSibling);

//previous Sibling
// console.log(itemList.previousSibling);
// // previousElementSibling
// console.log(itemList.previousElementSibling)
// itemList.previousElementSibling.style.color="green"

///////// *****CREATE ELEMENT***** ///////////

//create div
var newDiv=document.createElement('div');

//Add class
newDiv.className="hello";

//Add id
newDiv.id="hello1"

//add attribute
newDiv.setAttribute('title','hello Dive')

//create text Node
var newDivText=document.createTextNode('hello world');

//add text to div
newDiv.appendChild(newDivText);

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1')

console.log(newDiv);

container.insertBefore(newDiv,h1)

newDiv.style.fontSize='100px'









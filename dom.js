//  console.dir(document);

//Examine the document object//

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title='izaan';
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)
// console.log(document.all[11])
// document.all[11].textContent="HELLO izaan"
// console.log(document.forms[0])
// console.log(document.links)
// console.log(document.images)

// GETELEMENTBYID

// console.log(document.getElementById('header-title'))
// var header=document.getElementById('header-title');
// var headerTitle=document.getElementById('main-header');
// console.log(header)
// header.textContent="hello there";
// header.innerText="goodbye"
// console.log(header.textContent)
// console.log(header.innerText)
// header.innerHTML='<h3>lets gooooooo</h3>'
// header.innerText='helloo'
// header.style.borderBottom='solid 3px black'
// headerTitle.style.borderBottom='solid 3px red'

//GETELEMENTSBYCLASSNAME//

// var items=document.getElementsByClassName('list-group-item')
// console.log(items)
// console.log(items[1]);
// items[1].textContent="hello 2"
// items[1].style.fontWeight='bold'
// items[1].style.color='red'
// items[1].style.backgroundColor='yellow'

// for(i=0;i<items.length;i++){
//     items[i].style.backgroundColor="orange"
// }

// GETELEMENTSBYTAGNAME//

// var li=document.getElementsByTagName('li')
// console.log(li)
// console.log(li[1]);
// li[1].textContent="hello 2"
// li[1].style.fontWeight='bold'
// li[1].style.color='red'
// li[1].style.backgroundColor='yellow'

// for(i=0;i<li.length;i++){
//     li[i].style.backgroundColor="orange"
// }

//QUERYSELECTOR//

// var header=document.querySelector('#main-header')
// header.style.borderBottom="solid 5px purple"

// var input=document.querySelector('input')
// input.value="hello world"

// var submit=document.querySelector('button')
// submit.innerText='SEND'

// var item =document.querySelector('a');
// item.style.color='red'
// item.style.fontWeight="bold"

// var lastItem=document.querySelector('.list-group-item:last-child');
// lastItem.style.color='blue'

// var secondItem=document.querySelector
// ('.list-group-item:nth-child(2)');
// secondItem.style.color='blue'

// QuerySelector//
// var titles=document.querySelectorAll('h1')
// console.log(titles)
// titles[1].textContent='helllo'

// var odd=document.querySelectorAll('li:nth-child(odd)');

// for(i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor='orange'
// }

// var even=document.querySelectorAll('li:nth-child(even)');

// for(i=0;i<even.length;i++){
//     even[i].style.backgroundColor='#f4f4f4'
// }
var form=document.getElementById('add-form')
var itemList=document.querySelector('#items')
var filter=document.getElementById('filter');

//form submit event
form.addEventListener('submit',addItem);
//Delete event
itemList.addEventListener('click',removeItem)
//filter event
filter.addEventListener('keyup',filterItems)

//add Item
function addItem(e){
    e.preventDefault();

    //get Input
    var newItem=document.getElementById('item').value;

    //create new li element
    var li=document.createElement('li')
    //add class
    li.className='list-group-item';
    //add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //creat delete button element
    var delBtn=document.createElement('button');
    //add class to delete button
    delBtn.className='btn btn-danger btn-sm float-right delete'
    //append text node
    delBtn.appendChild(document.createTextNode('x'));

    //append button to li
    li.appendChild(delBtn);
    //append li to list
    itemList.appendChild(li);
}

//Remove Item
function removeItem(e){
    if(e.target.classList.contains('delete'))
    {
        if(confirm('are you sure'))
        {
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//filter items (serach for items)
function filterItems(e){
    //cover text to lowercase
    var text=e.target.value.toLowerCase();
    // console.log(text);
    //get list item
    var items=itemList.getElementsByTagName('li')
    //convert to an array
    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;
        // console.log(itemName);
        if(itemName.toLowerCase().indexOf(text)!= -1){
            item.style.display='block';
        }else{
            item.style.display='none';
        }
    })
}
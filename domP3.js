
/////EVENTS

// var button=document.getElementById('button').addEventListener(
//     'click',buttonClick);

// function buttonClick(e){
//     // console.log('button clicked again')
//     // document.getElementById('main-header').textContent="izaan"
//     // document.querySelector('.task-container').style.backgroundColor="yellow"
//     // console.log(e)

//     // console.log(e.target);
//     // console.log(e.target.id)
//     // console.log(e.target.className)
//     // console.log(e.target.classList)
//     // var output=document.getElementById('output');
//     // output.innerHTML='<h3>'+e.target.id+'</h3>'

//     // console.log(e.type)
//     // console.log(e.clientX);
//     // console.log(e.clientY);

//     // console.log(e.offsetX)
//     // console.log(e.offsetY)

//     // console.log(e.altKey);
//     // console.log(e.ctrlKey);
//     // console.log(e.shiftKey);
// }

var button=document.getElementById('button')
var box=document.getElementById('box');

// button.addEventListener('click',runEvent);
// button.addEventListener('dblclick',runEvent);
// button.addEventListener('mousedown',runEvent);
// box.addEventListener('mouseenter',runEvent);
// box.addEventListener('mouseleave',runEvent)

// box.addEventListener('mouseover',runEvent);
// box.addEventListener('mouseout',runEvent)

// button.addEventListener('mouseup',runEvent);

// box.addEventListener('mousemove',runEvent);

var itemInput=document.querySelector('input[type="text"]');
var form=document.querySelector('form')
var select=document.querySelector('select');

// itemInput.addEventListener('keydown',runEvent);
// itemInput.addEventListener('keyup',runEvent);
// itemInput.addEventListener('keypress',runEvent);

// itemInput.addEventListener('focus',runEvent)
// itemInput.addEventListener('blur',runEvent)

// itemInput.addEventListener('cut',runEvent)
// itemInput.addEventListener('paste',runEvent)

// itemInput.addEventListener('input',runEvent)
// select.addEventListener('change',runEvent)
// select.addEventListener('input',runEvent)

form.addEventListener('submit',runEvent)


function runEvent(e){
    e.preventDefault();
    console.log('Event TYPE: '+e.type)
    console.log(itemInput.value);
    console.log(select.value);

    // document.body.style.display='none'
    // console.log(e.target.value);
    // document.getElementById('output').innerHTML='<h3>'+e.target.value+'</h3>';

    // output.innerHTML='<h3>Mouse X: '+e.offsetX+
    // ' </h3><h3>Mouse Y: '+e.offsetY+'</h3>';

    // box.style.backgroundColor="rgb("+e.offsetX+","
    // +e.offsetY+","+40+")";

    // document.body.style.backgroundColor="rgb("+e.offsetX+","
    // +e.offsetY+","+40+")";

}






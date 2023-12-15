
const frame = document.querySelector('.game');
const Button = document.getElementById('n2');
const element = document.querySelector('.content')


Button.addEventListener('click', ()=>{
  element.parentNode.replaceChild(frame, element);
  frame.classList.remove('view')
});


//const frameElement = document.getElementById('myFrame');
//moveFrameLeft(frame, -800, 5000); // Move the frame 100px to the left in 0.5 seconds

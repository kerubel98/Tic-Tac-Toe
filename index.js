
const frame = document.querySelector('.game');
const Button = document.getElementById('n2');
const element = document.querySelector('.content')
const notice = document.querySelector('.text')
const winer = document.querySelector('.winer-bord')



Button.addEventListener('click', ()=>{
  element.parentNode.replaceChild(frame, element);
  frame.classList.remove('view')

});

winer.addEventListener('MutationObserver', ()=>{
  notice.classList.add('view')
  winer.classList.remove('view')
})

///remianing a pleyer bot that takes token the pleyer didnt chose
///can pleye with the pleyer
///1- take board and serch for emptty item then add its token --stage 1
///take copied cell and choos 2 similar icones the pleyer can coplite then interapt by ading icon
///costum pathes

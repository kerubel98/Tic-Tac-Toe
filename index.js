
const dilaogElemnt = document.querySelector("dialog");
const showbutton = document.getElementById("but");
const close = document.getElementById('close');

showbutton.addEventListener("click", ()=>{
    dilaogElemnt.showModal();
});

close.addEventListener("click", ()=>{
    close_1.close()
});


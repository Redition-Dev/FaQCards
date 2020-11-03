let trigger = document.querySelector('.trigger');
let pTag = document.querySelector('.pTag');
let trigger2 = document.querySelector('.trigger2');
let pTag2 = document.querySelector('.pTag2');
let trigger3 = document.querySelector('.trigger3');
let pTag3 = document.querySelector('.pTag3');
let trigger4 = document.querySelector('.trigger4');
let pTag4 = document.querySelector('.pTag4');
let trigger5 = document.querySelector('.trigger5');
let pTag5 = document.querySelector('.pTag5');
let h2Tag = document.getElementsByClassName('colorChanger')

let arrowTrigger = document.getElementsByClassName('theImg');
trigger.onclick = function(){
    pTag.classList.toggle('show');
    h2Tag[0].classList.toggle('changer');
    arrowTrigger[0].classList.toggle('arrow-changer');
}


trigger2.onclick = function(){
    pTag2.classList.toggle('show');
    h2Tag[1].classList.toggle('changer')
    arrowTrigger[1].classList.toggle('arrow-changer');
}



trigger3.onclick = function(){
    pTag3.classList.toggle('show');
    h2Tag[2].classList.toggle('changer')
    arrowTrigger[2].classList.toggle('arrow-changer');
}


trigger4.onclick = function(){
    pTag4.classList.toggle('show');
    h2Tag[3].classList.toggle('changer')
    arrowTrigger[3].classList.toggle('arrow-changer');
}


trigger5.onclick = function(){
    pTag5.classList.toggle('show');
    h2Tag[4].classList.toggle('changer')
    arrowTrigger[4].classList.toggle('arrow-changer');
}




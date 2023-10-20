let countdown;
const numDaRicordare = document.getElementById('num-da-ricordare');
const secondiRimanenti = document.createElement('span');
const inputPart = document.getElementById('input');
let stopCount;

play()

function play(){
    const startBtn = document.querySelector('button');

    countdown = 3;

    stopCount = setInterval(timer , 1000);
    timer()
}

function timer(){
    if(countdown > 0){
        secondiRimanenti.innerHTML = `(${countdown})`;
        numDaRicordare.append(secondiRimanenti);
        countdown --;
    }else{
        clearInterval(stopCount);
        numDaRicordare.classList.add('d-none');
        inputPart.classList.remove('d-none');
    }
    
}
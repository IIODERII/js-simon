(function oderSimonSays(){
    let countdown;
    const numDaRicordare = document.getElementById('num-da-ricordare');
    const secondiRimanenti = document.createElement('div');
    const numeri = document.createElement('h3');
    const inputPart = document.getElementById('input');
    const results = document.getElementById('results');
    const resetBtn = document.getElementById('reset');
    const endMessage = document.createElement('div');
    let stopCount;
    const qNum = 5;
    let error;

    play()

    function play(){
        const startBtn = document.querySelector('button');

        error = false ;

        const numArray = [];

        countdown = 30;

        numeri.className = 'fs-1';
        let c = 0;
        while(numArray.length < qNum){
            let rndNum = getRndInteger(1 , 100);
            if(!numArray.includes(rndNum)){
                numArray.push(rndNum);
                numeri.innerHTML += ` |  ${numArray[c]} | `;
                c++;
            }       
        }
        numDaRicordare.append(numeri);

        stopCount = setInterval(timer , 1000);
        timer();

        startBtn.addEventListener('click' , function () {
            const uservaluesArray = document.getElementsByTagName('input');
            let userArray = [];
            for(let i = 0 ; i < uservaluesArray.length ; i++){
                if(!isNaN(parseInt(uservaluesArray[i].value)) && ((1 <= parseInt(uservaluesArray[i].value)) && (parseInt(uservaluesArray[i].value) <= 100))){
                    userArray.push(parseInt(uservaluesArray[i].value));
                }else{
                    const pageReload = setTimeout(reload , 5000);
                    results.innerHTML = 'Non hai inserito i valori corretti, la pagina si ricaricherà tra 5 secondi';
                    error = true ;
                }
            }
            console.log(userArray);

            inputPart.classList.add('d-none');

            if(!error){
                let counter = 0;
                for(let i = 0 ; i < userArray.length ; i++){
                    const resultNum = document.createElement('span');
                    if(numArray.includes(userArray[i])){
                        resultNum.innerHTML = ` |  ${numArray[i]} | `;
                        resultNum.className = 'text-success';
                        results.append(resultNum);
                        counter++ ;
                    }else{
                        resultNum.innerHTML = ` |  ${numArray[i]} | `;
                        resultNum.className= 'text-danger';
                        results.append(resultNum);
                    }
                }
                
                resetBtn.classList.remove('d-none');

                endMessage.className = 'text-center w-75 rounded-3 mx-auto fw-bold my-3'
                if(counter === 5) {endMessage.innerHTML = 'COMPLIMENTI ne hai presi 5 su 5!!' ; endMessage.classList.add('bg-success');}
                if(counter === 4) {endMessage.innerHTML = "C'eri quasi! Ne hai presi 4 su 5!"; endMessage.classList.add('bg-success');}
                if(counter === 3) {endMessage.innerHTML = 'Non male! Ne hai presi 3 su 5!!'; endMessage.classList.add('bg-warning');}
                if(counter === 2) {endMessage.innerHTML = 'Puoi fare di meglio! Ne hai presi 2 su 5!!'; endMessage.classList.add('bg-warning');}
                if(counter === 1) {endMessage.innerHTML = 'Non molto bene, ne hai preso 1 su 5!!'; endMessage.classList.add('bg-danger');}
                if(counter === 0) {endMessage.innerHTML = 'Mi sa che è il momento di allenare la memoria, non ne hai preso neanche uno!'; endMessage.classList.add('bg-danger');}

                results.append(endMessage);
            }
            

        })

        resetBtn.addEventListener('click' , function(){
            window.location.reload();
        })
    }

    function timer(){
        if(countdown > 0){
            secondiRimanenti.innerHTML = countdown;
            numDaRicordare.append(secondiRimanenti);
            countdown --;
        }else{
            clearInterval(stopCount);
            numDaRicordare.classList.add('d-none');
            inputPart.classList.remove('d-none');
        }
        
    }

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    function reload(){
        window.location.reload();
    }
})();


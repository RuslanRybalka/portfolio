//import Timer from "./Timer.js";
const bestResult = document.querySelector('.best-result');
const averageResult = document.querySelector('.average-result');
const differenceTime  = document.querySelector('.difference-time');
const deleteBtn = document.querySelector('.delete-btn');
const resultList = document.querySelector('.result-list');
const timerBox = document.querySelector('.timer');

//<button class="delete-btn">&times;</button>

let results = [];
let bestTime = Infinity;
let diffTime = 0;
let lastTime = 0;


let options = {
    format: 'mm:ss:ms',
    timePerTick: 50
}

let timer = new Timer(options);

window.addEventListener('keypress', function (event){
    console.log(event.target);

    if (event.keyCode == 32){
        if(!timer.isStarted){
            timer.start(); 
            timer.show('#timer');
        }
        else{
            timer.stop();
            let currentTime = {
                id : Date.now(),
                value: timer.getTime()
            }
            diffTime = bestTime - currentTime.value;

            if (currentTime.value < bestTime){
                bestTime = currentTime.value;
                setBestTime(bestTime);
            }

            results.push(currentTime.value);

            if (results.length > 10){
                results.shift();
                renderResultList();
            }
            if (diffTime > 0){
                setDiffTime(diffTime, 'better');
            }else{
                setDiffTime(diffTime, 'worse');
            }
            renderResultList();
            addDeleteBtn();
            setAverageTime();
        }
    }
});

function formatTimeField(time){
        let min = ~~(time/60000);
        // if(min < 10){
        //     min = '0' + min;
        // }  
        let seconds = ~~(time/1000%60);
        if(seconds < 10){
            seconds='0' + seconds;
        }
        let ms = ~~(time%1000/10);
        if(ms < 10){
            ms = '0' + ms;
        }
        return `${min} : ${seconds} : ${ms}`;
}

function setBestTime(time){
    bestResult.innerHTML = formatTimeField(time);
}

function setDiffTime(time, className){
    if (className == 'better'){
         differenceTime.innerHTML = '+ '+ formatTimeField(Math.abs(time));
         differenceTime.className = 'difference-time better';
    }else{
        differenceTime.innerHTML = '- '+ formatTimeField(Math.abs(time));
        differenceTime.className = 'difference-time worse';
    }
}


function renderResultList(){
    resultList.innerHTML = '';
    for (let i = 0; i < results.length; i++ ){
        resultList.innerHTML += `<li class="result-item"> ${formatTimeField(results[i])}</li>`;
    }
}

function addDeleteBtn(){
    if (!document.querySelector('.delete-btn')){
        let deleteBtn  = document.createElement('button');
        deleteBtn.innerHTML = '&times';
        deleteBtn.className = 'delete-btn' ;
        timerBox.appendChild(deleteBtn);
        deleteBtn.addEventListener('click', function(event) {
            results.pop();
            renderResultList();
            setAverageTime();
            timerBox.removeChild(deleteBtn);
        });
    }
}

function setAverageTime(){
    let sum = results.reduce((acc, time) => acc+time, 0)/results.length;
    averageResult.innerHTML = formatTimeField(sum);
}
//import Timer from "./Timer.js";
const bestResult = document.querySelector('.best-result');
const averageResult = document.querySelector('.average-result');
const differenceTime  = document.querySelector('.difference-time');
const deleteBtn = document.querySelector('.delete-btn');
const resultList = document.querySelector('.result-list');
const timerBox = document.querySelector('.timer');
const resetBtn = document.querySelector('.reset-btn');

//<button class="delete-btn">&times;</button>

let results = [];
let bestTime = Infinity;
let previousBestTime = Infinity;
let diffTime = 0;
let lastTime = 0;


let options = {
    format: 'mm:ss:ms',
    timePerTick: 50
}

let timer = new Timer(options);

window.addEventListener('keypress', function (event){
    if (event.keyCode == 32){
        startTimer();        
    }
});

let touch = {x: 0, y: 0} 

window.addEventListener('touchstart', function(event){
    touch.x = event.touches[0].clientX;
    touch.y = event.touches[0].clientY;
});

window.addEventListener('touchend', function(event){
    if ((Math.abs(touch.x - event.changedTouches[0].clientX) > 10)  || (Math.abs(touch.y - event.changedTouches[0].clientY) > 10)){
        return false;
    }
    if(event.target == resetBtn){
        event.stopPropagation();
        if(timer.isStarted){
            timer.stop();
            resetTable();
        }else{
            resetTable();
        }
        document.activeElement.blur();
        return;
    }
    let delBtn = document.querySelector('.delete-btn');
    if(!delBtn || event.target !== delBtn){
         startTimer();
    }else{
        event.stopPropagation();
    }
});


function formatTimeField(time){
        let min = ~~(time/60000);
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
            if(timer.getTime() < previousBestTime){
                bestTime = previousBestTime;
                previousBestTime = bestTime;
                setBestTime(bestTime);
            } 
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

function startTimer(){
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
            previousBestTime = bestTime;
            bestTime = currentTime.value;
            setBestTime(bestTime);
        }else{
            previousBestTime = bestTime;
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
function resetTable(){
    timer = new Timer(options);
    bestResult.innerHTML = '0 : 00 : 00';
    averageResult.innerHTML = '0 : 00 : 00';
    differenceTime.innerHTML = '';
    resultList.innerHTML = '';
    document.querySelector('#timer').innerHTML = '0 : 00 : 00';
    results = [];
    bestTime = Infinity;
    diffTime = 0;
    lastTime = 0;
    let delBtn = document.querySelector('.delete-btn');
    if(delBtn){
        timerBox.removeChild(delBtn);
    }    
}
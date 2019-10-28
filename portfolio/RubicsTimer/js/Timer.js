// export default
class Timer{
    constructor(options){
        this.isStarted = false;
        this.timeStart = 0;
        this.timeCurrent = 0;
        this.time = 0;
        this.timerId = null;
        this.timePerTick = options.timePerTick;
        this.format = options.format;
    }
    start(){
        this.isStarted = true;
        this.timeStart = Date.now();
        console.log('Timer started');
        this.run();
    }
    run(){       
        let that = this;
        this.timerId = setTimeout(function tick(){
            that.timeCurrent = Date.now();
            that.time = that.timeCurrent - that.timeStart;
            that.timerId = setTimeout(tick, that.timePerTick);
        }, that.timePerTick);
    }
    stop(){
        clearTimeout(this.timerId);
        console.log('STOP timer')
        this.isStarted = false;
        return this.time;
    }
    formatOutput(){
        let time = this.time;
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
    show(ouputFieldName){
        let out = document.querySelector(ouputFieldName);
        let that = this;
        let timerId = setTimeout(function show(){
            if (that.isStarted){
                 out.innerHTML = that.formatOutput();
                 setTimeout(show, 50);
            }
            else{
                clearTimeout(timerId);
            } 
        },50);
    }
    getTime(){
        return this.time;
    }
}

//export default Timer;
var min = 0;
var sec = 0;
var milli = 0;
var min_Id = document.getElementById("minutes");
var seconds_Id = document.getElementById("seconds");
var milliseconds_Id = document.getElementById("milliseconds");
var interval;

function start(){
    interval = setInterval(function(){
        milli++;
        milliseconds_Id.innerHTML =  milli;
        if(milli >= 100){
            sec++;
            seconds_Id.innerHTML = sec;
            milli = 0;
        }
        else if(sec >=60){
            min++;
            min_Id.innerHTML = min;
            sec = 0;
        }
    },10)
    
    document.getElementById('start').disabled = true;    
}
function stop(){
    clearInterval(interval)
    document.getElementById('start').disabled = false;
}
function reset(){
    stop();
    min_Id.innerHTML = 0;
    seconds_Id.innerHTML = 0;
    milliseconds_Id.innerHTML = 0;
    document.getElementById('start').disabled = false;
}
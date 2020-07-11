var min = 0;
var sec = 0;
var msec =0;


var minhead= document.getElementById("min");
var sechead= document.getElementById("sec");
var msechead= document.getElementById("msec");

function timer(){
    msec++
    msechead.innerHTML=msec;
    if(msec>=60){
        sec++
    
        sechead.innerHTML=sec
        msec=0;
    }else if(sec>=59){
        min++
        
        minhead.innerHTML=min
        sec=0
    }

} 
//....................................
function start(){
    Interval = setInterval(timer,10)
}

function paus(){
    clearInterval(Interval)
}

function reset(){
    min =0;
    sec = 0;
    msec = 0;
    minhead.innerHTML=min
    sechead.innerHTML=sec
    msechead.innerHTML=msec
    paus()
    
}
    

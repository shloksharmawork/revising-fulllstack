let seconds =0;
let timer = null;

function stopwatch(){
    let hrs = Math.floor(seconds/3600);
    let minu = Math.floor( (seconds%3600)/60);
    let sec = seconds%60; 
    document.getElementById("display").textContent = `${hrs} : ${minu} : ${sec}`;
}

function start (){
    if(timer!=null){
        clearInterval(timer);
    }
    timer = setInterval(()=>{
        seconds++;
        stopwatch();
    },1000);
    
}

function stop(){
    clearInterval(timer);
}

function reset(){
    clearInterval(timer);
    seconds =0;
    stopwatch();
}

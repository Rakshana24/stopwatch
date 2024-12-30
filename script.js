const timec=document.getElementById("time");
const startc=document.getElementById("start");
const stopc=document.getElementById("stop");
const resetc=document.getElementById("reset");

let starttime=0;
let eltime=0;
let timeint;



function startbtn(){
    starttime=Date.now()-eltime;

    timeint=setInterval(()=>{
        eltime=Date.now()-starttime;
        timec.textContent=formattime(eltime);
    },10);

    startc.disabled=true;
    stopc.disabled=false;
}


function formattime(eltime)
{
    const millisec=Math.floor((eltime%1000)/10);
    const sec=Math.floor((eltime%(1000*60))/1000);
    const minute=Math.floor((eltime%(1000*60*60))/(1000*60));
    const hour=Math.floor(eltime/(1000*60*60));
    return(
        (hour?(hour>9? hour:"0"+ hour):"00")+
        ":"+
        (minute?(minute>9? minute:"0"+minute):"00")+
        ":"+
        (sec?(sec>9? sec:"0"+sec):"00")+
        ":"+
        (millisec>9? millisec:"0"+millisec)

    );
}
function stopbtn()
{
    clearInterval(timeint);
    startc.disabled=false;
    stopc.disabled=true;
}
function resetbtn()
{
    clearInterval(timeint)
    eltime=0;
    timec.textContent="00:00:00:00"
    startc.disabled=false;
    stopc.disabled=true;
}
function startTime(){
    let today = new Date();
    let folkTime = new Date(today.toLocaleString("en-US", {timeZone: "America/New_York"}));
    let hours = folkTime.getHours();
    let min = folkTime.getMinutes();
    let sec = folkTime.getSeconds();

    min = checkTime(min);

    document.getElementById('txt').innerHTML = hours + ":" + min;
    document.getElementById('seconds').innerHTML = sec
    time = setTimeout('startTime()', 500);
}
function checkTime(i){
    if (i<10){
        i="0"+i;
    } return i;
}

startTime()

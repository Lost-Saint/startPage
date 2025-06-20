function startTime(){
    let today = new Date();
    console.log("today:", today);

    let chrono = today.toLocaleString("en-US", {
        timeZone: "America/New_York",
    });
    console.log("chrono:", chrono);
    console.log("typeof chrono:", typeof chrono);

    // This will cause an error because chrono is a string, not a Date object
    try {
        let hours = chrono.getHours();
        let min = chrono.getMinutes();
        let sec = chrono.getSeconds();
        console.log("hours:", hours, "min:", min, "sec:", sec);
    } catch (error) {
        console.error("Error:", error.message);
        console.log("chrono is a string, not a Date object!");
    }

    min = checkTime(min);
    document.getElementById('txt').innerHTML = hours + ":" + min;
    document.getElementById('seconds').innerHTML = sec;
    time = setTimeout('startTime()', 500);
}

function checkTime(i){
    if (i<10){
        i="0"+i;
    } return i;
}

startTime();

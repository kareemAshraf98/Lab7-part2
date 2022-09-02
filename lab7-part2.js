function showTime(){
    var time = new Date();
    var h = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    var session = document.getElementById('session');
    
    if(h >= 12){
        session.innerHTML="PM";
    }else {
        session.innerHTML= "AM";
    }

    document.getElementById('hours').innerHTML = h;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('second').innerHTML = sec;
}
setInterval(showTime, 10);
var alarmTime = null;
var alarmTimeout = null;

function setAlaramtime(value){
    alarmTime = value;
}
function setAlarm(){
    if(alarmTime){
        let currentTime =new Date();
        let timeToalarm = new Date(alarmTime);

        if(timeToalarm > currentTime){
            let timeOut = timeToalarm.getTime() - currentTime.getTime();
            alert('Aralm set');
        }
    }
}

function clearAlarm(){
    if(alarmTime){
        clearTimeout(alarmTimeout);
        alert("Alarm cleared");
    }
}
document.addEventListener('DOMContentLoaded', () =>{
    let hrs= document.getElementById('hrs');
    let min= document.getElementById('min');
    let sec= document.getElementById('sec');
    setInterval(() => {
        let currtime = new Date();
        hrs.innerHTML = (currtime.getHours() < 10 ? '0':'') + currtime.getHours();
        min.innerHTML = (currtime.getMinutes() < 10 ? '0':'') + currtime.getMinutes();
        sec.innerHTML = (currtime.getSeconds() < 10 ? '0':'') + currtime.getSeconds();
    },1000)
    

    let timer;

    function formatTime(value) {
        return value < 10 ? '0' + value : value;
    }

    function stopwatch() {
        seconds.innerHTML = formatTime(parseInt(seconds.innerHTML) + 1);

        if (seconds.innerHTML == 60) {
            seconds.innerHTML = formatTime(0);
            minutes.innerHTML = formatTime(parseInt(minutes.innerHTML) + 1);
        }
        if (minutes.innerHTML == 60) {
            minutes.innerHTML = formatTime(0);
            hours.innerHTML = formatTime(parseInt(hours.innerHTML) + 1);
        }
        if (hours.innerHTML == 24) {
            day.innerHTML = "Day " + (parseInt(day.innerHTML.split(' ')[1]) + 1);//get second part of string oarse it and increase it by one 
            hours.innerHTML = formatTime(0);
            minutes.innerHTML = formatTime(0);
            seconds.innerHTML = formatTime(0);
        }
    }

    let start = document.getElementById('start');
    start.addEventListener('click', () => {
        clearInterval(timer);
        timer = setInterval(stopwatch, 1000);
    });

    let stop = document.getElementById('stop');
    stop.addEventListener('click', () => {
        clearInterval(timer);
    });

    let reset = document.getElementById('reset');
    reset.addEventListener('click', () => {
        clearInterval(timer);
        seconds.innerHTML = '00';
        minutes.innerHTML = '00';
        hours.innerHTML = '00';
        day.innerHTML = "Day 1";
    });
});


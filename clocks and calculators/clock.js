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


    document.querySelector('.btn').addEventListener('click', getAge);

function getAge() {
    let ageInput = document.getElementById('age').value;
    let arr = ageInput.split("/");

    // Parse the input values into integers
    let day = parseInt(arr[0], 10);
    let month = parseInt(arr[1], 10) - 1; // Months are 0-indexed in JS Date object
    let year = parseInt(arr[2], 10) + 2000; // Assume the input is in 'YY' format

    let birthDate = new Date(year, month, day);
    let currentDate = new Date();

    let ageYears = currentDate.getFullYear() - birthDate.getFullYear();
    let ageMonths = currentDate.getMonth() - birthDate.getMonth();
    let ageDays = currentDate.getDate() - birthDate.getDate();

    // Adjust if the current month/day is before the birth month/day
    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
        ageYears--;
        ageMonths += (ageMonths < 0) ? 12 : 0;

        if (ageDays < 0) {
            ageMonths--;
            ageDays += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
        }
    }

    let answers = document.getElementById('answers');
    document.querySelector('.answer').style.display = 'block'; // Show the answer div
    answers.innerHTML = `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
}

let passwordBox = document.getElementById('password');
let dropdown = document.getElementById('dropdown');
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "1234567890";
let symbols = "!@#$%^&*()~{}+-?|/";
let allchars = upperCase + lowerCase + numbers + symbols;

document.querySelector('.botn').addEventListener('click', () => {
    let passwordLength = parseInt(dropdown.value);
    let password = '';

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (password.length < passwordLength) {
        password += allchars[Math.floor(Math.random() * allchars.length)];
    }

    passwordBox.value = password;
});

document.getElementById('copy').addEventListener('click', () => {
    passwordBox.select();
    document.execCommand('copy');
});

    
});


const minute = document.getElementById("minute");
const second = document.getElementById("second");
const start = document.getElementById("start");


minute.innerText = "00";
second.innerText = "00";

start.addEventListener('click', () => {

    var minuteNum = document.getElementById("minuteNumber").value;
    var secondNum = document.getElementById("secondNumber").value;

    document.getElementById("minuteNumber").value = "";
    document.getElementById("secondNumber").value = "";

    localStorage.setItem('minute', minuteNum);
    localStorage.setItem('second', secondNum);


    var minuteNumber = localStorage.getItem('minute');
    var secondNumber = localStorage.getItem('second');

    var setInt = setInterval(xyz, 1000);

    function xyz() {
        if (secondNumber <= 9) {
            second.innerText = "0" + secondNumber;
        } else {
            second.innerText = secondNumber;
        }

        if (minuteNumber <= 9) {
            minute.innerText = "0" + minuteNumber;
        } else {
            minute.innerText = minuteNumber;
        }
        secondNumber--;
        if (minute.innerText == "0") {
            minute.innerText = "00";
        }
        if (secondNumber == -1) {
            minuteNumber--;
            secondNumber = 59;
            if (minute.innerText == 0) {
                document.querySelector(".active").style.display = "block";
                alarm.play();
                clearInterval(setInt);
            }
        }
    }


});

document.getElementById('stop').addEventListener('click', () => {
    alarm.pause();
    document.querySelector(".active").style.display = "none";
});
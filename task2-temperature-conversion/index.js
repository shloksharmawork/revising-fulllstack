// temperature converter 
let mybtn = document.getElementById("mybtn1");
let ctf = document.getElementById("ctf");
let ftc = document.getElementById("ftc");
let res = document.getElementById("mypara1");
let tempo = document.getElementById("myid1");



mybtn.onclick = function () {
    let temp = Number(tempo.value);
    if (ctf.checked) {

        temp = (temp * 1.8) + 32;
        res.textContent = `Temperature in Fahrenheit is ${temp.toFixed(1)}°F`;
    }
    else if (ftc.checked) {

        temp = (temp - 32) / 1.8;
        res.textContent = `Temperature in Celsius is ${temp.toFixed(1)}°C`;
    }
    else {
        res.textContent = "select a unit";
    }



}
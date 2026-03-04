const randomnum = Math.floor(Math.random() * 100) + 1;

const usertext = document.getElementById("myid1");
const submit1 = document.getElementById("mysubmit1");
const para1 = document.getElementById("myparaid1");
let attempts = 0;

submit1.onclick = function () {
    if (!usertext.value) {
        para1.textContent = "Enter a number first";
        return;
    }
    attempts++;

    let userNumber = Number(usertext.value);
    let difference = Math.abs(userNumber - randomnum);

    if (userNumber === randomnum) {
        para1.textContent = `You win in ${attempts} attempts`;
        para1.style.backgroundColor = "green";
    }

    else if (difference <= 5) {
        para1.textContent = " Very close! 🔥";
        para1.style.backgroundColor = "yellow";
    }

    else if (difference <= 10) {
        para1.textContent = " Close! 🙂";
        para1.style.backgroundColor = "orange";
    }

    else if (userNumber > randomnum) {
        para1.textContent = "Number is too high ⬆ ❄️";
        para1.style.backgroundColor = "red";
    }

    else {
        para1.textContent = "Number is too low ⬇ ❄️";
        para1.style.backgroundColor = "red";
    }
}
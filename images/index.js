let mybtn = document.getElementById("mybtn1");


mybtn.onclick = function () {
    let mynumber = document.getElementById("myid1").value;
    if (mynumber > 6) {
        alert("please enter a number less than 6");
        return;
    }
    const diceres = document.getElementById("diceres");
    const diceimg = document.getElementById("diceimg");
    const value = [];
    const images = [];
    for (let i = 0; i < mynumber; i++) {
        const randomvalue = Math.floor(Math.random() * 6) + 1;
        value.push(randomvalue);
        images.push(`<img src = "images/${randomvalue}.png" alt = "dice">`);




    }
    diceres.textContent = `dice result : ${value.join(', ')}`;
    diceimg.innerHTML = images.join('');




}
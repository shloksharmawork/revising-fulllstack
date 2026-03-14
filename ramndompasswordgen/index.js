
const passwordlen = 8;
const lowercase = true;
const uppercase = true;
const numbers = true;
const symbols = true;
const mybtn1 = document.getElementById("mybtn1");
const mypara1 = document.getElementById("mypara1");


mybtn1.onclick = function () {
    const password = generatePassword(
        passwordlen,
        lowercase,
        uppercase,
        numbers,
        symbols);
    mypara1.textContent = password;



}

function generatePassword(length, lowercase, uppercase, numbers, symbols) {
    const lowercasechar = 'abcdefghijklmnopqrstuvwxyz';
    const uppercasechar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberchar = '0123456789';
    const symbolchar = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let charallow = '';
    charallow += lowercase ? lowercasechar : '';
    charallow += uppercase ? uppercasechar : '';
    charallow += numbers ? numberchar : '';
    charallow += symbols ? symbolchar : '';


    let password = '';
    for (let i = 0; i < length; i++) {
        const randomindex = Math.floor(Math.random() * charallow.length);
        password += charallow[randomindex];
    }
    return password;

}



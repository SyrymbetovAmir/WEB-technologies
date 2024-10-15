// let year = prompt();
// if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
//     console.log("This year is leap")
// }
// else {
//     console.log("This year isn't leap")
// }



function multiply() {
    let num1 = document.getElementById("frst").value;
    let num2 = document.getElementById("scnd").value;
    let result = num1*num2;
    document.getElementById("result").innerHTML=result;
}
function divide() {
    let num1 = document.getElementById("frst").value;
    let num2 = document.getElementById("scnd").value;
    let result = num1/num2;
    document.getElementById("result").innerHTML=result;
}

function converter() {
    let c = document.getElementById("cels").value;
    let result = (c*(9/5)+32);
    document.getElementById("result2").innerHTML=result;
}

// EVEN OR ODD

function eod() {
    let num = prompt();
    if (num%2==0) {
        console.log(`${num} is even number`)
    } else {
        console.log(`${num} is odd number`)
    }
}

// LARGEST NUMBER

function lol() {
    let num1 = prompt();
    let num2 = prompt();
    let num3 = prompt();
    let max = Math.max(num1,num2,num3)
    let min = Math.min(num1,num2,num3)
    console.log(`The maximum number is ${max}`)
    console.log(`The minimum number is ${min}`)
}

// AREA OF TRIANGLE

function aot() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let c = parseInt(document.getElementById("cx").value);
    let s = (a+b+c)/2;
    console.log(s);
    let result = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    document.getElementById("result3").innerHTML=result;
}

// Factorial

function factorial() {
    let num = prompt();
    let result = 1;
    for (let i =1;i<=num;i++) {
        result*=i;
    }
    console.log(result);
}

// Vowel or consonant

function voc() {
    const vowels = 'aeiouAEIOU';
    let vow = 0;
    let con = 0;
    const str = prompt();
    for (let char of str) {
        if (vowels.includes(char)) {
            vow++;
        }else {
            con++;
        }
    }
    console.log(`Vowels: ${vow}, Consonants: ${con}`);
}

function transformSeconds(seconds) {
    if (seconds < 0) return alert("Please enter a non-negative number.");
    
    const totalMinutes = seconds / 60;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = (totalMinutes % 60).toFixed(4);
    
    alert(`${hours} hours and ${minutes} minutes`);
}
function findMostFrequentNumber(arr) {
    const frequencyMap = {};
    let maxCount = 0;
    let mostFrequentNum = null;
    for (const num of arr) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
        if (frequencyMap[num] > maxCount) {
            maxCount = frequencyMap[num];
            mostFrequentNum = num;
        }
    }
    return mostFrequentNum;
}
function fibonacciRecursive(n) {
    if (n < 0) return alert("Please enter a non-negative integer.");
    if (n === 0) return alert(0);
    if (n === 1) return alert(1);
    
    const fib = fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
    alert(fib);
    return fib;
}
function NY() {
    const today = new Date();
    const nextYear = today.getFullYear() + 1;
    const newYear = new Date(`January 1, ${nextYear}`);
    const diffInMilliseconds = newYear - today;
    const diffInDays = Math.ceil(diffInMilliseconds / (1000 * 60 * 60 * 24));
    document.getElementById("result2").innerHTML=diffInDays;
}
function multiply() {
    let num1 = parseInt(document.getElementById("frst").value);
    let num2 = parseInt(document.getElementById("scnd").value);
    let result = num1*num2;
    document.getElementById("result").innerHTML=result;
}
function divide() {
    let num1 = parseInt(document.getElementById("frst").value);
    let num2 = parseInt(document.getElementById("scnd").value);
    let result = num1/num2;
    document.getElementById("result").innerHTML=result;
}
function plus() {
    let num1 = parseInt(document.getElementById("frst").value);
    let num2 = parseInt(document.getElementById("scnd").value);
    let result = num1+num2;
    document.getElementById("result").innerHTML=result;
}
function minus() {
    let num1 = parseInt(document.getElementById("frst").value);
    let num2 = parseInt(document.getElementById("scnd").value);
    let result = num1-num2;
    document.getElementById("result").innerHTML=result;
}
function bg() {
    document.getElementById("textbox").style="background-color: lightgreen";
}
function text() {
    document.getElementById("lorem").innerHTML="Hello World!";
}
function img() {
    document.getElementById("img").src="https://astanait.edu.kz/wp-content/uploads/2020/05/aitu-logo-white-2-300x154.png";
}
  
  
function ToDo() {
    let toDoContainer = document.getElementById('toDoContainer');
    let inputField = document.getElementById('inputField');
    var paragraph = document.createElement('p');
    if (inputField.value.trim() === '') {
        alert('You must type something');
        return;
    }
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function() {
        paragraph.style.textDecoration = "line-through";
    });
    paragraph.addEventListener('dblclick', function() {
        toDoContainer.removeChild(paragraph);
    });
  }

function ascsort() {
    const strarr = document.getElementById("arr").value.split(' ');
    const arr = [];
    for (let i=0;i<strarr.length;i++) {
        arr[i] = parseInt(strarr[i]);
    }
    const sortedArr = arr.sort((a,b) => a-b)
    document.getElementById("resultsrt").innerHTML=sortedArr;
}
function descsort() {
    const strarr = document.getElementById("arr").value.split(' ');
    const arr = [];
    for (let i=0;i<strarr.length;i++) {
        arr[i] = parseInt(strarr[i]);
    }
    const sortedArr = arr.sort((a,b) => b-a)
    document.getElementById("resultsrt").innerHTML=sortedArr;
}
function tax() {
    let cost = parseInt(document.getElementById("inptax").value);
    let result = 0;
    if (cost>=10000) {
        result = cost*0.25;
    }
    else if (cost>5000 && cost< 10000) {
        result = cost*0.2;
    }
    else if (cost<=5000) {
        result = cost*0.15;
    }
    document.getElementById("resulttax").innerHTML=result;
}
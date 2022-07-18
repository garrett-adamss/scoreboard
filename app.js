let scoreOne = 0;
let scoreTwo = 0;

console.log(scoreOne);
console.log(scoreTwo);

let scoreIntOne = document.getElementById("score-one");
scoreIntOne.innerText = "0" + scoreOne;

let scoreIntTwo = document.getElementById("score-two");
scoreIntTwo.innerText = "0" + scoreTwo;

function scorePlusOne() {
    scoreOne++;
    console.log(scoreOne);
    let codeElm = document.getElementById("score-one");
    if (scoreOne > 9) {
        codeElm.innerText = scoreOne;
    } else {
        codeElm.innerText = "0" + scoreOne;
    }
    console.log(codeElm);
}

function scorePlusOneTwo() {
    scoreTwo++;
    console.log(scoreTwo);
    let codeElm = document.getElementById("score-two");
    if (scoreTwo > 9) {
        codeElm.innerText = scoreTwo;
    } else {
        codeElm.innerText = "0" + scoreTwo;
    }
    console.log(codeElm);
}

function scorePlusThree() {
    scoreOne += 3;
    console.log(scoreOne);
    let codeElm = document.getElementById("score-one");
    if (scoreOne > 9) {
        codeElm.innerText = scoreOne;
    } else {
        codeElm.innerText = "0" + scoreOne;
    } console.log(codeElm);
}

function scorePlusThreeTwo() {
    scoreTwo += 3;
    console.log(scoreTwo);
    let codeElm = document.getElementById("score-two");
    if (scoreTwo > 9) {
        codeElm.innerText = scoreTwo;
    } else {
        codeElm.innerText = "0" + scoreTwo;
    }
    console.log(codeElm);
}

function reset() {
    scoreOne = 0;
    scoreTwo = 0;
    console.log(scoreOne + scoreTwo);
    let codeElmOne = document.getElementById("score-one")
    let codeElmTwo = document.getElementById("score-two")
    codeElmOne.innerText = "0" + scoreOne
    codeElmTwo.innerText = "0" + scoreTwo;
    console.log(codeElmOne + codeElmTwo);
}
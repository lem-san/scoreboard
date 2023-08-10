// scoring values
let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")
let home = 0
let guest = 0

// scoreboards 
let bgHome = document.getElementById("bg-home")
let bgGuest = document.getElementById("bg-guest")

var time = 10
var counter
var cdTime = document.getElementById("cd-time")
const buttons = document.getElementsByClassName("btn");

// reset scoreboards, scorecount and timer 
// resetTimer invokes timer start through setInterval counter

function resetScores() {
    bgHome.style.boxShadow = "none"
    bgGuest.style.boxShadow = "none"
    home = 0
    guest = 0
    scoreHome.textContent = home
    scoreGuest.textContent = guest
}

function resetTimer() {
    resetScores()
    resetButtons()
    counter = setInterval(startTimer, 1000)
    time = 11
}

function startTimer() {
    if (time <= 0) {
        clearInterval(counter)
        cdTime.textContent = "00"
        checkScore()
        disableButtons()
        return
    }  
    time--
    cdTime.textContent = time
}

// prevent buttons (and score) to continue updating past countdown finish

function disableButtons() {
    for (const button of buttons) {
        button.disabled = true;
    }
}

function resetButtons(){
    for (const button of buttons) {
        button.disabled = false;
    }
}

// compares both teams scores and highlights the team in the lead.

function checkScore() {
    if (time <= 0) {
        if (home > guest) {
            bgHome.style.boxShadow = "0px 0px 40px green"
            bgGuest.style.boxShadow = "none"
        } else if (guest > home) {
            bgGuest.style.boxShadow = "0px 0px 40px green"
            bgHome.style.boxShadow = "none"
        } else {
            bgHome.style.boxShadow = "0px 0px 40px orange"
            bgGuest.style.boxShadow = "0px 0px 40px orange"
        }
    } else {
        if (home > guest) {
            bgHome.style.boxShadow = "0px 0px 20px yellow"
            bgGuest.style.boxShadow = "none"
        } else if (guest > home) {
            bgGuest.style.boxShadow = "0px 0px 20px yellow"
            bgHome.style.boxShadow = "none"
        } else {
            bgHome.style.boxShadow = "none"
            bgGuest.style.boxShadow = "none"
        }
    }
}

// buttons to add to the score count

function homeAdd1() {
    home += 1
    scoreHome.textContent = home
    checkScore()
}

function homeAdd2() {
    home += 2
    scoreHome.textContent = home
    checkScore()
}

function homeAdd3() {
    home += 3
    scoreHome.textContent = home
    checkScore()
}

function guestAdd1() {
    guest += 1
    scoreGuest.textContent = guest
    checkScore()
}

function guestAdd2() {
    guest += 2
    scoreGuest.textContent = guest
    checkScore()
}

function guestAdd3() {
    guest += 3
    scoreGuest.textContent = guest
    checkScore()
}
// array of words
let words = [ "Lorem", "ipsum", "dolor", "sit", "amet", "consecr", "adipisg", "elit", "Beatae", "volupum", "natus", "tempos", "consequr", "explicabo", "quae", "perfers", "facilis", "autem", "modi", "ratione", "saepe", "possimus", "tenetur", "unde", "cumque", "sequi", "blands", "suscipit", "error", "excturi"];

// setting levels 
let lvls = {
    "Easy": 6,
    "Normal":4,
    "Hard":2
};

// default level
let  defaultLevelName ="Easy";
let defaultLevelSeconds = lvls[defaultLevelName];

// catch selectors 
let levelNameSpan = document.querySelector(".message .lvl");
let secondsSpan = document.querySelector(".message .seconds");
let startBtn = document.querySelector(".start");
let theWord = document.querySelector(".the-word");
let input = document.querySelector(".input");
let upcomingWords = document.querySelector(".upcoming-words");
let timeLeftSpan = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotel = document.querySelector(".score .totel");


// setting level name + seconds + score 

levelNameSpan.innerHTML = defaultLevelName;
secondsSpan.innerHTML = defaultLevelSeconds;
timeLeftSpan.innerHTML = defaultLevelSeconds;
scoreTotel.innerHTML = words.length;

// disable paste event 
input.onpaste = function () {
    return false
}
// start game 
startBtn.onclick = function () {
    this.remove();
    input.focus();

    // generat word function
    generatWord()

}

function generatWord() {
    // get random word from array 
    let randomWord = words[Math.floor(Math.random() * words.length )];
    // get words index 
    let index = words.indexOf(randomWord);
    // remove from Array
    words.splice(index, 1);
    // show the random word 
    theWord.innerHTML = randomWord;
    // empty upcoming Words
    upcomingWords.innerHTML = "";
    // generat word
    for (i = 0; i< words.length; i++) {
        // create div element 
        let div = document.createElement("div");
        let txt = document.createTextNode(words[i]);
        div.appendChild(txt);
        upcomingWords.appendChild(div);
    }
    // staer play function
    startPlay()
}
function startPlay() {
    timeLeftSpan.innerHTML = defaultLevelSeconds;
    let startTime = setInterval(() => {
        timeLeftSpan.innerHTML--;
        if(timeLeftSpan.innerHTML === "0" ){
            // stop timer 
            clearInterval(startTime);
            // compar words
            if (theWord.innerHTML.toLowerCase() === input.value.toLowerCase()){
                // empty input field 
                input.value = "";
                // increase score 
                scoreGot.innerHTML++;
                if(words.length > 0 ) {
                    generatWord()
                }else{
                    window.alert("Congratz ;)");
                    setTimeout(function(){location.reload()},0);
                }
            }else {
                alert("Game Over :(")
                setTimeout(function(){location.reload()},0);
                // let span = document.createElement("span");
                // span.className = "bad";
                // let spanText = document.createTextNode("Game Over :(")
                // span.appendChild(spanText);
                // finish.appendChild(span)
            }
        }
        
    }, 1000);
}

let full = document.querySelector(".full");
let btnBox = document.querySelector(".btn-box");
let btn = document.querySelectorAll(".btn-box .btn");
let reload = document.querySelector(".relod")

window.onload = function () {
    full.classList.add("active");
    btnBox.classList.add("active");
}

btn.forEach(item => {
    item.addEventListener("click", (e) => {
        
        full.classList.remove("active");
        
        btnBox.classList.remove("active");
        
        btnBox.style.left = "101%"
        
        reload.classList.add("active");
        

        let click = e.target.innerHTML;

        defaultLevelName = click;

        defaultLevelSeconds = lvls[click];

        levelNameSpan.innerHTML = click;

        secondsSpan.innerHTML = defaultLevelSeconds;

        timeLeftSpan.innerHTML = defaultLevelSeconds;
    })
    }
);
reload.onclick = function() {
    window.location.reload();
}
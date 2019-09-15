const animals = document.querySelectorAll('.animal');
const scoreBoard = document.querySelector('.score');
const bugHits = document.querySelectorAll('img');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);
const game = document.querySelector('game');

let lastBug;
let score = 0;
let timeleft = 10;
let movingBug;

function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    timeClock();
}

function timeClock() {
    var timeleft = 20;
    let movingBug = setInterval (moveItNow, 500);

    var downloadTimer = setInterval(function(){
    document.getElementById("countdown").innerHTML = timeleft;
    timeleft -= 1;
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "Finished"
        setInterval (moveItNow, 500)
        }
    }, 1000);
}
    
function randLocale(animals) {
    const idx = Math.floor(Math.random() * animals.length);
    const bug = animals[idx];
    if (bug === lastBug) {
        return randLocale(animals);
    }
    lastBug = bug
    return bug;
}

function moveItNow() {
    const bug = randLocale(animals);
    var rect = bug.getBoundingClientRect();

    let posX = rect.bottom;
    let posX2 = (Math.round(Math.random() * (screen.width - rect.width)) + 100);

    let posY = rect.left;
    let posY2 = Math.round(Math.random() * (screen.height - rect.height));

    let id = setInterval(frame, 10);
    function frame() {
        if (posX === posX2) {
            clearInterval(id);
            posX = posX2;
        } else if (posX < posX2 && posY < posY2) {
            posX++;
            posY++;
            bug.style.left = posX + 'px';
            bug.style.bottom = posY + 'px';
            return posX;
            return posY;
        } else if (posX > posX2 && posY > posY2) {
            posX--;
            posY--;
            bug.style.left = posX + 'px';
            bug.style.bottom = posY + 'px';
            return posX;
            return posY;
        } else if (posX < posX2 && posY > posY2) {
            posX++;
            posY--;
            bug.style.left = posX + 'px';
            bug.style.bottom = posY + 'px';
            return posX;
            return posY;
        } else if (posX > posX2 && posY < posY2) {
            posX--;
            posY++;
            bug.style.left = posX + 'px';
            bug.style.bottom = posY + 'px';
            return posX;
            return posY;
        } 
    }

    function bonk(e) {
        if(!e.isTrusted) return;
        console.log(e);
        score ++;
        scoreBoard.textContent = score;
        // e.stopPropagation();
    }

    function points(e) {
        if(!e.isTrusted) return;
        console.log(e);
        score ++;
        scoreBoard.textContent = score;
        // e.stopPropagation();
    }

    function highlightLink() {
        const linkCoords = this.getBoundingClientRect();
        console.log(linkCoords);
        const coords = {
            width: linkCoords.width,
            height: linkCoords.height,
            top: linkCoords.top + window.scrollY,
            left: linkCoords.left + window.scrollX
        }
        highlight.style.width = `${coords.width}px`;
        highlight.style.height = `${coords.height}px`;
        highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
    }
    
    bugHits.forEach(a => a.addEventListener('mouseenter', highlightLink));
        
    bugHits.forEach(bugHits => bugHits.addEventListener('mouseenter', points, {
        // capture: true
    }));
}

const animals = document.querySelectorAll('.animal');
const scoreBoard = document.querySelector('.score');
const bugHits = document.querySelectorAll('img');

let lastBug;
let timeUp = false;
let score = 0;

function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    if (timeUp === false) {
        setInterval (moveItSmooth, 500);
        timeUp = true;
    } else if (timeUp === true) {
            setInterval (moveItSmooth, 0);
        }
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

function moveItSmooth() {
    const bug = randLocale(animals);
    var rect = bug.getBoundingClientRect();

    let posX = rect.top;
    let posX2 = (Math.round(Math.random() * (screen.width - rect.width)) + 150);
    //tried screen.width;
    //tried window.innerWidth
    //tried window.width

    let posY = rect.left;
    let posY2 = Math.round(Math.random() * (window.innerHeight - rect.height));

    let id = setInterval(frame, 1);
    function frame() {
        if (posX === posX2) {
            clearInterval(id);
            posX = posX2;
        } else if (posX < posX2 && posY < posY2) {
            posX++;
            posY++;
            bug.style.top = posX + 'px';
            bug.style.left = posY + 'px';
            return posX;
            return posY;
        } else if (posX > posX2 && posY > posY2) {
            posX--;
            posY--;
            bug.style.top = posX + 'px';
            bug.style.left = posY + 'px';
            return posX;
            return posY;
        } else if (posX < posX2 && posY > posY2) {
            posX++;
            posY--;
            bug.style.top = posX + 'px';
            bug.style.left = posY + 'px';
            return posX;
            return posY;
        } else if (posX > posX2 && posY < posY2) {
            posX--;
            posY++;
            bug.style.top = posX + 'px';
            bug.style.left = posY + 'px';
            return posX;
            return posY;
        } 
    }

    function bonk(e) {
        if(!e.isTrusted) return;
        console.log(e);
        score ++;
        // this.classList.remove('up');
        scoreBoard.textContent = score;
    }
    
    bugHits.forEach(bugHits => bugHits.addEventListener('click', bonk));
    


}
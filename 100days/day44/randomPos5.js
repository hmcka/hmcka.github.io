let pos = 0;
let speed = 250;
let str = document.getElementById('str').innerText;
let lastBug;

document.getElementById('str').innerText = '';
const animals = document.querySelectorAll('.animal');
const bugHits = document.querySelectorAll('img');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

function type() {
    if(pos < str.length) {
        document.getElementById('str').innerText += str.charAt(pos);
        pos++;
        setTimeout(type, speed);
    }
}

setTimeout(type, speed);

setInterval (moveItNow, 500);
    
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

}
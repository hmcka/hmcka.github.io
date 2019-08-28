const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 400;

function shadow(e) {
    const width = hero.offsetWidth;
    const height = hero.offsetHeight;
    let {offsetX: x, offsetY: y} = e;

    if(this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xWalk = Math.round((x/width * walk) - (walk/2));
    const yWalk = Math.round((y/width * walk) - (walk/2));

    text.style.textShadow = `
        ${xWalk}px ${yWalk - 50}px 0 green,
        ${xWalk * -1}px ${yWalk + 50}px 0 greenyellow,
        ${yWalk * -1}px ${xWalk * -1}px 0 goldenrod,
        ${yWalk * -1}px ${xWalk}px 0 salmon
    `;
}

hero.addEventListener('mousemove', shadow)
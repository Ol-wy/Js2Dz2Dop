let btn = document.querySelector('.start');
let back = document.querySelector('.Background');

function getRandomColor() {
    let letters = "0123456789ABSDEF"
    let color = '#'
    for(let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

btn.addEventListener('click', ()=>{
    const run = randomColor = setInterval(()=>{
        back.style.backgroundColor = getRandomColor();
    },1000)
    randomColor()
})
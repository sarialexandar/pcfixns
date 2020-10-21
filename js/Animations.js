function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

document.querySelectorAll('.rotating-img').forEach(item => {
    item.addEventListener('click', event => {
        item.style.transform = "rotate(" + getRandomInteger(0, 360) + "deg)";
    })
})

billboard = document.getElementById('billboard');

startColor = {r: 235,
              g: 64,
              b:  52};

endColor   = {r: 63,
              g: 63, 
              b: 63};


function lerp(a,b,u) {
    return (1-u) * a + u * b;
};

function changeColors(element, property, start, end, duration) {
    let interval = 10;
    let steps = duration/interval;
    let step_u = 1.0/steps;
    let u = 0.0;
    let theInterval = setInterval(function(){
        if (u >= 1.0){ clearInterval(theInterval) }
        let r = parseInt(lerp(start.r, end.r, u));
        let g = parseInt(lerp(start.g, end.g, u));
        let b = parseInt(lerp(start.b, end.b, u));
        let colorname = 'rgb('+r+','+g+','+b+')';
        billboard.style.setProperty(property, colorname);
        u += step_u;
    }, interval);
};


billboard.addEventListener('mouseover', event => {
    setTimeout(function(){
        changeColors(billboard,'background-color',startColor,endColor,3000);
    },2000);  
})

let dots = [];
for (let i = 0; i < 10; i++) {
    let div = document.createElement('div');
    div.className = 'trail';
    document.body.appendChild(div);
    dots.push(div);
}

let current = 0;

window.addEventListener('mousemove', function(e){
    let dot = dots[current];
    dot.style.left = (event.pageX - 5) + "px";
    dot.style.top = (event.pageY - 5) + "px";
    current = (current + 1) % dots.length;
})
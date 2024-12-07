function cambiarColorNegro(event) {
    event.target.style.backgroundColor = 'black';
}

document.getElementById("blue").addEventListener("click", cambiarColorNegro);
document.getElementById("red").addEventListener("click", cambiarColorNegro);
document.getElementById("green").addEventListener("click", cambiarColorNegro);
document.getElementById("yellow").addEventListener("click", cambiarColorNegro);

let colorActual = 'white';

document.addEventListener('keydown', function (event) {
    const keyDiv = document.getElementById("key");

    if (event.key === 'a') {
        colorActual = 'pink'; // Rosado
    } else if (event.key === 's') {
        colorActual = 'orange'; // Naranjo
    } else if (event.key === 'd') {
        colorActual = 'skyblue'; // Celeste
    }

    if (event.key === 'a' || event.key === 's' || event.key === 'd') {
        keyDiv.style.backgroundColor = colorActual;
    }

    if (event.key === 'q' || event.key === 'w' || event.key === 'e') {
        const newDiv = document.createElement("div");
        newDiv.className = "new-box";

        if (event.key === 'q') {
            newDiv.style.backgroundColor = 'purple';
        } else if (event.key === 'w') {
            newDiv.style.backgroundColor = 'gray';
        } else if (event.key === 'e') {
            newDiv.style.backgroundColor = 'brown'; 
        }

        document.body.appendChild(newDiv);
    }
});

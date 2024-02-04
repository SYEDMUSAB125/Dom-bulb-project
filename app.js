let bulb = document.querySelector("img")
let btn = document.querySelector("button")
btn.addEventListener("click", toggle);

function toggle() {
    if (bulb.src.match("on")) {
        bulb.src = "off.png"
        btn.innerHTML = "ON"
        btn.style.backgroundColor = "thistle"
        btn.style.color = "black"
    } else {
        bulb.src = "on.jpg"
        btn.textContent = "OFF"
        btn.style.backgroundColor = "lightgreen"
        btn.style.color = "white"
    }
}


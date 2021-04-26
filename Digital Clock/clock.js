function timer() {
    let a = new Date();
    let b = a.toLocaleTimeString();
    document.getElementsByTagName("h2")[0].innerHTML = b;
}

let time = setInterval (timer, 1000);

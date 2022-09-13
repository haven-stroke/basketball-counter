let point = 0;
let points = 0;
let counter = document.getElementById("home-brd");
let gCounter = document.getElementById("guest-brd");

function add1point() {
    point += 1
    counter.textContent = point
}

function add2point() {
    point += 2
    counter.textContent = point
}

function add3point() {
    point += 3
    counter.textContent = point
}

function add1Point() {
    points += 1
   gCounter.textContent = points
}

function add2Point() {
    points += 2
    gCounter.textContent = points
}

function add3Point() {
    points += 3
    gCounter.textContent = points
}; function restart() {
    point = 0
    points = 0
    counter.textContent = 0
    gCounter.textContent = 0
};




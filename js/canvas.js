// Skrypt odpowiadający za obsługę canvasu


// Główna klasa, która reprezentuje rzucaną piłkę
var ball = {
    xStart: 50,
    yStart: 350,
    v0: 60,
    alpha: 45,
    g: 9.81,
    getActualX: function(time) {
        var radians = this.alpha * (Math.PI / 180);
        var vOX = this.v0 * Math.cos(radians);
        return vOX * time + this.xStart;
    },
    getActualY: function(time) {
        var radians = this.alpha * (Math.PI / 180);
        var vOY = this.v0 * Math.sin(radians);
        return this.yStart - (vOY * time - this.g / 2 * time * time);
    }

}

//Funkcja rysująca wykres na canvasie
function draw() {
    drawGrid();
    drawAxes();
}

// Funckja rysująca rzut na wykresie
function drawThrow() {

    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    draw();

    if (!validate()) {
        return;
    }
    playSound();
    ball.alpha = document.getElementById("angle").value;
    ball.v0 = document.getElementById("velocity").value;
    ball.yStart = 350 - document.getElementById("height").value;


    ctx.beginPath();
    var time = 0;
    while (true) {

        var tempX = ball.getActualX(time);
        var tempY = ball.getActualY(time);
        if ((time != 0) && (tempY > 350)) break;
        ctx.moveTo(tempX, tempY);
        ctx.arc(tempX, tempY, 5, 0, 2 * Math.PI);
        time++;
    }

    ctx.fill();
}

// Funkcja sprawdzająca poprawność danych od użytkownika
function validate() {

    if (isNaN(document.getElementById("angle").value)) {
        alert("Podaj poprawną liczbę dla kąta");
        return false;
    }
    if (isNaN(document.getElementById("velocity").value)) {
        alert("Podaj poprawną liczbę dla prędkości");
        return false;
    }
    if (isNaN(document.getElementById("height").value)) {
        alert("Podaj poprawną liczbę dla wysokości");
        return false;
    }
    if ((document.getElementById("angle").value > 91) || (document.getElementById("angle").value < 0)) {
        alert("Wartość kąta może być pomiędzy 0 - 90");
        return false;
    }
    if ((document.getElementById("velocity").value > 60) || (document.getElementById("velocity").value < 0)) {
        alert("Wartość prędkości może być pomiędzy 0 - 60");
        return false;
    }
    if ((document.getElementById("height").value > 200) || (document.getElementById("height").value < 0)) {
        alert("Wysokość początkowa może być pomiędzy 0 - 200");
        return false;
    }

    return true;
}



function drawGrid() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.strokeStyle = "#ddd";

    for (var x = 0; x < 600; x += 10) {
        context.moveTo(x, 0);
        context.lineTo(x, 400);
    }
    for (var y = 0; y < 400; y += 10) {
        context.moveTo(0, y);
        context.lineTo(600, y);
    }

    context.stroke();
}



function drawAxes() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    context.beginPath();
    context.moveTo(50, 350);
    context.lineTo(550, 350);

    context.moveTo(545, 330);
    context.lineTo(550, 350);
    context.lineTo(545, 370);

    context.moveTo(50, 350);
    context.lineTo(50, 20);

    context.moveTo(55, 30);
    context.lineTo(50, 20);
    context.lineTo(45, 30);

    context.font = "10px Arial";
    var number = 20;
    for (var x = 70; x <= 530; x += 20) {
        context.moveTo(x, 350);
        context.lineTo(x, 345);
        context.lineTo(x, 355);
        context.fillText(number, x - 7, 370);
        number += 20;
    }
    number = 20;

    for (var y = 20; y <= 330; y += 20) {
        context.moveTo(50, 350 - y);
        context.lineTo(45, 350 - y);
        context.lineTo(55, 350 - y);
        context.fillText(number, 20, 350 - y + 5);
        number += 20;
    }

    context.strokeStyle = "#00A";
    context.stroke();
}

function playSound() {
    var audio = document.getElementById("audio");
    audio.play();
}
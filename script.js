let fields = [];
let currentShape = 'cross';
let gameOver = false;


// Fragt ab welcher Spieler dran ist, wechselt dementsprechend Kreuz und Kreis und fragt eine Abbruchbedingung ab. //
function fillShape(id) {
    if (!fields[id] && !gameOver) {

        if (currentShape == 'cross') {
            currentShape = 'circle';
            document.getElementById('player-2').classList.remove('player-inactive');
            document.getElementById('player-1').classList.add('player-inactive');
        } else {
            currentShape = 'cross';
            document.getElementById('player-1').classList.remove('player-inactive');
            document.getElementById('player-2').classList.add('player-inactive');
        }

        fields[id] = currentShape;
        draw();
        checkForWin();
    }
}


function draw() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'circle') {
            document.getElementById('circle-' + i).classList.remove('d-none');
        }

        if (fields[i] == 'cross') {
            document.getElementById('cross-' + i).classList.remove('d-none');
        }
    }
}

// Hier werden alle möglichen Kombinationen abgefragt um ein Spiel zu gewinnen. //
let winner = 0;

function checkForWin() {

    winOption1();
    winOption2();
    winOption3();
    winOption4();
    winOption5();
    winOption6();
    winOption7();
    winOption8();
    noWinner();

    if (winner != 0) {
        gameOver = true;

        setTimeout(function () {
            document.getElementById('game-over').classList.remove('d-none');
            document.getElementById('restart-button').classList.remove('d-none');
        }, 1500);
    }
}


function winOption1() {
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0]
        document.getElementById('line-0').style.transform = 'scaleX(1)';
    }
}


function winOption2() {
    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[4]
        document.getElementById('line-1').style.transform = 'scaleX(1)';
    }
}


function winOption3() {
    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[7]
        document.getElementById('line-2').style.transform = 'scaleX(1)';
    }
}


function winOption4() {
    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0]
        document.getElementById('line-4').style.transform = 'rotate(90deg) scaleX(1)';
    }
}


function winOption5() {
    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1]
        document.getElementById('line-3').style.transform = 'rotate(90deg) scaleX(1)';
    }
}


function winOption6() {
    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2]
        document.getElementById('line-5').style.transform = 'rotate(90deg) scaleX(1)';
    }
}


function winOption7() {
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0]
        document.getElementById('line-6').style.transform = 'rotate(45deg) scaleX(1)';
    }
}


function winOption8() {
    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2]
        document.getElementById('line-7').style.transform = 'rotate(135deg) scaleX(1)';
    }
}


// Abbruchbedingung, wenn Unentschieden ist //
function noWinner() {
    if (fields[0] && fields[1] && fields[2] && fields[3] && fields[4] && fields[5] && fields[6] && fields[7] && fields[8] && winner === 0) {
      gameOver = true;
  
      setTimeout(function () {
        document.getElementById('game-over').classList.remove('d-none');
        document.getElementById('restart-button').classList.remove('d-none');
      }, 1500);
    }
  }
  



// Entfernt das Game Over Img, die Kreise und Kreuze, die Linien und den Button //
function restart() {
    gameOver = false;
    fields = [];
    document.getElementById('game-over').classList.add('d-none');
    document.getElementById('restart-button').classList.add('d-none');

    for (let i = 0; i < 9; i++) {
        document.getElementById('circle-' + i).classList.add('d-none');
        document.getElementById('cross-' + i).classList.add('d-none');
    }

    for (let j = 0; j < 8; j++) {
        document.getElementById('line-' + j).style.transform = 'scaleX(0.0)';
    }

    winner = 0;
}
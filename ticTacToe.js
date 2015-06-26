console.log('hello');

// wait for the DOM to finish loading
window.addEventListener('DOMContentLoaded', function() {
  // all code goes here

var x = "x"
var o = "o"
var count = 0;
var o_win = 0;
var x_win = 0;



var s1;
var s2;
var s3;
var s4;
var s5;
var s6;
var s7;
var s8;
var s9;
var count = 0;
// Turns ---> 
// X's turn --> var count % 2 === 0
// O's turn --> var count % 2 !== 0


var sqr1Click = document.getElementById("sqr1")
var sqr2Click = document.getElementById("sqr2")
var sqr3Click = document.getElementById("sqr3")
var sqr4Click = document.getElementById("sqr4")
var sqr5Click = document.getElementById("sqr5")
var sqr6Click = document.getElementById("sqr6")
var sqr7Click = document.getElementById("sqr7")
var sqr8Click = document.getElementById("sqr8")
var sqr9Click = document.getElementById("sqr9")


sqr1Click.addEventListener("click", function(event) {
	console.log('works')
    if(count % 2 == 0) {
        event.preventDefault()
        document.getElementById("sqr1").innerText="X";
        s1 = "X";
        count++;
        checkVictory();
    }

    else if (count % 2 !== 0) {
        event.preventDefault()
        document.getElementById("sqr1").innerText="O";
        s1 = "O";
        count++;
        checkVictory();
	}
});

sqr2Click.addEventListener("click", function(event) {
	console.log('works')
    if(count % 2 == 0) {
        event.preventDefault()
        document.getElementById("sqr2").innerText="X";
        s2 = "X";
        count++;
        checkVictory();
    }

    else if (count % 2 !== 0) {
        event.preventDefault()
        document.getElementById("sqr2").innerText="O";
        s2 = "O";
        count++;
        checkVictory();
	}
});

sqr3Click.addEventListener("click", function(event) {
	console.log('works')
    if(count % 2 == 0) {
        event.preventDefault()
        document.getElementById("sqr3").innerText="X";
        s3 = "X";
        count++;
        checkVictory();
    }

    else if (count % 2 !== 0) {
        event.preventDefault()
        document.getElementById("sqr3").innerText="O";
        s3 = "O";
        count++;
        checkVictory();
	}
});

sqr4Click.addEventListener("click", function(event) {
	console.log('works')
    if(count % 2 == 0) {
        event.preventDefault()
        document.getElementById("sqr4").innerText="X";
        s4 = "X";
        count++;
        checkVictory();
    }

    else if (count % 2 !== 0) {
        event.preventDefault()
        document.getElementById("sqr4").innerText="O";
        s4 = "O";
        count++;
        checkVictory();
	}
});

sqr5Click.addEventListener("click", function(event) {
	console.log('works')
    if(count % 2 == 0) {
        event.preventDefault()
        document.getElementById("sqr5").innerText="X";
        s5 = "X";
        count++;
        checkVictory();
    }

    else if (count % 2 !== 0) {
        event.preventDefault()
        document.getElementById("sqr5").innerText="O";
        s5 = "O";
        count++;
        checkVictory();
	}
});

sqr6Click.addEventListener("click", function(event) {
	console.log('works')
    if(count % 2 == 0) {
        event.preventDefault()
        document.getElementById("sqr6").innerText="X";
        s6 = "X";
        count++;
        checkVictory();
    }

    else if (count % 2 !== 0) {
        event.preventDefault()
        document.getElementById("sqr6").innerText="O";
        s6 = "O";
        count++;
        checkVictory();
	}
});

sqr7Click.addEventListener("click", function(event) {
	console.log('works')
    if(count % 2 == 0) {
        event.preventDefault()
        document.getElementById("sqr7").innerText="X";
        s7 = "X";
        count++;
        checkVictory();
    }

    else if (count % 2 !== 0) {
        event.preventDefault()
        document.getElementById("sqr7").innerText="O";        
        s7 = "O";
        count++;
        checkVictory();
	}
});

sqr8Click.addEventListener("click", function(event) {
	console.log('works')
    if(count % 2 == 0) {
        event.preventDefault()
        document.getElementById("sqr8").innerText="X";
        s8 = "X";
        count++;
        checkVictory();
    }

    else if (count % 2 !== 0) {
        event.preventDefault()
        document.getElementById("sqr8").innerText="O";
        s8 = "O";
        count++;
        checkVictory();
	}
});

sqr9Click.addEventListener("click", function(event) {
	console.log('works')
    if(count % 2 == 0) {
        event.preventDefault()
        document.getElementById("sqr9").innerText="X";
        s9 = "X";
        count++;
        checkVictory();
    }

    else if (count % 2 !== 0) {
        event.preventDefault()
        document.getElementById("sqr9").innerText="O";        
        s9 = "O";
        count++;
        checkVictory();
	}
});



function checkVictory() {
    if(s1 == "X" && s2 == "X" && s3 == "X") {
        victory();
    }
    if(s1 == "X" && s5 == "X" && s9 == "X") {
        victory();
    }
    if(s3 == "X" && s5 == "X" && s7 == "X") {
        victory();
    }
    if(s4 == "X" && s5 == "X" && s6 == "X") {
        victory();
    }
    if(s7 == "X" && s8 == "X" && s9 == "X") {
        victory();
    }
    if(s1 == "X" && s4 == "X" && s7 == "X") {
        victory();
    }
    if(s2 == "X" && s5 == "X" && s8 == "X") {
        victory();
    }
    if(s3 == "X" && s6 == "X" && s9 == "X") {
        victory();
    }
    if(s1 == "O" && s2 == "O" && s3 == "O") {
        defeat();
    }
    if(s1 == "O" && s5 == "O" && s9 == "O") {
        victory();
    }
    if(s3 == "O" && s5 == "O" && s7 == "O") {
        defeat();
    }
    if(s4 == "O" && s5 == "O" && s6 == "O") {
        defeat();
    }
    if(s7 == "O" && s8 == "O" && s9 == "O") {
        defeat();
    }
    if(s1 == "O" && s4 == "O" && s7 == "O") {
        defeat();
    }
    if(s2 == "O" && s5 == "O" && s8 == "O") {
        defeat();
    }
    if(s3 == "O" && s6 == "O" && s9 == "O") {
        defeat();
    }
    if(count == 9) {
        draw();
    }
}

function draw() {
    alert('It is a draw!');
    reset();
}
function victory() {
    alert('You win!');
    reset();
}
function defeat() {
    alert("You lost! Better luck next time!");
    reset();
}

// function reset() {
//                 f1 = 0;
//                 f2 = 0;
//                 f3 = 0;
//                 f4 = 0;
//                 f5 = 0;
//                 f6 = 0;
//                 f7 = 0;
//                 f8 = 0;
//                 f9 = 0;
//                 $('#field1').css('background-image', 'none');
//                 $('#field2').css('background-image', 'none');
//                 $('#field3').css('background-image', 'none');
//                 $('#field4').css('background-image', 'none');
//                 $('#field5').css('background-image', 'none');
//                 $('#field6').css('background-image', 'none');
//                 $('#field7').css('background-image', 'none');
//                 $('#field8').css('background-image', 'none');
//                 $('#field9').css('background-image', 'none');
//                 count = 0;



});

//notes


          
console.log('hello');

// wait for the DOM to finish loading
window.addEventListener('DOMContentLoaded', function() {
  // all code goes here

var x = "x"
var o = "o"

var s1 = 0;
var s2 = 0;
var s3 = 0;
var s4 = 0;
var s5 = 0;
var s6 = 0;
var s7 = 0;
var s8 = 0;
var s9 = 0;
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
    if (s1 != "0") {
        alert("This box already has a move, please select a different one.");

    }
    else {
        if (count % 2 == 0) {
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
    }
});

sqr2Click.addEventListener("click", function(event) {
	console.log('works')
    if (s2 != "0") {
        alert("This box already has a move, please select a different one.");
    }
    else { 
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
    }
});

sqr3Click.addEventListener("click", function(event) {
	console.log('works')
    if (s3 != "0") {
        alert("This box already has a move, please select a different one.");
    }
    else { 
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
    }   
});

sqr4Click.addEventListener("click", function(event) {
	console.log('works')
    if (s4 != "0") {
        alert("This box already has a move, please select a different one.");
    }
    else { 
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
    } 
});

sqr5Click.addEventListener("click", function(event) {
	console.log('works')
    if (s5 != "0") {
        alert("This box already has a move, please select a different one.");
    }
    else { 
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
    }
});

sqr6Click.addEventListener("click", function(event) {
	console.log('works')
    if (s6 != "0") {
        alert("This box already has a move, please select a different one.");
    }
    else { 
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
    }
});

sqr7Click.addEventListener("click", function(event) {
	console.log('works')
    if (s7 != "0") {
        alert("This box already has a move, please select a different one.");
    }
    else { 
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
    }
});

sqr8Click.addEventListener("click", function(event) {
	console.log('works')
    if (s8 != "0") {
        alert("This box already has a move, please select a different one.");
    }
    else { 
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
    }
});

sqr9Click.addEventListener("click", function(event) {
	console.log('works')
    if (s9 != "0") {
        alert("This box already has a move, please select a different one.");
    }
    else { 
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
    }    
});



function checkVictory() {
    if(s1 == "X" && s2 == "X" && s3 == "X") {
        Xvictory();
    }
    if(s1 == "X" && s5 == "X" && s9 == "X") {
        Xvictory();
    }
    if(s3 == "X" && s5 == "X" && s7 == "X") {
        Xvictory();
    }
    if(s4 == "X" && s5 == "X" && s6 == "X") {
        Xvictory();
    }
    if(s7 == "X" && s8 == "X" && s9 == "X") {
        Xvictory();
    }
    if(s1 == "X" && s4 == "X" && s7 == "X") {
        Xvictory();
    }
    if(s2 == "X" && s5 == "X" && s8 == "X") {
        Xvictory();
    }
    if(s3 == "X" && s6 == "X" && s9 == "X") {
        Xvictory();
    }
    if(s1 == "O" && s2 == "O" && s3 == "O") {
        Ovictory();
    }
    if(s1 == "O" && s5 == "O" && s9 == "O") {
        Ovictory();
    }
    if(s3 == "O" && s5 == "O" && s7 == "O") {
        Ovictory();
    }
    if(s4 == "O" && s5 == "O" && s6 == "O") {
        Ovictory();
    }
    if(s7 == "O" && s8 == "O" && s9 == "O") {
        Ovictory();
    }
    if(s1 == "O" && s4 == "O" && s7 == "O") {
        Ovictory();
    }
    if(s2 == "O" && s5 == "O" && s8 == "O") {
        Ovictory();
    }
    if(s3 == "O" && s6 == "O" && s9 == "O") {
        Ovictory();
    }
    if(count == 9) {
        draw();
    }
}

function draw() {
    alert('It is a draw!');
}

function Xvictory() {
    alert('X wins!');
}

function Ovictory() {
    alert("O wins!");
}


var Refresh = document.getElementById("NewGame")
Refresh.addEventListener("click", function(event) {
    reset ()
});    

function reset() {
                s1 = 0;
                s2 = 0;
                s3 = 0;
                s4 = 0;
                s5 = 0;
                s6 = 0;
                s7 = 0;
                s8 = 0;
                s9 = 0;
                document.getElementById("sqr1").innerText=""
                document.getElementById("sqr2").innerText=""
                document.getElementById("sqr3").innerText=""
                document.getElementById("sqr4").innerText=""
                document.getElementById("sqr5").innerText=""
                document.getElementById("sqr6").innerText=""
                document.getElementById("sqr7").innerText=""
                document.getElementById("sqr8").innerText=""
                document.getElementById("sqr9").innerText=""
                count = 0;

}



});



          
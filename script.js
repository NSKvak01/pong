// Size of the game area (in px)
const GAME_AREA_WIDTH = 700;
const GAME_AREA_HEIGHT = 500;

// Size of the paddles (in px)
const PADDLE_HEIGHT = 100;
const PADDLE_WIDTH = 20;

// Size of the ball (in px)
const BALL_SIZE = 20;
const  ball = document.querySelector('.ball');
ball.style.borderRadius = '12px';
ball.style.backgroundColor = 'purple';

// Get the computer paddle element
const computerPaddle = document.querySelector('.computer-paddle');
const leftPaddle = document.querySelector('.paddle player-paddle')

// Initial computer paddle y-position and y-velocity
let computerPaddleYPosition = 0;
let computerPaddleYVelocity = 1;

let leftPaddleYPosition = 0;
let leftPaddleYVelocity = 1;

let ballXPosition = 20;
let ballXVelocity = 1;
let ballYPosition = 0;
let ballYVelocity = 1;
// Update the pong world

// function update() {

//     // Update the computer paddle's position
//     computerPaddleYPosition = computerPaddleYPosition + computerPaddleYVelocity;

//     // If the computer paddle goes off the edge of the screen, bring it back
//     if (computerPaddleYPosition > GAME_AREA_HEIGHT-PADDLE_HEIGHT) {
//         computerPaddleYPosition = 0;
//     }

//     // Update ball's position   
//     ballXPosition = ballXPosition + ballXVelocity
//     ballYPosition = ballYPosition + ballYVelocity

//     if(ballYPosition>GAME_AREA_HEIGHT-BALL_SIZE){
//         ballYVelocity = ballYVelocity*(-1)
//     } else if (ballYPosition === 0){
//         ballYVelocity = ballYVelocity*(-1)
//     }

//     if (ballXPosition>GAME_AREA_WIDTH-PADDLE_WIDTH*2){
//         ballXVelocity = ballXVelocity*(-1)
//     } else if (ballXPosition < PADDLE_WIDTH){
//         ballXVelocity = ballXVelocity * (-1)
        
//     }
//     // Apply the y-position 
//     computerPaddle.style.top = `${computerPaddleYPosition}px`;
//     ball.style.left = `${ballXPosition}px`;
//     ball.style.top = `${ballYPosition}px`;
// }



// // Call the update() function everytime the browser is ready to re-render
// let upPressed = false;
// let downPressed = false;
// leftPaddle.addEventListener('keydown', keyDownHandler, false)
// leftPaddle.addEventListener('keyup',keyUpHandler, false)
// function keyDownHandler (e){
//     if (e.key =="Down" || e.key == "ArrowDown"){
//         downPressed = true;
//     } else if (e.key == 'Up' || e.key == "ArrowUp"){
//         upPressed = true
//     }
// }
// function keyUpHandler (e){
//     if (e.key =="Down" || e.key == "ArrowDown"){
//         downPressed = false;
//     } else if (e.key == 'Up' || e.key == "ArrowUp"){
//         upPressed = false
//     }
// }
// if (downPressed){
//     leftPaddleYPosition +=1
// } else if (upPressed){
//     leftPaddleYVelocity -=1
// }

function update() {

    // Update the computer paddle's position
    computerPaddleYPosition = ballYPosition-PADDLE_HEIGHT/2;

    // If the computer paddle goes off the edge of the screen, bring it back
    if (computerPaddleYPosition > GAME_AREA_HEIGHT-PADDLE_HEIGHT) {
        computerPaddleYPosition = GAME_AREA_HEIGHT-PADDLE_HEIGHT;
    } else if(computerPaddleYPosition<0){
        computerPaddleYPosition = 0
    }

    // Update ball's position   
    ballXPosition = ballXPosition + ballXVelocity
    ballYPosition = ballYPosition + ballYVelocity

    if(ballYPosition>GAME_AREA_HEIGHT-BALL_SIZE){
        ballYVelocity = ballYVelocity*(-1)
    } else if (ballYPosition === 0){
        ballYVelocity = ballYVelocity*(-1)
    }



    if (ballXPosition>GAME_AREA_WIDTH-PADDLE_WIDTH*2 && ballYPosition>computerPaddleYPosition && ballYPosition<computerPaddleYPosition+PADDLE_HEIGHT){
        ballXVelocity = ballXVelocity*(-1)
    } else if (ballXPosition <= PADDLE_WIDTH && ballYPosition>leftPaddleYPosition&& ballYPosition<leftPaddleYPosition+PADDLE_HEIGHT){
        ballXVelocity = ballXVelocity * (-1)
    }else if (ballXPosition>GAME_AREA_WIDTH-PADDLE_WIDTH*2 || ballXPosition <= PADDLE_WIDTH){
        ballXPosition = 20
        ballYPosition = 0
        ballXVelocity = 1;
        ballYVelocity = 1;
        ballXPosition = ballXPosition + ballXVelocity
        ballYPosition = ballYPosition + ballYVelocity

    }
    // Apply the y-position 
    computerPaddle.style.top = `${computerPaddleYPosition}px`;
    ball.style.left = `${ballXPosition}px`;
    ball.style.top = `${ballYPosition}px`;


document.addEventListener('keydown', function (e) {
    console.log(e.key)
    const arrow = e.key;
    if(arrow === 'ArrowDown'){
        leftPaddleYPosition +=leftPaddleYVelocity;
    } else if (arrow === 'ArrowUp'){
        leftPaddleYPosition +=leftPaddleYVelocity*(-1);
    }
})

document.addEventListener('keyup', function (e){
    leftPaddleYPosition = leftPaddleYPosition
})
}


function loop() {
    update();

    window.requestAnimationFrame(loop);
}
window.requestAnimationFrame(loop);
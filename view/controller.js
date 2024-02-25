
import * as model  from '../model/script.js';
import * as view from './script.js'

// ***** A dummy standin for the actual model *****
//  remember to replace with real model, once that has been designed  
const dummyModel = ["🔴", "🔵","🟡","🟡","🔵","🟢","🟢"];
let cannonBall = "🟡";
  
// *********************************
// *                               *
// *          THE VIEW             *
// *                               *
// *********************************

const visualBalls = {
  "🔴": "red-ball.png",
  "🔵": "blue-ball.png",
  "🟡": "yellow-ball.png",
  "🟢": "green-ball.png"
}

export function generateAndDisplayRandomBall() {
    const ball = model.randomBall();
    view.displayCannonBall(ball);
}

export function fireCannonBall(index) {
    const cannonBallImgSrc = document.querySelector("#cannon .ball img").src;
    const foundCannonBall = "🟡";
    if(cannonBallImgSrc === "red-ball.png") {
        foundCannonBall = "🔴";
    } else if(cannonBallImgSrc === "blue-ball.png") {
        foundCannonBall = "🔵";
    } else if(cannonBallImgSrc === "yellow-ball.png") {
        foundCannonBall = "🟡";
    } else if(cannonBallImgSrc === "green-ball.png") {
        foundCannonBall = "🟢";
    }
    view.insertNewBallAfter(index, foundCannonBall);
}

export function displayPage() {
    view.displayEntireChain(dummyModel)
    view.displayCannonBall(cannonBall);
}
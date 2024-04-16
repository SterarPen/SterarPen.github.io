const red = "/img/tic-tac-toe/cross.png";
const green = "/img/tic-tac-toe/circle.png";

const redQueue = [];
const greenQueue = [];

let currentPlayer = "🔴";

document.ready = ()=> {
   document.getElementById("player").innerText="🔴"; 
}



function cellClicked(id) {
    let cell = document.getElementById(id)
    if(cell.getAttribute("able") === "false") {
        return;
    }

    const para = document.createElement("img");


  if(currentPlayer === "🔴") {
    para.src = red;
    para.style.width = "100%";
    para.style.height = "100%";
    cell.appendChild(para);
    cell.setAttribute("able", "false");
      pushToQueue(redQueue, id);
      currentPlayer = "🟢";

  } else {
    para.src = green;
    para.style.width = "100%";
    para.style.height = "100%";
    cell.appendChild(para);
    cell.setAttribute("able", "false");
      pushToQueue(greenQueue, id);
      currentPlayer = "🔴";
  }
  document.getElementById("player").innerText=currentPlayer; 

  if(checkSuccess()) {
      alert(`${success} wins!`);
      for(let cell of document.getElementsByClassName("cell")) {
          cell.setAttribute("able", "false");
      }
      document.getElementById("winner").innerText=success;
      return;   
  }
}

function pushToQueue(queue, value) {
  if(queue.length < 3) {
    queue.push(value);
    return;
  } 
  document.getElementById(queue[0]).removeChild(document.getElementById(queue[0]).firstChild);
  document.getElementById(queue[0]).setAttribute("able", "true");
  queue.shift();
  queue.push(value);
}   

let success;
function checkSuccess() {
    console.log(redQueue, greenQueue);
    if(redQueue.length === 3) {
        let redQueue1 = redQueue.slice(0);
        console.log(redQueue1,redQueue1);
        if(Math.abs(redQueue1[0] - redQueue1[1]) == 1 && Math.abs(redQueue1[1] - redQueue1[2]) == 1) {
            success = '🔴';
            return true;
        }

        if(Math.abs(redQueue1[0] - redQueue1[1]) == 3 && Math.abs(redQueue1[1] - redQueue1[2]) == 3) {
            success = '🔴';
            return true;   
        }
        
        if(redQueue.includes(1) && redQueue.includes(5) && redQueue.includes(9)) {
            success = '🔴';
            return true; 
        }

        if(redQueue.includes(3) && redQueue.includes(5) && redQueue.includes(7)) {
            success = '🔴';
            return true; 
        }
    }

    if(greenQueue.length === 3) {
        let greenQueue1 = greenQueue.slice(0);
        console.log("greenQueue1", greenQueue1);
        if(Math.abs(greenQueue1[0] - greenQueue1[1]) == 1 && Math.abs(greenQueue1[1] - greenQueue1[2]) == 1) {
            success = '🟢';
            return true;
        }

        if(Math.abs(greenQueue1[0] - greenQueue1[1]) == 3 && Math.abs(greenQueue1[1] - greenQueue1[2]) == 3) {
            success = '🟢';
            return true;   
        }
        
        if(greenQueue.includes(1) && greenQueue.includes(5) && greenQueue.includes(9)) {
            success = '🟢';
            return true; 
        }

        if(greenQueue.includes(3) && greenQueue.includes(5) && greenQueue.includes(7)) {
            success = '🟢';
            return true; 
        }
    }

    return false;
}


function reset() {
    currentPlayer = "🔴";
    redQueue.length = 0;
    greenQueue.length = 0;
    for(let cell of document.getElementsByClassName("cell")) {
        if(cell.firstChild) {
            cell.removeChild(cell.firstChild);
        }
        cell.setAttribute("able", "true");
    }
    document.getElementById("player").innerText="🔴"; 
    document.getElementById("winner").innerText="";
}

const red = "🔴";
const green = "🟢";

const redQueue = [];
const greenQueue = [];

let currentPlayer = "🔴";


function cellClicked(id) {
  if(this.innerText === "") {
      this.innerText = currentPlayer;
  }

  if(currentPlayer === "🔴") {
      redQueue.push(id);
      currentPlayer = "🟢";
  } else {
      greenQueue.push(id); 
      currentPlayer = "🔴";
  }

  
  if(checkSuccess()) {
      alert(`${success} wins!`);
      return;   
  }

  alert(`${currentPlayer} turn`);
}

function pushToQueue(queue, value) {
  if(queue.length < 3) {
    queue.push(value);
    return;
  } 
  
  queue.shift();
  queue.push(value);
}   

let success;
function checkSuccess() {
    if(redQueue.length === 3) {
        if(Math.abs(redQueue[0] - redQueue[1]) === 1 && Math.abs(redQueue[1] - redQueue[2]) === 1) {
            success = 'red';
            return true;
        }

        if(Math.abs(redQueue[0] - redQueue[1]) === 3 && Math.abs(redQueue[1] - redQueue[2]) === 3) {
            success = 'red';
            return true;   
        }
        
        if(redQueue.includes(1) && redQueue.includes(5) && redQueue.includes(9)) {
            success = 'red';
            return true; 
        }

        if(redQueue.includes(3) && redQueue.includes(5) && redQueue.includes(7)) {
            success = 'red';
            return true; 
        }
    }

    if(greenQueue.length === 3) {

        if(Math.abs(greenQueue[0] - greenQueue[1]) === 1 && Math.abs(greenQueue[1] - greenQueue[2]) === 1) {
            success = 'green';
            return true;
        }

        if(Math.abs(greenQueue[0] - greenQueue[1]) === 3 && Math.abs(greenQueue[1] - greenQueue[2]) === 3) {
            success = 'green';
            return true;   
        }
        
        if(greenQueue.includes(1) && greenQueue.includes(5) && greenQueue.includes(9)) {
            success = 'green';
            return true; 
        }

        if(greenQueue.includes(3) && greenQueue.includes(5) && greenQueue.includes(7)) {
            success = 'green';
            return true; 
        }
    }

    return false;
}


// script.js
let timer;
let isRunning = false;
let timeLeft = 25 * 60; // 25 minutes in seconds

const timerDisplay = document.getElementById('timer');
const startStopButton = document.getElementById('startStopButton');
const resetButton = document.getElementById('resetButton');

// Function to start or stop the timer
function toggleTimer() {
    if (isRunning) {
        clearInterval(timer);
        startStopButton.textContent = 'Start';
    } else {
        timer = setInterval(updateTimer, 1000);
        startStopButton.textContent = 'Stop';
    }
    isRunning = !isRunning;
}

// Function to update the timer every second
function updateTimer() {
    if (timeLeft <= 0) {
        clearInterval(timer);
        alert("Time's up! Take a break.");
        startStopButton.textContent = 'Start';
        isRunning = false;
    } else {
        timeLeft--;
        displayTime();
    }
}

// Function to display the time in MM:SS format
function displayTime() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Function to reset the timer
function resetTimer() {
    clearInterval(timer);
    timeLeft = 25 * 60;
    displayTime();
    startStopButton.textContent = 'Start';
    isRunning = false;
}

// Event listeners for buttons
startStopButton.addEventListener('click', toggleTimer);
resetButton.addEventListener('click', resetTimer);

// Initialize the timer display
displayTime();


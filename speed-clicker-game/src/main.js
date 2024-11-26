import './style.css';

/* 
TODO: The leaderboard is stored in memory which means it gets 
reset whenever the user refreshes or closes their browser. Use
localStorage to make the data persist!
*/

// Store the leaderboard "in memory"
const leaderboard = [];
// We'll need this for our timer
let intervalId;

// DOM elements
const clickerBtn = document.querySelector('button#clicker');
const startBtn = document.querySelector('button#start');
const timerSpan = document.querySelector("span#timer");
const leaderboardList = document.querySelector("ul#leaderboard-list");

// Helpers
const updateLeaderboard = (leaderboard) => {
  // Empty out the list so we can fill it again
  leaderboardList.innerHTML = "";

  // Sort the given leaderboard in ascending order
  leaderboard.sort((a, b) => a - b);

  // create a <li> for each score
  leaderboard.forEach(score => {
    const li = document.createElement('li');
    li.textContent = score;
    leaderboardList.append(li);
  });
};

const handleClick = (e) => {
  clickerBtn.dataset.clicks++;
  clickerBtn.textContent = clickerBtn.dataset.clicks;
};

// on each tick of the timer...
const tick = () => {
  timerSpan.dataset.time--;
  timerSpan.textContent = timerSpan.dataset.time;

  // when the timer reaches 0...
  if (timerSpan.dataset.time === "0") {
    // turn off the timer (intervalId will be set when we start the timer)
    clearInterval(intervalId);

    // prevent clicking after the timer is done (we'll add the event listener when we start the game)
    clickerBtn.removeEventListener('click', handleClick);

    // store the result in memory
    leaderboard.push(clickerBtn.dataset.clicks);

    // update the leaderboard display
    updateLeaderboard(leaderboard);
  }
}

const restartGame = () => {
  // if the game is currently going, just return
  if (timerSpan.dataset.time !== "0") return;

  // reset the clicks to 0
  clickerBtn.dataset.clicks = 0;
  clickerBtn.textContent = clickerBtn.dataset.clicks;

  // reset the time to 5
  timerSpan.dataset.time = 5;
  timerSpan.textContent = timerSpan.dataset.time;

  // turn on clicks (we'll turn them off between rounds)
  clickerBtn.addEventListener('click', handleClick);

  // turn on the timer (save the intervalId so we can cancel it)
  intervalId = setInterval(tick, 1000);
}

// Set up the game each time the start button is clicked
startBtn.addEventListener('click', restartGame);


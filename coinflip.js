var randomNumber = 0;
var randomImageSource = "images/coin" + randomNumber + ".png";
var heads = 0;
var tails = 0;
var coinState = 0;
var consecutiveCounter = 1;
var streak = 0;

  document.querySelector("button").onclick = function coinflip() {
    randomNumber = Math.floor(Math.random() * 2 + 1);
    randomImageSource = "images/coin" + randomNumber + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

    if (randomNumber == 1) {

        if (coinState == 1) {
          consecutiveCounter++;
        } else {
          consecutiveCounter = 1;
        }



        coinState = 1;

        if (consecutiveCounter == 1) {
          document.querySelector("h1").innerHTML = "Heads";
        } else if (consecutiveCounter == 2) {
          document.querySelector("h1").innerHTML = "Heads again!";
        } else if (consecutiveCounter > 2) {
          document.querySelector("h1").innerHTML = "Heads " + consecutiveCounter + " times in a row!";
        }
      heads++;
      document.getElementById('heads').innerHTML = heads;

      if (consecutiveCounter > streak) {
        streak = consecutiveCounter;
        document.getElementById('streak').innerHTML = streak;
      }

    } else {

      if (coinState == 2) {
        consecutiveCounter++;
      } else {
        consecutiveCounter = 1;
      }

      if (consecutiveCounter > streak) {
        streak = consecutiveCounter;
        document.getElementById('streak').innerHTML = streak;
      }

      coinState = 2;

      if (consecutiveCounter == 1) {
        document.querySelector("h1").innerHTML = "Tails";
      } else if (consecutiveCounter == 2) {
        document.querySelector("h1").innerHTML = "Tails again!";
      } else if (consecutiveCounter > 2) {
        document.querySelector("h1").innerHTML = "Tails " + consecutiveCounter + " times in a row!";
      }
    tails++;
    document.getElementById('tails').innerHTML = tails;
    }
};

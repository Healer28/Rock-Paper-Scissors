const reset = document.getElementById("Reset");
const result1 = document.getElementById("result1");
const result2 = document.getElementById("result2");
const yourcounter = document.getElementById("yourcounter");
const botcounter = document.getElementById("botcounter");
let usercount = 0;
let botcount = 0;
let user = 0;
function rock() {
  user = "Rock";
}
function paper() {
  user = "Paper";
}
function scissor() {
  user = "Scissor";
}
function run() {
  arr = ["Rock", "Paper", "Scissor"];
  const computer = arr[Math.floor(Math.random() * 3)];
  console.log(computer);
  console.log(user);

  if (computer == user) {
    result1.textContent = "No One Wins";
    result2.textContent = `Computer also draws ${computer}`;
  } else if (computer != user) {
    switch (computer) {
      case "Rock":
        if (user == "Scissor") {
          result1.textContent = "LOST";
          result2.textContent = `Computer draws ${computer}`;
        } else {
          result1.textContent = "WON";
          result2.textContent = `Computer draws ${computer} `;
        }
        break;
      case "Paper":
        if (user == "Rock") {
          result1.textContent = "LOST";
          result2.textContent = `Computer draws ${computer}`;
        } else {
          result1.textContent = "WON";
          result2.textContent = `Computer draws ${computer} `;
        }
        break;

      case "Scissor":
        if (user == "Paper") {
          result1.textContent = "LOST";
          result2.textContent = `Computer draws ${computer} `;
        } else {
          result1.textContent = "WON";
          result2.textContent = `Computer draws ${computer} `;
        }
        break;
    }
  }
  if (result1.textContent == "WON") {
    ++usercount;
    yourcounter.textContent = usercount;
  } else if (result1.textContent == "LOST") {
    ++botcount;
    botcounter.textContent = botcount;
  } else {
    yourcounter.textContent = usercount;
    botcounter.textContent = botcount;
  }
}

reset.onclick = function () {
  usercount = 0;
  botcount = 0;
  result1.textContent = "";
  result2.textContent = "";
  yourcounter.textContent = 0;
  botcounter.textContent = 0;
};

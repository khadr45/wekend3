// //floor  عدد صحيح دائما
const imgs = document.getElementsByClassName("num1");
const imgs1 = document.getElementsByClassName("num2");
let test = Array.from(imgs);
// console.log(test[5]);
let test1 = Array.from(imgs1);
for (let a = 0; a <= 5; a++) {
  let v = 1;
  v += a;
  test[a].value = v;
  console.log(test[a].value);
}
for (let a = 0; a <= 5; a++) {
  let v = 1;
  v += a;
  test1[a].value = v;
  console.log(test1[a].value);
}
const inputs = document.getElementsByTagName("input");
const range = document.getElementsByTagName("span");
const button = document.getElementsByTagName("button");
const h1 = document.getElementsByTagName("h1");
const target = document.getElementById("tArgEt");
const secondly = document.getElementById("secondly");
const lowi = document.getElementsByClassName("wg");
const low2 = document.getElementsByClassName("wg1");
let z5 = null;
let z6 = null;
console.log(low2[0].value);
console.log(low2[1]);
low2[0].value = z5 + low2[0].value;
low2[0].value = z6 + low2[0].value;
console.log(low2[0].value);
console.log(low2[1].value);

let winlose = Array.from(lowi);
const win1 = document.getElementById("win1");
const win2 = document.getElementById("win2");
const score1 = document.getElementById("score");
const score2 = document.getElementById("score1");
const AI = document.getElementById("AI");
let audio1 = new Audio();
audio1.src = "audios/dice-142528.mp3";
let audio2 = new Audio();
audio2.src = "audios/whoosh-6316.mp3";
let audio3 = new Audio();
audio3.src = "audios/My Audio 1-1.mp3";
let audio4 = new Audio();
audio4.src = "audios/correct-2-46134.mp3";
let audio5 = new Audio();
audio5.src = "audios/My Audio 5.mp3";
let z2 = true;
let z = true;
let s1 = 0;
let s2 = 0;
score1.innerText = s1;
score2.innerText = s2;
let x2 = 0;
let x3 = true;
let x1 = 0;
let x = 0;
let y = true;
let y1 = 0;
let y2 = 0;
let v1 = 0;
let h10 = 0;
let h20 = 0;
inputs[2].addEventListener("click", () => {
  if (
    (target.value > 0 || target.value == true) &&
    low2[0].value != z5 &&
    low2[1].value != null
  ) {
    secondly.style.visibility = "hidden";
  }
});
button[2].addEventListener("click", () => {
  if (z2 == true) {
    audio2.play();
  }
  y = !y;
  console.log("y" + y);

  if (y == false && z2 == false) {
    z = false;
    // z2 = true;
    button[0].click();
  } else if (y == true && z2 == false) {
    z = true;
    button[0].click();
  }

  console.log("z" + z);
});
button[0].addEventListener("click", () => {
  z = !z;
  z2 = false;
  audio3.play();
  let x = Math.floor(Math.random() * 6);
  console.log("z1" + z);
  if (z == true) {
    AI.style.color = "black";
    AI.style.backgroundColor = "white";
    // z2 = true;
  } else {
    if (y == true) {
      AI.style.color = "black";
      AI.style.backgroundColor = "white";
      for (let z1 = 0; z1 <= x; z1++) {
        inputs[0].click();
      }

      button[2].click();
    }

    if (h20 <= target.value && h10 >= target.value) {
      winlose[2].style.visibility = "visible";
      winlose[1].style.visibility = "visible";
      inputs[0].style.backgroundColor = "rgb(140, 138, 138)";
      button[2].style.backgroundColor = "rgb(140, 138, 138)";
      y1 = h10;
      y2 = h20;
    } else if (h20 >= target.value && h10 <= target.value) {
      winlose[3].style.visibility = "visible";
      winlose[0].style.visibility = "visible";
      inputs[0].style.backgroundColor = "rgb(140, 138, 138)";
      button[2].style.backgroundColor = "rgb(140, 138, 138)";
      y1 = h10;
      y2 = h20;
    }
  }
});

// button[0].click();
if (z2 == true) {
  AI.style.color = "white";
  AI.style.backgroundColor = "black";
  inputs[0].addEventListener("click", () => {
    audio1.play();
    let num = Math.floor(Math.random() * 6);
    let num2 = Math.floor(Math.random() * 6);

    test.forEach((ts) => {
      if (ts == test[num]) {
        test[num].style.visibility = "visible";
      } else {
        ts.style.visibility = "hidden";
      }
      test1.forEach((ls) => {
        if (ls == test1[num2]) {
          test1[num2].style.visibility = "visible";
        } else {
          ls.style.visibility = "hidden";
        }
      });
    });

    let r = test[num].value + test1[num2].value;

    if (y == true) {
      x = x + r;
      v1 = 0;
    } else if (y == false) {
      x = 0;
      v1 = v1 + r;
    }

    if (y == true) {
      y1 = h10;
      y2 = h20;
      if (h10 <= target.value && h20 <= target.value) {
        if (
          test[num].value == test1[num2].value &&
          test[num].value == 6
          //  ||
          // (test[num].value == test1[num2].value && test[num].value == 1) ||
          // (test[num].value == test1[num2].value && test[num].value == 3)
        ) {
          h10 = 0;
          x = 0;
          h1[1].innerText = h10;
          range[4].innerText = x;
          range[5].innerText = 0;
          alert("you have 6 and 6 ");
          audio4.play();
        } else {
          h10 = h10 + r;
          h1[1].innerText = h10;
          range[4].innerText = x;
          range[5].innerText = 0;
          s1 = r + s1;
          score1.innerText = s1;
          score2.innerText = s2;
        }
      } else if (h20 <= target.value && h10 >= target.value) {
        winlose[2].style.visibility = "visible";
        winlose[1].style.visibility = "visible";
        inputs[0].style.backgroundColor = "rgb(140, 138, 138)";
        button[2].style.backgroundColor = "rgb(140, 138, 138)";
        y1 = h10;
        y2 = h20;

        audio5.play();
      }
    } else if (y == false) {
      if (h20 <= target.value && h10 <= target.value) {
        if (
          test[num].value == test1[num2].value &&
          test[num].value == 6
          // ||
          // (test[num].value == test1[num2].value && test[num].value == 1) ||
          // (test[num].value == test1[num2].value && test[num].value == 3)
        ) {
          h20 = 0;
          v1 = 0;
          h1[5].innerText = h20;
          range[5].innerText = v1;
          range[4].innerText = 0;
          alert("you have 6 and 6 ");
          audio4.play();
        } else {
          h20 = h20 + r;
          h1[5].innerText = h20;
          range[5].innerText = v1;
          range[4].innerText = 0;
          s2 = r + s2;
          score1.innerText = s1;
          score2.innerText = s2;
        }
      } else if (h20 >= target.value && h10 <= target.value) {
        winlose[3].style.visibility = "visible";
        winlose[0].style.visibility = "visible";
        inputs[0].style.backgroundColor = "rgb(140, 138, 138)";
        button[2].style.backgroundColor = "rgb(140, 138, 138)";
        y1 = h10;
        y2 = h20;
        audio5.play();
      }
    }
  });
}

button[1].addEventListener("click", () => {
  audio4.play();
  h10 = 0;
  x = 0;
  h1[1].innerText = h10;
  range[4].innerText = x;
  range[5].innerText = 0;
  h20 = 0;
  v1 = 0;
  h1[5].innerText = h20;
  range[5].innerText = v1;
  range[4].innerText = 0;

  winlose[2].style.visibility = "hidden";
  winlose[1].style.visibility = "hidden";
  winlose[0].style.visibility = "hidden";
  winlose[3].style.visibility = "hidden";
  button[2].style.backgroundColor = "transparent";
  button[2].style.opacity = 1;
  inputs[0].style.backgroundColor = "transparent";
  inputs[0].style.opacity = 1;
  if (y2 <= target.value && y1 >= target.value) {
    x1++;
    win2.innerText = x1;
  } else if (y2 >= target.value && y1 <= target.value) {
    x2++;
    win1.innerText = x2;
  } else if (y2 == 0 && y1 == 0) {
    win1.innerText = x2;
    win2.innerText = x1;
  }
});
y1 = h10;
y2 = h20;

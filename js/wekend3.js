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
let winlose = Array.from(lowi);

let x = 0;
let y = true;
let v1 = 0;
let h10 = 0;
let h20 = 0;
inputs[2].addEventListener("click", () => {
  if (target.value > 0 || target.value == true) {
    secondly.style.visibility = "hidden";
  }
});
button[0].addEventListener("click", () => {
  y = !y;
});
inputs[0].addEventListener("click", () => {
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
        range[0].innerText = x;
        range[1].innerText = 0;
      } else {
        h10 = h10 + r;
        h1[1].innerText = h10;
        range[0].innerText = x;
        range[1].innerText = 0;
      }
    } else if (h20 <= target.value && h10 >= target.value) {
      winlose[2].style.visibility = "visible";
      winlose[1].style.visibility = "visible";
      inputs[0].style.backgroundColor = "rgb(140, 138, 138)";
      button[0].style.backgroundColor = "rgb(140, 138, 138)";
    }
  } else if (y == false) {
    if (h20 <= target.value && h10 <= target.value) {
      if (
        test[num].value == test1[num2].value &&
        test[num].value == 6
        //||
        // (test[num].value == test1[num2].value && test[num].value == 1) ||
        // (test[num].value == test1[num2].value && test[num].value == 3)
      ) {
        h20 = 0;
        v1 = 0;
        h1[3].innerText = h20;
        range[1].innerText = v1;
        range[0].innerText = 0;
      } else {
        h20 = h20 + r;
        h1[3].innerText = h20;
        range[1].innerText = v1;
        range[0].innerText = 0;
      }
    } else if (h20 >= target.value && h10 <= target.value) {
      winlose[3].style.visibility = "visible";
      winlose[0].style.visibility = "visible";
      inputs[0].style.backgroundColor = "rgb(140, 138, 138)";
      button[0].style.backgroundColor = "rgb(140, 138, 138)";
    }
  }
});

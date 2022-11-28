"use strict";
let a = "";
let b = "";
let key = "";
let finish = false;
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
let action = ["-", "+", "/", "X"];
let out = document.querySelector("p");
let ac = document.querySelector(".ac");
let buttons = document.querySelector(".buttons");

function allClear() {
  a = "";
  b = "";
  key = "";
  out.textContent = 0;
  finish = false;
}
ac.onclick = allClear;

buttons.onclick = (event) => {
  //buttonlardan tashqari joy bosilishidan himoya
  if (!event.target.classList.contains("btn")) return;
  //ac claerAll button bozilishidan himoya
  if (event.target.classList.contains("ac")) return;

  //   out.textContent = "0";

  //button valuese (text kontenti)
  let buttonValue = event.target.textContent;

  // birinchi sonni olib olish 0-9 va . ni
  if (numbers.includes(buttonValue)) {
    if (b === "" && key === "") {
      a = a + buttonValue;
      out.textContent = a;
      //ikkinchi sonni olish
    } else if (a !== "" && b !== "" && finish) {
      b = buttonValue;
      finish = false;
      out.textContent = b;
    } else {
      b = b + buttonValue;
      out.textContent = b;
    }
    // console.log(a, key, b);
  }

  //amllarni olib olish -+*/
  if (action.includes(buttonValue)) {
    key = buttonValue;
    out.textContent = key;
  }

  // hissoblash =
  if (buttonValue === "=") {
    if (b === "") b = a;
    switch (key) {
      case "+":
        a = Number(a) + Number(b);
        break;
      case "-":
        a = a - b;
        break;
      case "X":
        a = a * b;
        break;
      case "/":
        if (b === "0") {
          out.textContent = "Error!";
          a = "";
          b = "";
          key = "";
          return;
        }
        a = a / b;

        break;
    }
    finish = true;
    out.textContent = a;
    console.log(a, key, b);
  }
};

"use strict";

const btnEncrypt = document.getElementById("encryptBtn");
const btnDecrypt = document.getElementById("decryptBtn");
const btnCopy = document.getElementById("copyBtn");
const btnClear = document.getElementById("clear");
const input = document.getElementById("input");
const output = document.getElementById("output");

let encrypt = function (e) {
  e.preventDefault();

  let inputText = input.value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  inputText = inputText
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat")
    .replaceAll("o", "ober");
  output.value = inputText;
};
let decrypt = function (e) {
  e.preventDefault();

  let inputText = input.value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  inputText = inputText
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u")
    .replaceAll("ober", "o");

  output.value = inputText;
};
const copy = function () {
  navigator.clipboard.writeText(output.value);
};
const clear = function () {
  if (input.value != "") {
    input.value = "";
  }
  if (output.value != "") {
    output.value = "";
  }
};

btnEncrypt.addEventListener("click", encrypt);
btnDecrypt.addEventListener("click", decrypt);
btnCopy.addEventListener("click", copy);
btnClear.addEventListener("click", clear);

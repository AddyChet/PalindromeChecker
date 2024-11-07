const checkBtn = document.querySelector("#check-btn");
const textInp = document.querySelector("#text-input");
const resultAns = document.querySelector(".answer");

checkBtn.addEventListener("click", () => {
  const text = textInp.value.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  if (text === "") {
    alert("Please input a value");
  } else {
    let newText = "";
    for (let i = text.length - 1; i >= 0; i--) {
      newText += text[i];
    }
    text === newText
      ? (resultAns.innerHTML = `<strong>${textInp.value}</strong> is a palindrome`)
      : (resultAns.innerHTML = `<strong>${textInp.value}</strong> is not a palindrome`);
  }
});

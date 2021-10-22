const angleInput = document.querySelectorAll("input");
const check = document.querySelector("#check");
const output = document.querySelector(".output");

let allAngles = [];

check.addEventListener("click", (e) => {
  e.preventDefault();
  const angleA = Number(angleInput[0].value);
  const angleB = Number(angleInput[1].value);
  const angleC = Number(angleInput[2].value);

  if (angleA + angleB + angleC === 180) {
    output.innerHTML = "<h2>It is a VALID triangle.</h2>";
  } else {
    output.innerHTML = "<h2>It is a INVALID triangle.</h2>";
  }
});

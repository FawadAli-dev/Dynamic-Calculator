let parentBox = document.querySelector(".parent_box");
let childBoxes = document.querySelectorAll(".child_box");
let input = document.querySelector(".child_input");
let clear = document.querySelector(".clear");
let submit = document.querySelector(".submit");
let string = "";
input.disabled = true;

childBoxes.forEach((box) => {
  box.addEventListener("click", () => {
    let character = ["+", "%", "-", "/", "*"];
    let lastcharater = string[string.length - 1];
    if (box.innerText == "=") {
      string = eval(string).toString();
      input.value = string;
    } else if (box.innerText == "Back") {
      string = string.slice(0, string.length - 1);
      input.value = string;
    } else if (
      character.includes(lastcharater) &&
      character.includes(box.innerText)
    ) {
      input.value = "Error";
    } else {
      string = string + box.innerHTML;
      input.value = string;
    }
  });
});

clear.addEventListener("click", () => {
  string = "";
  input.value = "";
});

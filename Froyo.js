const Flavors = {};
function FindDuplicates(input) {
  console.log(input);
  let temptFlavors = input.split(",");
  console.log(temptFlavors);
  for (const flavor of temptFlavors) {
    if (flavor in Flavors) {
      Flavors[flavor]++;
    } else {
      Flavors[flavor] = 1;
    }
  }
  console.log(Flavors);
}
document.addEventListener("DOMContentLoaded", function () {
  const results = document.getElementById("Display");
  let displayText = "";
  for (const flavor in Flavors) {
    displayText += `${flavor}: ${Flavors[flavor]}\n`;
  }
  results.textContent = displayText;
});

const Prompt = "Please enter a comma seperated list of froyo flavors:";
let userInput = prompt(
  Prompt,
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);
FindDuplicates(userInput);

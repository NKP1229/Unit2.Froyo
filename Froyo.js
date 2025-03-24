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

const Prompt = "Please enter a comma seperated list of froyo flavors:";
let userInput = prompt(Prompt);
FindDuplicates(userInput);

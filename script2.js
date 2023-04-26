const poems = [
  "poem1",
  "poem2",
  "Poem3",
  "Poem4",
  "The only way to do great work is to love what you do.",
  "If you are working on something that you really care about, you don't have to be pushed. The vision pulls you.",
  "Success is not final, failure is not fatal: it's the courage to continue that counts.",
  "Believe you can and you're halfway there.",
  "Success is not how high you have climbed, but how you make a positive difference to the world.",
  "Hardships often prepare ordinary people for an extraordinary destiny."
];

const button = document.getElementById("button");
const letterInput = document.getElementById("letter");
const poemContainer = document.getElementById("poem-container");

button.addEventListener("click", () => {
  const letter = letterInput.value.toUpperCase(); //so it is uupercase


  let poemIndex;

  switch (letter) {
     case "A":
      poemIndex = 0;
      break;

      case "B":
      poemIndex = 1;
      break;

    case "C":
      poemIndex = 2;
      break;
    case "D":
      poemIndex = 3;
      break;
    case "E":
      poemIndex = 4;
      break;
    case "F":
      poemIndex = 5;
      break;
    case "G":
      poemIndex = 6;
      break;
    case "H":
      poemIndex = 7;
      break;


    default:
      poemIndex = -1; //if it is a letter outside my parameter
  }


  if (poemIndex === -1) {
    poemContainer.textContent = "That is not a letter between A and H!!!";
  } else {
    const poem = poems[poemIndex];
    poemContainer.textContent = poem;
  }
});






const affirmations = [
  "I am worthy of love",
  "My confidence grows when I step oustide my comfort zone",
  "Today is going to be awesome",
  "I only give my energy to things that add to my growth.",
  "I am worthy of a life that feels good to live.",
  "I am allowed to say no to others and yes to myself",
  "I attract what I talk about, so I only speak positive words",
  "I am proud of myself for getting this far",
  "I am a magnet for money",
  "Today is a new day and a new chance at a new beginning.",
];




const generateButton = document.getElementById("generate-button");
const affirmationContainer = document.getElementById("affirmation-container");


generateButton.addEventListener("click", function() {

// create random array

  const randomIndex = Math.floor(Math.random() * affirmations.length);

 

  affirmationContainer.textContent = affirmations[randomIndex];

});

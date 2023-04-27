const poems = [
  "Life is awesome. Life is grand. We have these abstractly shaped red wonders, these juicy and sometimes bittersweet delicacies. What would life be without them? What would it mean if we had to hustle to get them? One does not notice the grandness behind them, the incredible and amazing journey that brought them. From tiny seeds they grew, under the sun and in the dew, nurtured with care and love, until they were ready to be plucked. Life is awesome, life is grand, and strawberries are one of the little things that make it all so grand.",

  
  "White sheep, white sheep. On a blue hill. When the wind stops. You all stand still. When the wind blows. You walk away slow. White sheep, white sheep, Where do you go?",

  
  "Fate brought us together. Though I'm not sure why. And I don't need to know. You showed me what it means. To truly love someone, . To be known for who I am,. With all my fears and hopes. I want to say thank you,. Not just for you, but for me, . For opening up my heart, . And showing me how much I can feel. Now I must say goodbye, . With a heart that's shattered but healing, . Hoping you find true love too,. And that you open your heart to it. As for me, my door is closed, . Until fate brings me another chance.",

 
  "Fate slew him, but he did not drop. She felled. he did not fall. Impaled him on her fiercest stakes. He neutralized them all. She stung him, sapped his firm advance, . But, when her worst was done, .  And he, unmoved, regarded her, . Acknowledged him a man.",


  "Your love is a mystery, . A puzzle I can't solve, . It's a feeling so deep, . A bond that can't dissolve. . Your heart is a treasure, . A prize that I've won, . With you by my side, . My journey is done.",


  "Life is a puzzle, . With pieces yet to be found, . It's a journey of discovery, . Of sights, smells, and sounds. We must be patient and persistent, . And keep our focus true, . For the joy is in the journey, . And the reward is what we do.",

 
  "Our souls were meant to meet.  Like a piece of art and its artist . Like a brush and paint . Our souls were meant to meet, . And our hearts were meant to beat. Together we can conquer all, . With a love that will never fall. Our connection is like no other, With a love that is pure and kind.",

 
  "With every step, I feel the weight, . Of the loss that I must contemplate. But I will rise above the pain, . And find peace in my heart again. The journey may be long, . But my spirit will stay strong. With love and hope as my guide, . I will reach the other side.",

 
  "My four-legged companion, . A loyal friend through thick and thin. With eyes that sparkle bright, . And a heart that shines with light. My furry friend is always there, . To comfort me when life's unfair. With a wag of the tail and a lick on my hand, . All my troubles disappear like grains of sand. I cherish every moment we spend, . With my furry friend until the end. My heart is full of love, . For my loyal companion sent from above.",

 
  "My soul sings with the rhythm of the night, . A sweet melody that takes flight. The music sets me free, . And the world fades away from me. The beats keep me alive, . And the lyrics help me thrive. My heart dances with the song, . And nothing can go wrong. The tunes are my escape, . A place where my spirit takes shape. The music is my friend, . And it will be with me until the end."
];

const button = document.getElementById("button");
const letterInput = document.getElementById("letter");
const poemContainer = document.getElementById("poem-container");

button.addEventListener("click", () => {
  const letter = letterInput.value.toUpperCase();

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
      poemIndex = -1;
  }

  if (poemIndex === -1) {
    poemContainer.innerHTML = "<p>That is not a letter between A and H!!!</p>";
  } else {
    const poem = poems[poemIndex];
    const poemArray = poem.split(". ");

    poemContainer.innerHTML = poemArray.map((line) => {
      return "<p>" + line + "</p>";
    }).join("");
  }
});



"user strict"

/*
the main idea is to show the user message and take it 
to the text again and again to all the gaps in the text and complete.
*/

/* Here I create the place where the user's messages will be deposited. */
let userInputs = [`A name`,`A city`,`A Word`,`You are?`];

/* The strings used in the final text. */
let questionArray = [`Hi i am `,`, I born in `,` and i love `,`, my objetive in this my history is `];

/*
   --Here I start to create a repetition system with forEach
   --I undid mistakes and left it in a way that can run with my humble knowledge ;-;
   
   --What I understood from the problem: 
   --
   --when I do it inside the for it can't associate 
   --that the word must go to the array before going to the next prompt
*/

let word0 = prompt(userInputs[0]);
let word1 = prompt(userInputs[1]);
let word2 = prompt(userInputs[2]);
let word3 = prompt(userInputs[3]);

let arrayWord = [word0,word1,word2,word3];

/* Here I write the story joining the questionray and the user msgs. */
let originalStory = `${questionArray[0]} ${arrayWord[0]} ${questionArray[1]} ${arrayWord[1]} ${questionArray[2]} ${arrayWord[2]} ${questionArray[3]} ${arrayWord[3]}`;

/* The Final Text */    
console.log(originalStory);

//Save
//`Hi i am, i born in, and i love, my objetive in this my history is,`
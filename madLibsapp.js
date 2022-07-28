

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
   ----------------------------------------------------------------------------------
   --What I understood from the problem: 
   --
   --when I do it inside the for it can't associate 
   --that the word must go to the array before going to the next prompt
   ---------------------------------------------------------------------
   --stubborn with the loops but this time without forEach just with 
   --for,and it's not that it worked
*/


let arrayWord = [];

for(i = 3;i >= 0;i--){

 arrayWord.push(prompt(userInputs[i]));
 let x = 0;
 if (arrayWord[x] == ''){console.log("the user didn't write anything") x++}
 console.log(`${i} questions left`);

}

alert('All done! Ready for your totally-accurate, not-at-all confusing history of tech??');

/* Here I write the story joining the questionray and the user msgs. */
let originalStory = `<h2>${questionArray[0]} ${arrayWord[0]} ${questionArray[1]} ${arrayWord[1]} ${questionArray[2]} ${arrayWord[2]} ${questionArray[3]} ${arrayWord[3]}</h2>`;

/* The Final Text */    
console.log(originalStory);
document.write(originalStory);

//Save
//`Hi i am, i born in, and i love, my objetive in this my history is,`
"user strict"

/*
the main idea is to show the user message and take it 
to the text again and again to all the gaps in the text and complete.
*/

/* Here I write the story joining the questionray and the user msgs. */
let originalStory = `${questionArray[0]} ${userInputs[3]} ${questionArray[1]} ${userInputs[2]} ${questionArray[2]} ${userInputs[1]} ${questionArray[3]} ${userInputs[0]}`;

/* Here I create the place where the user's messages will be deposited. */
let userInputs = [`${userinputs} A name`,`${userInputs} A city`,`${userInputs} A Word`,`${userInputs} You are?`];

/* Here I start to create a repetition system with forEach */ 
let numberOfQuestions = 3;

loop.forEach(()=>
{

/* Inside I create the command that will allow the user to give the answer */
    p1.push(prompt(userInputs[numberOfQuestions]) ,numberOfQuestions--)
/* For log verification purposes */
    for (let i=numberOfQuestions;i>=0;i--)
{
    questionCounter++
    console.log(i);
}let questionCounter = 0;
})

/* The strings used in the final text. */
questionArray = [`Hi i am `,`, I born in `,` and i love `,`, my objetive in this my history is `];

/* The Final Text */    
console.log(originalStory);

//Save
//`Hi i am, i born in, and i love, my objetive in this my history is,`
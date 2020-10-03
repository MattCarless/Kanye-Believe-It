let mainHeader = document.querySelector("#main-header");
let displayQuoteHeader = document.querySelector("#display-quote");

let trueButton = document.querySelector("#true-button");
let falseButton = document.querySelector("#false-button");

let displayScoreHeader = document.querySelector("#display-score");


let quotesArray = [
    `People say nothing is impossible, but I do nothing everyday`,
    `The only mystery in life is why the kamikaze pilots wore helmets`,
    `War is God’s way of teaching Americans geography`,
    `The average dog is a nicer person than the average person`,
    `My opinions may have changed, but not the fact that I’m right`,
    `He who laughs last didn’t get the joke`,
    `When I was a boy I was told that anybody could become President. I’m beginning to believe it`,
    `Education is learning what you didn’t even know you didn’t know`,
    `A pessimist is a person who has had to listen to too many optimists`,
    `I was born to make mistakes, not to fake perfection`
]

let randomNumber = Math.floor((Math.random() * 10) + 1);
console.log(randomNumber);


userchoice = (event) => {
console.log(event);
return true;
};

async function getFetchData () {
    if (randomNumber <= 5) {
    let response = await fetch("https://api.kanye.rest/");
    let data = await response.json();
    console.log(data);
displayQuoteHeader.innerText = data.quote;
    } else {
     
       let randomArrayValue = quotesArray[Math.floor(Math.random() * quotesArray.length)];
       console.log(randomArrayValue);
       displayQuoteHeader.innerText=randomArrayValue;
    }
}



getFetchData();


trueButton.addEventListener("click", userchoice );
// falseButton.addEventListener("click",)
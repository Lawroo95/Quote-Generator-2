const QuoteContainer = document.getElementById('quote-container');
const QuoteText = document.getElementById('quote');
const AuthorText = document.getElementById('author');
const TwitterBtn= document.getElementById('twitter');
const NewQuoteBtn = document.getElementById('new-quote');


let APIQuotes = [];



function newQuote() {
    // pick a ranom quote from api quotes array // 
    const quote = APIQuotes[Math.floor(Math.random() * APIQuotes.length)];
    /* below by saying quote.author quote is array and the author  
    text part is the part of the array we want to pull */
    
    
    /* check if author field is blank and if it is, replace it with 
    'unkown */ 
    if(!quote.author){
        AuthorText.textContent = "Unknown"
    } else{
        AuthorText.textContent = quote.author;
    };
if(quote.text.length>120){
QuoteText.classList.add('long-quote')
}else{
    QuoteText.classList.remove('long-quote')
}
QuoteText.textContent = quote.text;
}

    


// get quotes from API
async function GetQuotes() {
    const APIUrl = 'https://type.fit/api/quotes';
try { 
    const response = await fetch(APIUrl); 
    APIQuotes = await response.json(); 
    newQuote();
} catch (error) {
    // catch error here // 
}
}
function tweetQuote(){
const twitterURL = `https://twitter.com/intent/tweet?text=${QuoteText.textContent} - ${AuthorText.textContent}`;
window.open(twitterURL, '_blank');
};
/* event listeners */

 NewQuoteBtn.addEventListener('click', (newQuote));

 TwitterBtn.addEventListener('click',(tweetQuote));

 

// On load // 
GetQuotes()


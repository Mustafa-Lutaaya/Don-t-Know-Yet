const quotes = [
    {Author: "Muganga", Quote:"Hi, Its Muganga"}, 
    {Author: "Lutaaya", Quote:"Hi, Its Lutaaya"},
    {Author: "Mustafa", Quote:"Hi, Its Mustafa"},
]





function getRandomQuote() {
    const randomIndex = Math.random(Math.random() * quotes.length);
    //console.log("Button clicked")
    //document.getElementById('author').innerText = quotes[0].Author
    document.getElementById('author').innerText = quotes[0].Quote
    document.getElementById('quote').innerText = quotes[randomIndex].Quote
    
}
const express = require("express")
const app = express()




// Greetings

app.get('/greeting/:name', (req, res) => {

	res.send("What's up! " + req.params.name);

});

//Tip Calculator
// When hitting the route, the page should display how much your tip will be based 
// on the total amount of the bill and the tip percentage. 
// (ex. hitting '/tip/100/20' should display 20 on the page).

app.get('/calculator/:total/:tipPercentage', (req, res) => {

	const calc= parseInt(req.params.total) / parseInt(req.params.tipPercentage);
    res.send("$"+calc);

});

// Magic 8 Ball
// Create a route of '/magic' that should expect a phrase in the URL that ask the Magic 8 ball a question.

// So if the user hits that route and asks a question of "Will I be a Millionaire" (ex. '/magic/Will%20I%20Be%20A%20Millionaire') he should have return to him his question AND a random Magic 8 ball response (see the array below) on the screen.

// We can't use spaces in the url, so we use %20 to express a space in the url.

// So if the user hits that route and asks a question of "Will I be a Millionaire" he should get his question asked and a random Magic 8 ball quote on the screen.

// Send the magic 8 ball response back between html <h1> tags
// Use this array of Magic 8 ball responses.....

app.get('/magic/:magic', (req, res) => {


    function getRandomAnswer(arr) {

        const randomIndex = Math.floor(Math.random() * arr.length);
    
        const item = arr[randomIndex];
    
        return item;
    }
    
    const array= ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely",
    "You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", 
    "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", 
    "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", 
    "My sources say no","Outlook not so good", "Very doubtful"];
    const result = getRandomAnswer(array);
    const question= req.params.magic;
    

    res.send(`<h1>${question}? ${result}.</h1>`);

});


app.listen(3000, () => {console.log("server is listening on port 3000")})
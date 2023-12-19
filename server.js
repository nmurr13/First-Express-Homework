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



app.listen(3000, () => {console.log("server is listening on port 3000")})
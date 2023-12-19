const express = require("express")
const app = express()


// Greetings
app.get('/greeting/:name', (req, res) => {

	res.send("What's up! " + req.params.name);

});


app.listen(3000, () => {console.log("server is listening on port 3000")})
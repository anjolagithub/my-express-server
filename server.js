//jshint
const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send('<h1> Hello world</h1>')
  });

  app.get('/contact',(req, res) => {
    res.send("Contact me at anjolaadeyemi4545@gmail.com")
  });

app.get('/about', (req, res) => {
    res.send("<h1>I am Barry Allen and <br> I am the fastesst man alive")
});

app.get('/hobbies', (req, res) => {
    res.send("<ul><li>Me</li><li>Me</li><li>Me</li></ul>")
});

app.listen(3000, function() {
    console.log("Server started on port 3000")
});

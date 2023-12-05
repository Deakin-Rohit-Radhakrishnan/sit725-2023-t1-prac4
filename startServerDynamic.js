var express = require("express")
var app = express()
app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
var port = process.env.port || 3000;


const cardList = [{
    title: 'Messi',
    path: 'images/Messi.jpg',
    link: 'About Messi',
    description: 'Description of Messi'
},
{
    title: 'Neymar',
    path: 'images/Neymar.jpg',
    link: 'About Neymar',
    description: 'Description of Neymar'
}];


app.get('/api/projects', (req, res) => {
    res.json({ statusCode: 200, data: cardList, message: "Success" })
});

app.listen(port, () => {
    console.log("App listening to: " + port)
});

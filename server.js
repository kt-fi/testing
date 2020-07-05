var express = require('express') ;
let ejs = require('ejs');
require('dotenv').config() 


const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));


const apikey = process.env.API_KEY;

app.get("/", function(req, res){
    res.render("index", ( { apikey: apikey} ));
   
  });

app.listen(3000, function(){
    console.log("server working")
})
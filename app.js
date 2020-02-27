
const express = require('express');
const bodyParser = require("body-parser");

const app = express();

app.set("view engine","ejs"); //this is the view engine and the type of file that will be rendered after with ejs in the render method meaning 'ejs' is the command that will be looking for
app.use(bodyParser.urlencoded({extended: true})); //initialize bodyparser
app.use(express.static("public")); //this is to apply the public files that are at the same time the static files


let newitems = ["Buy Food","Cook Food"];

//This is to make sure the connections was succesfull

app.get("/", function(req,res){

    
    let date = new Date();

    let options = {
        weekday: "long",
        day:"numeric",
        month:"long"
    };

    let currentday = date.getDay();
    let day = date.toLocaleDateString("en-US",options); //custom date eg. Thursday, February 27

    res.render("list", {kindofday: day, newListItems: newitems}); //update the list.ejs

});




app.post("/",function(req,res){

    let item = req.body.newItem;
    newitems.push(item);  //get the tag from the form
    res.redirect("/");  //redirect to the test
    
});



//This is to make sure that application is running in the port 3000
app.listen(3000, function(){
    console.log("Server in 3000");
});



//SWITCH STATEMENT EXAMPLE
    // switch(currentday){
    //     case currentday=0:
    //         day = "Sunday";
    //          break;
    //     case currentday=1:
    //         day = "Monday";
    //          break;
    //     case currentday=2:
    //         day = "Tuesday";
    //          break;
    //     case currentday=3:
    //         day = "Wednesday";
    //          break;
    //     case currentday=4:
    //         day = "Thursday";
    //          break;
    //     case currentday=5:
    //         day = "Friday";
    //          break;
    //     case currentday=6:
    //         day = "Saturday";
    //          break;
    // }
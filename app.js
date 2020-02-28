
const express = require('express');
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js"); //module that is located in the current directory 


const app = express();

app.set("view engine","ejs"); //this is the view engine and the type of file that will be rendered after with ejs in the render method meaning 'ejs' is the command that will be looking for
app.use(bodyParser.urlencoded({extended: true})); //initialize bodyparser
app.use(express.static("public")); //this is to apply the public files that are at the same time the static files


let newitems = ["Buy Food","Cook Food"];
let workitems = ["work items"];

//This is to make sure the connections was succesfull

app.get("/", function(req,res){

    let day = date.getDay();

    res.render("list", {listtitle: day, newListItems: newitems}); //update the list.ejs

});



//this is one route "/"
app.post("/",function(req,res){

    let item = req.body.newItem;

    if(req.body.button === "Work"){
        workitems.push(item);
        res.redirect("/work");
    }else{
        
    newitems.push(item);  //get the tag from the form
    res.redirect("/");  //redirect to the test
    
    }
    
});


//this is another route get
app.get("/work", function(req,res){
    res.render("list",{listtitle:"Work",newListItems:workitems})
});


//this is another route post but we do not need this part since the button POSTS to the "/" route
// app.post("/work", function(req,res){
//     let item = req.body.newItem;
//     res.redirect("/work");
// });


app.get("/about", function(req, res){
    res.render("about");
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
//run node applications Inquirer and fs to access via node js "npm inquier fs"

var inquirer = require("inquirer");
var fs = require('fs');


// array of questions for user here using inquierer
inquirer.prompt([
   {
      type: "input",
      name: "name",
      message: "What type of file is this? (Type 'README')",
   }, 
    {
    type: "input" ,
    name: "discription",
    message: "What does this repo do?",
 },

 {
    type: "input" ,
    name: "Table f Content",
    message: "What do you cover in this ReadMe?",
 },

 {
    type: "input" ,
    name: "Installation",
    message: "What installation information would you like to share?",
 },

 {
    type: "input" ,
    name: "Usage",
    message: "What is this application used for?",
 },

 {
    type: "input" ,
    name: "License",
    message: "Do you have any liscensing information?",
 },
 {
    type: "input" ,
    name: "Contributors",
    message: "Did anyone contibute to this application?",
 },
 {
    type: "input" ,
    name: "Tests",
    message: "Was any test completed?",
 },
 {
    type: "input" ,
    name: "Questions",
    message: "Do you want to leave any questions for the user?",
 },

]).then(function(data){
    var filename = data.name.toLowerCase().split(' ').join('') + ".md";;
    fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err){
        if (err) {
            return console.log(err);
        }

    console.log("See Generated ReadMe file")
    });

});


// function to write README file
//function writeToFile(fileName, data) {
    
    

// function to initialize program
//function init() {

//}

// function call to initialize program
//init();

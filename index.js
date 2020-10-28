//run node applications Inquirer and fs to access via node js "npm inquier fs"

var inquirer = require("inquirer");
var fs = require('fs');


// array of questions for user here using inquierer
inquirer.prompt([
   {
      type: "input",
      name: "name",
      message: "What is the name of this Repo?",
   }, 
    {
    type: "input" ,
    name: "discription",
    message: "What does this Repo do?",
 },

 {
    type: "input" ,
    name: "Table of Contents",
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
    message: "Do you have any liscensing information?",
    name: "License",
    choices: [
       "MIT",
       "BDS 3-clause",
       "No License",
    ]
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
    name: "Questions?",
    message: "What is your Github Username?",
 },

]).then(function(data){
    //var filename = data.name.toLowerCase().split(' ').join('');
    fs.writeFile("Readme.Md", JSON.stringify(data, null, '\t'), function(err){
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

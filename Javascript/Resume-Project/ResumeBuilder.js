

//var firstname =  "Olivia";

//var age = "22";

//console.log(firstname);



//var email = "olivia@gmail.com";

// var newEmail =
    //email.replace("olivia", "Oliviaboertje");

//console.log(email);
//conosle.log(newEmail);


//var awesomeThoughts = "My name is Olivia and I am AWESOME!";

//console.log(awesomeThoughts);


//var funThoughts =

    //awesomeThoughts.replace("AWESOME", "FUN");



// $("#main").append(funThoughts);




var name = "Olivia";
var formattedName = HTMLheaderName.replace("%data%", name);


var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role );


$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);


var skills = 
    ["awesomeness","programming", "Html", "CSS", "Js" ];

$("#main").append(skills);

//$("#main").append(skills[0]);

//$("#main").append(skills.length);


var bio = {};
    "name" : "Olivia";
        "age" : 22;
        "skills" : skills
};


$("#main").append(bio.name);z








/* var name = "OlIViA BOertJe";

function nameChanger(oldName) {
    var finalName = oldName;
    var names = oldName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    return finalName;
};

console.log(nameChanger(name));

*/

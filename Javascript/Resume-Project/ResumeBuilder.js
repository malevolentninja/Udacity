

var firstname =  "Olivia";

var age = "22";

console.log(firstname);



var email = "olivia@gmail.com";

var newEmail =
    email.replace("olivia", "Oliviaboertje");

console.log(email);
conosle.log(newEmail);


var awesomeThoughts = "My name is Olivia and I am AWESOME!";

console.log(awesomeThoughts);


var funThoughts =

    awesomeThoughts.replace("AWESOME", "FUN");



 $("#main").append(funThoughts);




var name = "Olivia";
var formattedName = HTMLheaderName.replace("%data%", name);


var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role );


$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);

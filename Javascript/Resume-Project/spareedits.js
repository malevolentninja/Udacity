

//var firstname =  "Olivia";

//var age = "22";

//console.log(firstname);



//var email = "hjhoa@gmail.com";

// var newEmail =
    //email.replace("olivia", "fdgfhjki");

//console.log(email);
//conosle.log(newEmail);


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

//var awesomeThoughts = "My name is Olivia and I am AWESOME!";

//console.log(awesomeThoughts);


//var funThoughts =

    //awesomeThoughts.replace("AWESOME", "FUN");



// $("#main").append(funThoughts);




//var name = "Olivia";
//var formattedName = HTMLheaderName.replace("%data%", name);


var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role );


$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);


/* var skills = 
    ["awesomeness","programming", "Html", "CSS", "Js" ];

$("#main").append(skills);

$("#main").append(skills[0]);

$("#main").append(skills.length);
*/

/* var img = document.createElement("img");
    img.src="images/me.png";
    var src = document.getElementById("header");
src.appendChild(img);

*/

var bio = {};
    "name" : "Olivia",
     "age" : 22,
    "role" : "Newbie Web Developer",
     "skills" : skills
    "contact": {
        "mobile" : 
        "email": 
        "github" : 
        "twitter" : 
        "location" :        
      
},


"welcomeMessage" : "Welcome to my portfolio".
"Skills" : ["awesomeness", "programming", "Html", "CSS", "Js" ],
    "bioPic" : "images/me.png"

}
$("#main").append(bio.name);

bio.city = "London";
bio.email = "myemail@email.com"

$("#main").append(bio.city);

// bio ["city"] = "London";
//$("#main").append(bio["city"]);

var work = {};
    work.position = "Customer Assistant";
    work.employer = "Marks and Spencers";
    work.years = 0.3;
    work.city = "London";


                       
var education = {
    "schools": [

	{

		"name": "Mill Hill",
		"years": 2011 - 2013,
		"city": "London",
		"certifications": " A Levels",
		"details": ["A* Geography , "
			"A Politics , "
			"B History"

		],

		"name": "Exeter University",
		"years": 2013 - 2016,
		"city": "Exeter",
		"degree": "BA Geography",

	}
],
"onlineCourses": [{
	"title": "Javascript Syntax",
	"Schools": "Udacity",
	"Dates": 2016,
	"url": "https://www.udacity.com/course/javascript-basics--ud804"
}]
};
//$("#main").append(work["position"]);               
//$("#main").append(education.name);


// JSON nested data use 



var bio {
    "name": "Olivia Boertje",
    "role": "Aspiring Developer", 
    "contacts": {
       "mobile": "1234 1234 123",
       "email" : "blondie@example.com",
       "github": "malevolentninja",
       "twitter": "@Olivia_Boertje",
       "location": "London"
    },
    "welcomeMessage" : "Thankyou for visting my page, enjoy looking around!",
    "skills": [
    "HTML5", "CSS/SCSS", "Gulp", "JavaScript" , "jQuery", "Git", "NodeJS" ,"Ruby", "Kitesurfing", "Shaolin Kung Fu", "Tai Chi", "Wing Chun", "Yoga" "Playing the Oboe and Clarinet"],
    "bioPic": "images/me.jpg"
};


                       
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
"onlineCourses": [
	{
	"title": "Javascript Syntax",
	"Schools": "Udacity",
	"Dates": 2016,
	"url": "https://www.udacity.com/course/javascript-basics--ud804"
}]
};


var work = {

    "Jobs"[ 

	{
	work.position = "Education Catalyst Project Coordinator";
	work.employer = "Exeter University";
	work.years = 0.6;
	work.dates = "7th 'January -  7th July 2017";
	work.description  = [{ "A critical review of course modules in accordance with the university's education strategy. " 
	"▪ Trained to conduct focus groups, edit ELE pages and project management course"  
	"▪ Collaborating with a range of stakeholders " 
        "▪ Writing agendas, minutes and chairing meetings" 
	"▪ Working with and managing a team"
	"▪ Utilising Microsoft Office tools"
	"▪ Organised events and organised the production of our webpage on the University website."	
}]; 
	
},
	
    {
    work.position = "Customer Assistant";
    work.employer = "Marks and Spencers";
    work.years = 0.3;
work.dates = "4th October 2016 - 5th January 2017"
    work.description = 
        "This role involves helping customers find products, ensure the shops standards are well amaintained(e.g. neat, full shelves) "
    "Needed to have good knowledge of beers, wines, spirits and other drinks to help the customer make an informed decision about the products they wish to purchase."

},
    
    ]
    
/*
 {
    "position" : "example";
    "employer" : "N/a";
    "years" = 0.3;
    "dates" = "4th October..."
    "description" = "blah blah"

 }
*/

},

	
var projects = {
    "projects" : [
        {
            "title": "My First Website"
            "dates" : "2016"
            "description" : "This website uses the basic forms of html and css to design a simple webpage."

            "images" : [
                "https://unsplash.it/g/200/300",
                "https://unsplash.it/g/200/300"

            ]
}

]
},


{
            "title": "My First portfolio page"
            "dates" : "2016"
            "description" : "This websit html , css and js."

            "images" : [
                "https://unsplash.it/200/300/?random",
                "https://unsplash.it/200/300/?random"

            ]
}

]
},

	{ 
		"title": " "
            "dates" : "2017"
            "description" : "This websit used "

            "images" : [
                "https://unsplash.it/200/300/?random",
                "https://unsplash.it/200/300/?random"
		]
		
	}, 

{
            "title": "My Resume"
            "dates" : "2017"
            "description" : "Harnesses Javascript to make an advanced portfolio page."

            "images" : [
                "https://unsplash.it/200",
                "https://unsplash.it/200"

            ]
}

]
},
	
//Bio
bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedImage = HTMLbioPic.replace("%data%", bio.image);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").prepend(formattedName, formattedRole).append(formattedImage, formattedMessage);
    $("#header").append(HTMLskillsStart);
    for (var skill = 0; skill < bio.skills.length; skill++) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#header").append(formattedSkills);
    }
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedSkype = HTMLcontactGeneric.replace("%contact%", "skype").replace("%data%", bio.contacts.skype);
    $("#footerContacts").append(formattedMobile, formattedEmail, formattedTwitter, formattedSkype);
};

//Education
education.display = function() {
    for (var school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        $(".education-entry:last").append(formattedName + formattedDegree, formattedDates, formattedLocation, formattedMajor);
    }
    
    if (education["online courses"].length !== 0) {
        $("#education").append(HTMLonlineClasses);
    }
    for (var course in education["online courses"]) {
        $("#education").append(HTMLschoolStart);
        var formattedTitle = HTMLonlineTitle.replace("%data%", education["online courses"][course].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education["online courses"][course].school);
        var formattedDates = HTMLonlineDates.replace("%data%", education["online courses"][course].dates);
        var formattedURL = HTMLonlineURL.replace("%data%", education["online courses"][course].url);
        $(".education-entry:last").append(formattedTitle + formattedSchool, formattedDates, formattedURL);
    }
};

//Work
work.display = function() {
    for (var job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedEmployer + formattedTitle, formattedDates, formattedLocation, formattedDescription);
    }
};

//Projects
projects.display = function() {
    for (var item in projects.project) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[item].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.project[item].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[item].description);
        $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);
        for (var image in projects.project[item].images) {
            var formattedImage = HTMLprojectImage.replace("%data%", projects.project[item].images[image]);
            $(".project-entry:last").append(formattedImage);
        }
    }
};

bio.display();
education.display();
work.display();
projects.display();

function inName(name) {
    var fullName, firstName, lastName;
    fullName = name.split(" ");
    firstName = fullName[0].toLowerCase();
    firstName = firstName.slice(0,1).toUpperCase() + firstName.slice(1);
    lastName = fullName[1].toUpperCase();
    fullName = firstName + " " + lastName;
    return fullName;
}

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);


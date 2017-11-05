/* ------------------------------------------------BIO JSON object ----------------------------------------------*/
var bio {
            "name": "Olivia Boertje",
            "role": "Aspiring Developer", 
            "contacts": {
               "email" : "malevolentninja@gmail.com",
               "github": "malevolentninja",
               "twitter": "@Olivia_Boertje",
               "LinkedIn": "https://www.linkedin.com/in/oliviaboertje/",
               "website": " ",
               "location": "London"
         },
            "welcomeMessage" : "Thankyou for visting my page, enjoy looking around!",
            "skills": ["HTML5", "CSS/SCSS", "Gulp", "JavaScript" , "jQuery", "Git", "NodeJS", "Bootstrap","MongoDB", "SQL", "ElasticSearch" "Ruby"],
            "interests": [ "block chain and cryptocurrency", "Kitesurfing", "Shaolin Kung Fu", "Tai Chi", "Wing Chun", "Yoga" "Playing the Oboe and Clarinet"],
            "bioPic": "images/me.jpg"
         };

                             /*   bio  display  function */
var displayBio = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedIn);
    var formattedBiopic = HTMLbioPic.replace("%data%", bio.bioPic);
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#topContacts, #footerContacts").append(formattedEmail);
    $("#topContacts, #footerContacts").append(formattedGithub);
    $("#topContacts, #footerContacts").append(formattedTwitter);
    $("#topContacts, #footerContacts").append(formattedLinkedin);
    $("#header").append(formattedBiopic);
    $("#header").append(formattedWelcome);
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var i in bio.skills) {
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
            $("#header").append(formattedSkills);
        }
    }
}
displayBio();

/* ----------------------------------------EDUCATION  JSON object -------------------------------------------------------------*/
var education = {
   "schools": [
        {
             "name": "Free Code Camp",
             "years": "2016-2018",
             "Certifications": ["Front-end", "Back-end", "Data-Visualization"],
             "details": [" Front-end = HTMl, CSS and JavaScript, Algorithms and Projects ", 
             "Data-Visualisation = SASS, React, D3.js, General notes", 
             "Back-end = Automated Testing and debugging in the console, Node.js, Express.js, Git, MongoDB, API Projects and Dynamic Web Application Projects", "Additonal: nonprofit project assistance"],
        },
        {
            "name": "Exeter University",
            "years": "2013 - 2016",
            "city": "Exeter",
            "degree": "BA Geography",
            "Acitvites and Societies": [ "Windriders", "Kung Fu Society", "Ladies Football Club", "Student Ambassador of the Royal Geographical Society"],
        },
        {
            "name": "Mill Hill",
            "years": "2011 - 2013",
            "city": "London",
            "certifications": " A Levels",
            "details": ["A* Geography","A Politics", "B History"] 
        }, 
],
"onlineCourses":[
                {
                     "title": "Javascript Syntax",
                     "School": "Udacity",
                     "Date": "2016",
                     "url": "https://www.udacity.com/course/javascript-basics--ud804"
                },
                {
                     "title": "Javascript Basics",
                     "School": "Udacity",
                     "Complete": "November 2017",
                     "url": "https://github.com/malevolentninja/Udacity/tree/master/Javascript/javaScript_Basics"
                },
                {
                     "title": "Javascript RoadTrip Part One",
                     "School": "CodeSchool",
                     "Complete": "November 2017",
                     "url": ""

                },
                {
                     "title": "CoffeScript",
                     "School": "CodeSchool",
                     "Complete": "August 2017",
                     "url": "https://github.com/malevolentninja/codeSchool/tree/master/CoffeeScript"
                },
                {
                     "title": "Magical Marvels MongoDB",
                     "School": "CodeSchool",
                     "Complete": "August 2017",
                     "url": "https://github.com/malevolentninja/codeSchool/tree/master/MongoDB",
                },
                {
                     "title": "Ruby Bits One",
                     "School": "CodeSchool",
                     "Complete": "August 2017",
                     "url": ""
                },
                {
                     "title": "Ruby Bits Two",
                     "School": "CodeSchool",
                     "Complete": "August 2017",
                     "url": ""
                },
                ],
};

                                    /*  display education function */

var displayEducation = function(){
    for (i in education.schools){
        $("#education").append(HTMLschoolStart);    
        
            var formattedSchoolsName = HTMLschoolName.replace("%data%", education.schools[i].name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].gradDate);
            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
            $(".education-entry:last").append(formattedSchoolsName);
            $(".education-entry:last").append(formattedDates);
            $(".education-entry:last").append(formattedDegree);
            $(".education-entry:last").prepend(formattedLocation);
            $(".education-entry:last").append(formattedMajor);   
        }
 $("#education").append(HTMLonlineClasses);
	for (i in education.onlineCourses){ 
       
            $("#education").append(HTMLschoolStart);
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].name);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].date);
            
            $(".education-entry:last").append(formattedOnlineTitle);
            $(".education-entry:last").append(formattedOnlineSchool);
            $(".education-entry:last").append(formattedOnlineDates);
        }
        
}

displayEducation();

/*  -------------------------------------------  WORK JSON object------------------------------------------------------------*/

/*
array of objects: 
var work = { 
	"jobs": [ {object1/job1}, {object2/job2}, {object3/job3}]
}

 {
    "position" : "example";
    "employer" : "N/a";
    "years" = 0.3;
    "dates" = "4th October..."
    "description" = "blah blah"

 }
*/

*/

var work = {

    "Jobs": [ 

          {
                work.position = "Education Catalyst Project Coordinator";
                work.employer = "Exeter University";
                work.years = 0.6;
                work.dates = "7th 'January -  7th July 2017";
                work.description  = [ "A critical review of course modules in accordance with the university's education strategy. ", "▪ Trained to conduct focus groups, edit ELE pages and project management course", "▪ Collaborating with a range of stakeholders ", "▪ Writing agendas, minutes and chairing meetings", "▪ Working with and managing a team", "▪ Utilising Microsoft Office tools", "▪ Organised events and helped produce a webpage of our results on the University website"], 
           },
           { 
                work.position = "Beers, Wines and Spirits Hero";
                work.employer = "Marks and Spencers";
                work.years = 0.3;
                work.dates = "4th October 2016 - 5th January 2017"
                work.description = ["This role involves helping customers find products, ensure the shops standards are well amaintained(e.g. neat, full shelves)", "I studied different types of beers, wines, spirits and the processes involved inorder to help the customer choose a product suitable for their criteria."],
           },
           { 
                work.position = "Back Stage Manager";
                work.employer = "Mill Hill County School";
                work.years = 3.0;
                work.dates = "December 2009 - December 2012"
                work.description = [" Communicating with performers and staff" ,"Time management and organisational skills to ensure smooth running of concerts"],  
           },
                work.position = "Intern";
                work.employer = "Bond Financial Insurance";
                work.years = 0.1;
                work.dates = "July 2009 - August 2009"
                work.description = [" Strong computer skills to update information and conduct administrative tasks", "Answer phone calls and speak to clients", "Introduction of a recycling scheme "],  
           },
    ];
    


                                        /* displayWork()  function */

function displayWork() {
    for (job in work.jobs) {
        // create new div for work experience
        $("#workExperience").append(HTMLworkStart);
        // concate employer and title
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        if (work.jobs[job].Description.length > 0) {
            for (var i in work.jobs[job].Description) {
                var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].Description[i]);
                $(".work-entry:last").append(formattedDescription);
            }
        }
    }
}

displayWork();

/* ---------------------------------------------PROJECT  JSON object ----------------------------------------------*/
	
var projects = {

    "projects" : [
        {
            "title": "My First Website"
            "dates" : "2016"
            "description" : ["This website uses the basic forms of html and css to design a simple webpage."]           
            "images" : [
                "https://unsplash.it/g/200/300",
                "https://unsplash.it/g/200/300"
            ]
         },
         {
            "title": "My First portfolio page"
            "dates" : "2016"
            "description" : ["This website consists of html , css and js."]
            "images" : [
                "https://unsplash.it/200/300/?random",
                "https://unsplash.it/200/300/?random"
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
         },
       ]
},
	
	
	
                                /* projects.display */



projects.display = function() {
    // display code goes here
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].Description);
        $(".project-entry:last").append(formattedDescription);
        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
                console.log(image);
                console.log(projects.projects[project].images[image]);
            }
        }
    }
}
projects.display();


/*---------MAP---------------*/
$("#mapDiv").append(googleMap);



/*-----navigation menu--- */

menu.display = function () {
    'use strict';
    var i=0, entry="", toptitle="", y=0;
    $("nav").append("<ul id=\"navmenu\">");
    //alert(menu.menu.length);
    for (i=0; i<menu.menu.length; i=i+1) {
       //alert(menu.menu[i].type);
       entry = '<li><a href="'+menu.menu[i].link+'">'+menu.menu[i].title+'</a></li>';
          // console.log(entry);
          $("#navmenu:last").append(entry);
    }
};


/* To sort out or remove ------ */

/* Bio
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
*/

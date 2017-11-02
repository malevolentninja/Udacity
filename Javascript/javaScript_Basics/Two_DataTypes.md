# Lesson Two: DataTypes

### 1. var loveJS = true;
No code

### 2. Quiz: save and .append()

```sh
var awesomeThoughts = "I am Olivia and I am AWESOME!";
console.log(awesomeThoughts);
```

### 3. Quiz: string.replace()

```sh
var awesomeThoughts = "My name is Olivia and I am AWESOME!";

var funThoughts = awesomeThoughts.replace("AWESEOME!", "FUN");

$("#main").append(funThoughts);
```

### 4. Mixing .replace() and .append()

```sh
var formattedName = HTMLheaderName.replace("%data%", name);

$("#header").append(formattedName);
```

### 5. Quiz: Format Data
Build a Resume Header
```sh
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Aspiring Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$"#header").prepend(formattedName);
```

### 6. String Manipulation Quiz 1
- Using string methods, convert "audacity" to "Udacity".
```sh
var s = "audacity";

var udacityizer = function(s) {  
    // Right now, the variable s === "audacity"
    // Manipulate s to make it equal to "Udacity"
    // Your code goes here!
    var u = "U";
    s = s.slice(2);
    s= u.concat(s);
    
    return s;
};

// Did your code work? The line below will tell you!
console.log(udacityizer(s));
```


### 7. String Manipulation Quiz 1 Solution

```sh
stringToCopy.slice(beginPosition [, optionalEndPosition])
```
Example: 
```sh
var copiedText = 'JavaScript is powerful!'.slice(0, 19);
console.log(copiedText);
```
Answer: JavaScript is power

Udacity Solution: 
```sh
var udacityizer = function(s) {  
    s = 'U' + s.slice(2);
    return s;
};
```

### 8. Truthy/Falsy

There are only six falsy values in JavaScript so it is easiest to memorize those:

- false
- 0 (zero)
- "" (empty string)
- null
- undefined
- NaN

### 9. Quiz var quiz = true;

Which values are truthy or falsy?

- 1 = Truthy
- "Awesome" = Truthy
- undefined = Falsy
- -42 = Truthy
- {"state": false} = Truthy
- [false] = Truthy


### 10. Arrays
Example Array: 
```sh
["Euler", 3.14159, {name: "Olivia", job: "Aspiring Developer"}, myFunc]
```

### 11. Quiz: .append()ing Arrays quiz
Is the length of an array equal to the last index?
```sh
var skills = ["awesomeness", programming", "teaching", "JS"];
$("main").append(skills.length);
```
Answer: No

### 12. Quiz: Array Manipulation 
 Can you increase the value of the last number in the array by one?
 
 My Answer: 
 
 ```sh
 var sampleArray = [0,0,8];

var incrementLastArrayElement = function(_array) {
    var newArray = [];
    // Your code should make newArray equal to an array that has the same
    // values as _array, but the last number has increased by one.
    
    // For example:
    // _array = [1, 2, 3];
    // turns into:
    // newArray = [1, 2, 4];
    
    // Your code goes in here!
    newArray = _array.pop() + 1;
    _array.push(newArray); 
    newArray = _array;
    
    // Don't delete this line!
    return newArray;
};

// Did your code work? The line below will tell you!
console.log(incrementLastArrayElement(sampleArray));
 ```
 
Alternative Method: 
 
 ```sh
 function incrementLastArrayElement(_array)  {
    var newArray = [];
    newArray = _array.slice(0);
    var lastNumber = newArray.pop();
    newArray.push(lastNumber + 1);
    return newArray;
};
 ```


### 13. Quiz: String Manipulation 2
If given a string of a two word name formatted with any mix of capitalization
- can you manipulate the string to ensure the first name has a capital first letter and the last name is totally capitalized? 
- Assume there's a space between the names 
- For instance, turning a string like "cAmEROn PittMAN" into "Cameron PITTMAN" 
- Your answer should be a single string saved to the variable called finalName

```sh
var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    var names = oldName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    // Don't delete this line
    return finalName;
}
// Did your code work? The line below will tell you!
console.log(nameChanger(name));

```


### 14. Object Literal Notation 

Default:
```sh
function Car() {}
/*
var Car = function() {}
*/
var car1 = new Car();
```
Example: 
```sh
var bio = {
    "name" : "James",
    "age" : 32,
    "skills": skills
};

$("#main").append(bio.name);
```

### 15. Quiz: Biography 
- Create a new object called bio using object literal notation
- inside bio save name, role, contact info, picture URL, welcome message and skills
- format and .append() or .prepend() bio to the page

```sh
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
    "HTML5", "CSS/SCSS", "Gulp", "JavaScript" , "jQuery", "Git", "NodeJS" ,"Ruby"],
    "bioPic": "images/me.jpg"
};
```

### 16. Dot and Bracket Notation

Dot Notation: declare an object and then define its properties outside the brackets.
```sh
var bio = {
     "name": "Olivia",
     "age": 23,
     "skills": skills
};

$(#main").append(bio.name);

bio.city = "London";
bio.email = "blondie@example.com";
```

Bracket Notation:
```sh
var bio = {
     "name": "Olivia",
     "age": 23,
     "skills": skills
};

$(#main").append(bio.city);

bio ["city"] = "London";
bio ["email"] = "blondie@example.com";
```

### 17. Quiz: Practice with objects
- create a work object with properties defining current job position, employer, years worked and the city. 
- Create an Education object with the properties defining the name of the last school you atteneded, the years you attened and the school's city using bracket notation. 
- .append() work["position"] and education.name to the resume
```sh
var work = {};
work.position = "Aspiring Developer";
work.employer = "...";
work.years = 1.0;

var education = {};
education["name"] = "Free Code Camp ";
education["years"] = "2016-2017";
education["city"] = "Exeter, London";

$("#main").append(work["position"]);
$("#main").append(education.name);

```

### 18. A note about JSON
JSON is JavaScript Object Notation which does not permit the inclusion of functions.
The resume project usese javaScript Object Literals to define objects which permits the inclusion of functions as properties

### 19. JSON
```sh
var education = {
  "schools": [
   // Object 0
   {
 
     "name" :"Free Code Camp Certifications", 
     "years": "2016-2017",
     "city" :"Exeter, London",
     "major" : ["Front-End", "Back-end", "Data Visualisation" ]
   },
   //Object 1
   { 
     "name" : "BA Geography",
     "years" : "2013-2016",
     "city": "Exeter" 
   
   },
  ]

};
```

### 20. Validating JSON

No code. 

### 21. Quiz: Validating JSON Quiz
- check if the eucation section validates

Answer: Yes.


### 22. Quiz: All the Resume Sections
- Now complete the following sections of the resume and compile. 

Resume Sections:
#### work:
- work contains an array of jobs.
- Each object in the jobs array should contain;
    - an employer
    - title
    - location 
    - dates worked
    - description strings

#### projects
- projects contains an array of projects. 
- Each object in the projects array should contain;
     - title
     - dates 
     - description strings, 
     - an images array with URL strings for project images

#### bio
- bio contains; 
     - name
     - role
     - welcomeMessage,
     - biopic strings
     - contacts object
     - skills array of skill strings.
- The contacts object should contain; 
     - a mobile number, 
     - email address, 
      - github username, 
      - twitter handle
      - location. 
      - The twitter property is optional.

#### education
- education contains an array of schools. 
- Each object in the schools array contains;
     - name, 
     - location, 
     - degree dates
     - url strings
     - a majors array of major strings

- education also contains; 
     - an onlineCourses array. 
- Each object in the onlineCourses array should contain
     - a title, 
     - school, 
     - dates 
     - url strings


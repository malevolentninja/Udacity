# Flow Control 


### 1. QUiz: If Statements

Stop anything from displaying if there is no h1 element
```sh
    if (document.getElementsByTagName('h1').length === 0) {
        document.getElementById('header').style.display = 'none';
    }
```
This works for the  #header element

### 2. While Loops
No Code 

### 3. Quiz: For Loops
- Enter the for loop code 
```sh
for (var i = 0; i < 9; i++) {
    console.log(i);
}
```
Runs from 0 - 8. 

### 4. Quiz: For-In Loops
Clarification
Use forEach or for to iterate over arrays like:
```sh countries = ['Argentina', 'China', 'England'];```
Use for-in to loop over objects like
``` countries = {'country1':'Argentina', 'country2':'China','country3':'England'};```

:last jquery selector
e.g. 
```sh work-entry:last ```
if there are three elements named work-entry, it will return only the 3rd one.

### 5. Quiz: Work!
- need to add for and append

```sh
for (job in work.jobs) {
  // create a new div for work experience
  $("#workExperience).append(HTMLworkStart);
  // concate employer and title
  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;
  $(".work-entry:last").append(formattedEmployer.Title);
  
  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].description);
  $(".work-entry:last").append(formattedDates);  
```

### 6. A Note about For-In Loops
Ensure all for in loops are changed to either for or forEach


### 7. Quiz: Functions
- Move all the code you wrote to display your owkr in function into the funciton displayWork() {} between the curly braces.
- What happens when you refresh
Answer: nothing


### 8. Click Metrics

```sh
function displayWork() {
  for (job in work.jobs) { }
}

// call function using an object in global scope
displayWork();
```

### 9. Quiz: Collecting Click Locations
```sh
$(document).click(function(loc){
  var x = loc.pageX;
  var y = loc.pageY;
  
  logClicks(x,y)

});
```

### 10. Quiz: Return statements
- Write a function called locationizer(work_obj).
- locationizer(work_obj) must return an array of the locations in work
- might need to use the array method .push() to add values to the array

```sh
function locationizer(work_obj) {
   var locationArray  = [];
   
   for (job in work_obj.jobs) {
       var newLocatoin = work_obj.jobs[job].location;
       locationArray.push(newLocation);
       }
   return locationArray;
 }
 
 console.log(locationizer(work));
```

### 11. Quiz: Internationlize Names
- .append() internationalizeButton to the main div
- create a function called inName() that takes the string of two names and returns an internationlised version 

```sh
function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  
  return name[0] + " " +name[1];
}

$('#main').append(internationlizeButton);

```



### 12. Encapsulation
```sh
var displayProjects = function() {
  // enter the code here
}

projects.display = function() {
// enter code here, uses a display method
}
```

### 13. Quiz: Encapsulating Functions
- Encapsulate display() within the projects object
- projects.display() should .append() all of my projects information to the project section
- start each new project with a HTMLprojectStart

```sh
projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);
    
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);
    
    var formattedDescription = HTMLprojectDates.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if (projects.projects[project].images.length > 0) {
      for (image in projects.project[project].images) {
        var formattedImage = HTMLprojectDates.replace("%data%", projects.projects[project].images[image]);
         $(".project-entry:last").append(formattedImage);
       }
       
    }
}

```


### 14. Quiz: Independent Research

What does$(document).click() take as a parameter?

```sh
$(document).click(function(loc) {
  console.log(loc.pageX, loc.pageY);
});
```
Answer: an anonymous function

### 15. Customize the Portfolio
Two steps for the resume

- Uncomment the last block of code in helper.js. The code you need starts with window.addEventListener('load', initializeMap); and goes until the end of the file.
- Uncomment the <script> tag for Google Maps API in the <head> of index.html.

To put in resumebuilder.js
$("#mapDiv").append(googleMap);


### 16. The Final Project!
Optional extras to consider
- Maps JavaScript API
- D3.js for charts

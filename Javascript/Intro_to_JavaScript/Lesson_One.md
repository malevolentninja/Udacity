# Lesson One: What is JavaScript


What happens when you run the following line of code in the JavaScript console?
```sh
document.getElementsByTagName("h1")[0].style.color = "#ff0000";
```

A: The heading turned Red. 




What happens when you run the code from below in the JavaScript console and then click on the page?

```sh
document.body.addEventListener('click', function () {
     var myParent = document.getElementById("Banner"); 
     var myImage = document.createElement("img");
     myImage.src = 'https://thecatapi.com/api/images/get?format=src&type=gif';
     myParent.appendChild(myImage);
     myImage.style.marginLeft = "160px";
});
```

A: An image is added to the page



### Recap

- Web browsers have built-in JavaScript engines
- ECMAScript versions have recently year based for a better transition

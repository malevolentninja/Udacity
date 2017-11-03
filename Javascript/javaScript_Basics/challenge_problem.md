# Challenge Problem

Three programming challenges

## 1. Relationships

Your job is to write the function getRelationship(x,y) function, which should return a string representing whether x is >, < or = y. For example:

```sh
var rel = getRelationship(2, 3);
console.log(rel); // <
If one or both of the values aren't numbers, your function should output:
```

"Can't compare relationships because [this value] and [that value] [is]/[are] not [a] number[s]."

My Solution: 

```sh
function getRelationship(x, y) {
	// Your code goes here!
	// passed!
	var xtype = getType(x);
	var ytype = getType(y);

	// console.log(xtype);
	// console.log(ytype);

	if ( (xtype === "number") && (ytype === "number") ) {
		if (x > y) {
			return ">";
		} else if (x < y) {
			return "<";
		} else {
			return "=";
		}
	}

	if ( (xtype !== "number") && (ytype !== "number") ) {
		return "Can't compare relationships because " + x  + " and " + y + " are not numbers";
	} else if  ( (xtype === "number") && (ytype !== "number") ) {
		return "Can't compare relationships because " + y + " is not a number";
	} else {
		return "Can't compare relationships because " + x + " is not a number";
	}

};

function getType(x) {
	if ( isNaN(x) ) {
		return "NaN";
	} else {
		return typeof x;
	}
}


var rel = getRelationship(2, 3);
console.log(rel); //

// Try logging these functions to test your code!
console.log(getRelationship(1,4));
console.log(getRelationship(1,1));
console.log(getRelationship("that",2));
console.log(getRelationship("this"," something else"));
console.log(getRelationship(3));
console.log(getRelationship("hi"));
console.log(getRelationship(NaN));
console.log(getRelationship(NaN, undefined));
console.log(getRelationship(NaN, 3));
```

## 2. Astronaut Arrays

Twelve people have walked on the Moon. They are:

Neil Armstrong,
Buzz Aldrin,
Pete Conrad,
Alan Bean,
Alan Shepard,
Edgar Mitchell,
David Scott,
James Irwin,
John W Young,
Charles Duke,
Eugene Cernan,
Harrison Schmitt,

Finish the alphabetizer(_names) function, which takes in a names array (of length N) 
containing strings of names and returns an alphabetized array of names in lastname, firstname format.

My solution
```sh
var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];

function alphabetizer(names) {
    var dict = [];
    for (var i = 0; i < names.length; i++ ) {
      var name = names[i].split(" ");
      lastFirst = name.pop() + ", " + name;
      dict.push(lastFirst);
    }
    return dict.sort();
  }

// Try logging your results to test your code!
console.log(alphabetizer(moonWalkers));
```


## 3. PageSpeed Insights (PSI)
Google's PageSpeed Insights (PSI) scores websites on their speed

Create a totalBytes(psiResults) function that 
- iterates through pageStats in the psiResults object 
- returns the total number of bytes to load the website.

Then, create a ruleList(psiResults) function that 
- iterates through the localizedRuleNames in ruleResults 
- returns an array of their strings.

Notes: PSI is an API which you can call and get back JSON responses.
My Solution
```sh
function ruleList(results) {
    // Your code goes here!
    var rules = [];

    for (rule in results.formattedResults.ruleResults) {
    	rules.push(results.formattedResults.ruleResults[rule].localizedRuleName)
    }
    return rules;
}

// Iterate through pageStats in the psiResults object and
// return the total number of bytes to load the website.
function totalBytes(results) {
    // Your code goes here!
    var bytes = 0;

    for ( stat in results.pageStats ) {
    	if (typeof results.pageStats[stat] === "string") {
    		bytes += parseInt(results.pageStats[stat]);
    	}
    }

    return bytes;
}


// Below, you'll find a sample PS Insights JSON
// and two console.log statements to help you test your code!

results = {
 "kind": "pagespeedonline#result",
 "id": "/speed/pagespeed",
 "responseCode": 200,
 "title": "PageSpeed Home",
 "score": 90,
 "pageStats": {
  "numberResources": 22,
  "numberHosts": 7,
  "totalRequestBytes": "2761",
  "numberStaticResources": 16,
  "htmlResponseBytes": "91981",
  "cssResponseBytes": "37728",
  "imageResponseBytes": "13909",
  "javascriptResponseBytes": "247214",
  "otherResponseBytes": "8804",
  "numberJsResources": 6,
  "numberCssResources": 2
 },
 "formattedResults": {
  "locale": "en_US",
  "ruleResults": {
    "AvoidBadRequests": {
      "localizedRuleName": "Avoid bad requests",
      "ruleImpact": 0.0
    },
    "MinifyJavaScript": {
      "localizedRuleName": "Minify JavaScript",
      "ruleImpact": 0.1417,
      "urlBlocks": [
      {
        "header": {
       "format": "Minifying the following JavaScript resources could reduce their size by $1 ($2% reduction).",
       "args": [
        {
         "type": "BYTES",
         "value": "1.3KiB"
        },
        {
         "type": "INT_LITERAL",
         "value": "0"
        }
       ]
        },
        "urls": [
        {
          "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://code.google.com/js/codesite_tail.pack.04102009.js"
          },
          {
           "type": "BYTES",
           "value": "717B"
          },
          {
           "type": "INT_LITERAL",
           "value": "1"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://www.gmodules.com/ig/proxy?url\u003dhttp%3A%2F%2Fjqueryjs.googlecode.com%2Ffiles%2Fjquery-1.2.6.min.js"
          },
          {
           "type": "BYTES",
           "value": "258B"
          },
          {
           "type": "INT_LITERAL",
           "value": "0"
          }
         ]
        }
       }
      ]
     }
    ]
   },
   "SpriteImages": {
    "localizedRuleName": "Combine images into CSS sprites",
    "ruleImpact": 0.0
   }
  }
 },
 "version": {
  "major": 1,
  "minor": 11
 }
};

// Try logging the outputs below to test your code!
console.log(ruleList(results));
console.log(totalBytes(results));
```


var cat = {
    name: 'Fluffy',
    activities: ['play', 'eat cat food'],
    catFriends: [
    {
    name: 'bar',
    activities: ['be grumpy', 'eat bread omblet'],
    weight: 8,
    furcolor: 'white'
    }, 
    {
    name: 'foo',
    activities: ['sleep', 'pre-sleep naps'],
    weight: 3
    }
    ]
   }

   // Add height and weight to Fluffy
   cat.height = 2;
   cat.weight = 5; 

   // Fluffy name is spelled wrongly. Update it to Fluffyy
   cat.name = 'Fluffyy'; 

   // List all the activities of Fluffyy's catFriends.
   for(i in cat.catFriends){
       for(j in cat.catFriends[i].activities){
       console.log(cat.catFriends[i].activities[j]);
   }
   }

   // Print the catFriends names.
   for(i in cat.catFriends){
    console.log(cat.catFriends[i].name);
    }

    //Print the total weight of catFriends
    let totalWeight = 0;
    for(i in cat.catFriends){
        totalWeight = totalWeight + parseFloat(cat.catFriends[i].weight);
    }

   console.log(totalWeight);
   
   // Print the total activities of all cats (op:6)
   let totalActivities = 0;
   let fluffyyActivities = parseInt(cat.activities.length);
   for(i in cat.catFriends){
    totalActivities = totalActivities + parseInt(cat.catFriends[i].activities.length);
   }
   totalActivities = fluffyyActivities + totalActivities;
   console.log(totalActivities);
   
   // Add 2 more activities to bar & foo cats
   for(i in cat.catFriends){
    cat.catFriends[i].activities.push("to purr");
    cat.catFriends[i].activities.push("to meow");
    }
    // Update the fur color of bar
    for(i in cat.catFriends){
        if(cat.catFriends[i].name === "bar"){
            cat.catFriends[i].furcolor = 'brown';
        }
    }
   console.log(cat);

   /*Problem 0 : Part B (15 mins):
Iterating with JSON object's Values */

var myCar = {
    make: 'Bugatti',
    model: 'Bugatti La Voiture Noire',
    year: 2019,
    accidents: [
    {
    date: '3/15/2019',
    damage_points: '5000',
    atFaultForAccident: true
    },
    {
    date: '7/4/2022',
    damage_points: '2200',
    atFaultForAccident: true
    },
    {
    date: '6/22/2021',
    damage_points: '7900',
    atFaultForAccident: true
    }
    ]
   }
   // 1. Loop over the accidents array. Change atFaultForAccident from true to false.
   for(i in myCar.accidents){
    myCar.accidents[i].atFaultForAccident = false;
    // 2. Print the dated of my accidents
    console.log(myCar.accidents[i].date);
   }

   /* :bowtie:
   Problem 1 (5 mins):
   Parsing an JSON object's Values:
*/
   var obj = {name : "RajiniKanth", age : 33, hasPets : false};
function printAllValues(obj) {
 // Write a function called “printAllValues” which returns an newArray of all the input object’s values
 console.log(Object.values(obj));
}
printAllValues(obj);
/*
Problem 2(5 mins) :
Parsing an JSON object's Keys:
*/
function printAllKeys(obj) {
    console.log(Object.keys(obj));
}
printAllKeys(obj);
/*
Problem 3( 7–9 mins):
Parsing an JSON object and convert it to a list:
*/

var obj = {name: "ISRO", age: 35, role: "Scientist"};
let isroList =[];
function convertListToObject(obj) {
    for(let i in obj){
    isroList.push(obj[i]);
    }
  return isroList;
}
convertListToObject(obj);
/*
Problem 4( 5 mins):
Parsing a list and transform the first and last elements of it:
*/

var arr = ["GUVI", "I", "am", "a geek"];
function transformFirstAndLast(arr) {
        let newObject = {};
            newObject[arr[0]] = arr[arr.length-1];
        
 return newObject;
}

/*
Problem 5 ( 7 -9 mins):
Parsing a list of lists and convert into a JSON object:
*/
var arr = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
function fromListToObject(arr) {
 var newObject = {};
 for(let i in obj){
    newObject[arr[i][0]] = arr[i][1];  
  }
 return newObject;
}
/*
Problem 6 (10 mins):
Parsing a list of lists and convert into a JSON object:
*/
var arr= [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];
function transformEmployeeData(arr) {
 var tranformEmployeeList = [];
 
 //Your code
 
 return tranformEmployeeList;
}

/*
Problem 7 (10 — 20 mins):
Parsing two JSON objects and Compare:
*/
var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6}
function assertObjectsEqual(actual, expected, testName){
 // your code here
}

/*
Problem 8(10 mins):
Parsing JSON objects and Compare:
*/
var securityQuestions = [
    {
    question: "What was your first pet's name?",
    expectedAnswer: "FlufferNutter"
    },
    {
    question: "What was the model year of your first car?",
    expectedAnswer: "1985"
    },
    {
    question: "What city were you born in?",
    expectedAnswer: "NYC"
    }
   ]
   function chksecurityQuestions(securityQuestions,question) {
   
    // your code here
    return true ; 
   }
   //Test case1:
   var ques = "What was your first pet's name?";
   var ans  =  "FlufferNutter";
   var status = chksecurityQuestions(securityQuestions, ques, ans);
   console.log(status); // true
   //Test case2:
   var ques = "What was your first pet's name?";
   var ans  =  "DufferNutter";
   var status = chksecurityQuestions(securityQuestions, ques, ans);
   console.log(status); // flase

   
   /*
   Problem 9(20 mins):
Parsing JSON objects and Compare:
*/
var students = [
    {
    name: "Siddharth Abhimanyu", age: 21}, { name: "Malar", age: 25},
    {name: "Maari",age: 18},{name: "Bhallala Deva",age: 17},
    {name: "Baahubali",age: 16},{name: "AAK chandran",age: 23},   {name:"Gabbar Singh",age: 33},{name: "Mogambo",age: 53},
    {name: "Munnabhai",age: 40},{name: "Sher Khan",age: 20},
    {name: "Chulbul Pandey",age: 19},{name: "Anthony",age: 28},
    {name: "Devdas",age: 56} 
    ];
   function returnMinors(arr)
   {
   }
  // console.log(returnMinors(students));

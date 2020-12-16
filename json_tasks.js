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

   // List all the activities of Fluffyy’s catFriends.
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
            cat.catFriends[i].furcolor = brown;
        }
    }
   console.log(cat);
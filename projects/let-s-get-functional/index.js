// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underscore');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    
 * 
 * npm start --prefix ./bisakhov.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    let maleNumbers = _.filter(array, function (customerObj){
        return customerObj.gender === 'male';
    })
    
    //.filter returns an array, but we need a number, hence:
    return maleNumbers.length;

};

//THIS IS SIMILAR TO maleCount

var femaleCount = function (array) {
    let femaleNumbers = _.reduce(array, function(femaleNum, customerObj) {
        
        if (customerObj.gender === 'female') {
            femaleNum ++
        } 
        return femaleNum;
    }, 0)
    return femaleNumbers;
}
    
    // var femaleCount = _.reduce(array, function(femaleNum, customerObj) {
        
    //     if (customerObj.gender === 'female') {
    //         femaleNum ++
    //     } 
    //     return femaleNum;
    // }, 0)
    
   
   
   //THIS ONE WORKS ON REPL 
    // var femaleCount = array.reduce(function(femaleNum, customerObj){
    //     if (customerObj.gender === 'female') {
    //         femaleNum ++
    //     } 
    //     return femaleNum
    // }, 0)

        
        

    


var oldestCustomer = function(array) {
    let oldestCustomerName = _.reduce(array, function(prevCust, currCust) {
        if (prevCust.age < currCust.age) {
            return currCust
        }
        return prevCust
    })
    return oldestCustomerName.name;
};


var youngestCustomer = function(array) {
    let youngestCustomerName = _.reduce(array, function(prevCust, currCust) {
        if (prevCust.age < currCust.age) {
            return prevCust
        }
        return currCust
    })
    return youngestCustomerName.name;
};


var averageBalance = function(array) {
    
    let avgBal = _.reduce(array, function(sum, customerObj) {
        //the below method is used to transform currency into numerical value
        let money = Number(customerObj.balance.replace(/[^0-9.-]+/g,""));
        sum += money;
        return sum
    }, 0) 
return avgBal/(array.length);
}

var firstLetterCount = function(array, letter) {
    let firstLetterNumber = _.reduce(array, function(count, customerObj){
        if (customerObj.name[0].toUpperCase() === letter.toUpperCase()) {
            return count += 1 
            //don't use count++ here, that would be wrong
        }
        return count
    }, 0)
    return firstLetterNumber;
}

var friendFirstLetterCount = function(array, customer, letter) {
  //customer = customerObj.name;

  let customerName = _.filter(array, function(customerObj) {
    if (customer === customerObj.name) {
      return customerObj
    }
    //return customerObj;
  });

    let friendFirstLetterNumber = _.reduce(customerName[0].friends, function(count, friendObj) {
      //we use customerName[0].friends because it is an array containing 1 single object
      if (friendObj.name[0].toUpperCase() === letter.toUpperCase()) {
        count += 1
      }
        //customer = customerObj.name;
         
        return count
    }, 0)
    return friendFirstLetterNumber;
}

var friendsCount = function(array, name) {
    //let friendsArr = customerObj.friends;
    let search = _.reduce(array, function(newArr, customerObj){
        for (let i = 0; i < customerObj.friends.length; i++) {
            if (name === customerObj.friends[i].name) {
                newArr.push(customerObj.name);
            }
        }
        return newArr
    }, [])
 return search;
};

var topThreeTags = function(array) {

//.map is to get array of nested tags arrays    
let tagsArr = array.map(function(customerObj) {
        if (customerObj.tags) {
          return customerObj.tags;
        }
    });
    
    //getting single array of Tags (no nests)
    let flatTagsArr = tagsArr.reduce((acc, val) => acc.concat(val), []);



//getting object of each tag with numbers of incidence as values 
var tagCount = flatTagsArr.reduce(function(tagObj, tags) {
if (tagObj[tags]) {
  tagObj[tags]++
} else {
  tagObj[tags] = 1;
}
return tagObj;
}, {})

//array of top 3 words with numbers shown
    let top3Tags = Object.entries(tagCount).sort(function(a, b) {
        return b[1] - a[1];
    }).slice(0,3);

//getting rid of nested array
    let final = top3Tags.reduce((acc, val) => acc.concat(val), []);
    
//getting rid of numbers    
for (var i = 0; i < final.length; i++) {
  if (typeof final[i] === 'number') {
    final.splice(i,1);
  }
};

return  final;
}

var genderCount = function (array) {
    let genderRep = _.reduce(array, function(genderObj, customerObj) {
        let gender = customerObj.gender;
        
        if (genderObj[gender]) {
            genderObj[gender] ++
        } else {
            genderObj[gender] = 1
        }
        return genderObj;
    }, {})
    return genderRep
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;

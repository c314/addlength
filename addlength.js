/**
 * Created by Clint on 9/24/2015.
 * WOD: 9/24/15
 *
 *
 * Your task is to implement a function called addLength() that is passed a string containing words separated by spaces, and returns an
 * array of strings containing those words and their length. For example:

 addLength(["apple", "pear"]) => ["apple 5", "pear 4"]
 addLength(["you", "can", "win"]) => ["you 3", "can 3", "win 3"]


 Create an empty GitHub repo called “addlength” and clone it to your local computer.

 Create an IntelliJ “Static Web” project called “addlength” within your local addlength repo directory.

 Create two files: index.html and addlength.js. The index.html should load underscore and addlength.js. To load underscore, use <script src="//philipmjohnson.github.io/ics314f15/morea/underscore/underscore-min.js"></script>.

 Implement the addLength function and test it on the sample invocations shown above.

 Commit your finished program to GitHub.

 Check that your code is on GitHub.

 Raise your hands to let me know that you have finished.
 */

//console.log("WOD");

var arr1 = ["apple", "pear"];
var arr2 = ["you", "can", "win"];

//console.log(arr1);

function length(word) {
    return word + " " + word.length;
}

function addLength(arr) {
    return _.map(arr, length);
}

console.log(addLength(arr1));
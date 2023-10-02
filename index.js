// TODO: rename this file from '.txt' to '.js'
function isPalindrome(str) {
  if (typeof str !== "string")
    {
      console.log(`The given value : ${str} in not a string! The expected data type of the value is  string.`);
      return; 
    }
    const reverseStr = str.split("").reverse().join("");

    if(str === reverseStr){
      console.log(`The given string: ${str} is an example of palindrome, the reverse value is: ${reverseStr}`);
    }else {
      console.log(`The given string: ${str} is not an example of palindrome`);
    }
}



// Call the function and pass an argument.
isPalindrome("hello")
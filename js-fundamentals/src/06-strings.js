/**
 * Reduce duplicate characters to a desired minimum
 */
exports.reduceString = function(str, amount) {

  redStr = (s,n) => s.replace(/(\w)\1+/g,"$1".repeat(n));

  return(redStr(str,amount));

};

/**
 * Wrap lines at a given number of columns without breaking words
 */
exports.wordWrap = function(str, cols) {

  var output = str.map(function(val){

    return val.replace(/(^|[ ])[^ ]{2,}([ ]|$)/g,function(val2){

         return val2.replace(' ','\n')
    })
  })

  return output;

};

/**
 * Reverse a String
 */
exports.reverseString = function(str) {

  return str.split("").reverse().join("");
};

/**
 * Check if String is a palindrome
 */
exports.palindrome = function(str) {

  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;

};

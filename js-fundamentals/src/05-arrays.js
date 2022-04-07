/**
 * Determine the location of an item in the array
 */
exports.indexOf = function(arr, item) {
    
    return arr.indexOf(item);
};

/**
 * Sum the items of an array
 */
exports.sum = function(arr) {
    
    var sum = 0;

    for (let index = 0; index < arr.length; index++) {
        sum += arr[index];
        
    }

    return sum;

};

/**
 * Remove all instances of an item from an array
 */
exports.remove = function(arr, item) {


    var result = arr.filter(x => x !== item);

    return result;

};

/**
 * Remove all instances of an item from an array by mutating original array
 */
exports.removeWithoutCopy = function(arr, item) {

    var i = arr.length;

    while (i--) {
        if (arr[i] === item) {
            arr.splice(arr.indexOf(item), 1);
        }
    }

    return arr;

};

/**
 * Add an item to the end of the array
 */
exports.append = function(arr, item) {
    
    arr.push(item);
    return arr;

};

/**
 * Remove the last item of an array
 */
exports.truncate = function(arr) {

    arr.pop();
    return arr;
};

/**
 * Add an item to the beginning of an array
 */
exports.prepend = function(arr, item) {

    arr.unshift(item);
    return arr;

};

/**
 * Remove the first item of an array
 */
exports.curtail = function(arr) {

    arr.shift();
    return arr;
};

/**
 * Join two arrays together
 */
exports.concat = function(arr1, arr2) {

    return arr1.concat(arr2);
};

/**
 * Add an item to an array in the specified position
 */
exports.insert = function(arr, item, index) {

    arr.splice(index,0,item)

    return arr;

};

/**
 * Count the number of occurrences of an item in an array
 */
exports.count = function(arr, item) {

    count = arr.filter(x => x == item).length

    return count;

};

/**
 * Find all items which container multiple occurrences in the array
 */
exports.duplicates = function(arr) {

    
    var duplicates = [];
    //console.log("This is the empty array: " + duplicates);

    var tempArray = arr.sort();
    //console.log("This is the sorted array :" + tempArray)

    for (let i = 0; i < tempArray.length; i++) {
        
        //console.log("Inside Loop cycle n: " + i)

        if (tempArray[i+1] === tempArray[i] && tempArray[i] !== tempArray[i-1]){

            //console.log("Next item is a duplicate: " + tempArray[i+1])
            duplicates.push(tempArray[i])
        }
        
    }

    //console.log("This is my final Array :" + duplicates)
    return duplicates;
};

/**
 * Square each number in the array
 */
exports.square = function(arr) {

    return arr.map(x => Math.pow(x,2));

};

/**
 * Find all occurrences of an item in an array
 */
exports.findAllOccurrences = function(arr, target) {

    
    var indexes = [];

    for (let i = 0; i < arr.length; i++) {
        
        //console.log("This is index nº :" + i)

        if(arr[i] === target){

            //console.log("found a "+ target + "element in index " + i);
            indexes.push(i);
        }       
    }

    //console.log(indexes);
    return indexes;

};

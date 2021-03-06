/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a for loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutForLoop(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] + "!";
  }
  return array;
}
/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a while loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @return {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutWhileLoop(array) {
  let i = 0;
  while (i < array.length) {
    array[i] = array[i] + "!";
    i++;
  }
  return array;
}

/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a [for/of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutForOfLoop(array) {
  let newArray = [];
  for (let elements of array) {
    newArray.push(elements + "!");
  }
  return newArray;
}

// another way that works
// function shoutForOfLoop(array) {
//   let newArray = []
// for (let elements of array) {
//   const v = elements + "!"
//   newArray.push(v)
// }
//   return newArray
//   }

/**
 * Takes in an array and returns the sum of all values
 * @param {number[]} nums
 * @returns {number} sum
 */

function sumArray(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}

/**
 * Takes in an array and returns an array of all the odd valued elements
 * @param {number[]} nums
 * @returns {array} odds
 */

function oddArray(nums) {
  let oddNums = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0) {
      oddNums.push(nums[i]);
    }
  }
  return oddNums;
}

/**
 * Takes in an array and returns an array of all the even valued elements
 * @param {number[]} nums
 * @returns {array} evens
 */

function evenArray(nums) {
  let evenNums = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      evenNums.push(nums[i]);
    }
  }
  return evenNums;
}

/**
 * Takes in array and returns the smallest number in the array
 * @param {number[]} nums
 * @returns {number} smallest value
 */

function findSmallest(nums) {
  //for (let i = 0; i < nums.length; i++) {
  return Math.min(...nums);
}
// if (nums[i]< nums[i+1]) {
//   return nums[i]
// }
//}

/**
 * Takes in array and returns the second smallest number in the array
 * You may NOT use sort
 * @param {number[]} nums
 * @returns {number} second smallest value
 */

function findSecondSmallest(nums) {
  //return arr.sort((a,b) => a-b)[i]
  // sortying is time Nlog(n) okay time but slow (Corey comment)
  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num < smallest) {
      secondSmallest = smallest;
      smallest = num;
    } else if (num < secondSmallest) {
      secondSmallest = num;
    }
  }
  return secondSmallest;
}

/**
 * Takes in array and returns the second largest number in the array
 * @param {number[]} nums
 * @returns {number} second largest value
 */

function findSecondLargest(nums) {
  let largest = nums[0];
  let secondLargest = nums[1];
  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i] > largest) {
      secondLargest = largest;
      largest = nums[i];
    } else if (nums[i] > secondLargest) {
      secondLargest = nums[i];
    }
  }
  return secondLargest;
}

/**
 * Takes in array and returns an array with all the values but with no duplicates.
 * Exp Input: [4,2,6,2,2,6,4,9,2,1] Output: [4, 2, 6, 9, 1]
 * @param {number[]} nums
 * @returns {array} nums without the duplicates
 */
// Hint: Look into the `.includes` method.
function removeDups(nums) {
  let noDups = [];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (!noDups.includes(num)) {
      noDups.push(num);
    }
  }
  return noDups;
}

module.exports = {
  shoutForLoop,
  shoutWhileLoop,
  shoutForOfLoop,
  sumArray,
  oddArray,
  evenArray,
  findSmallest,
  findSecondSmallest,
  findSecondLargest,
  removeDups,
};

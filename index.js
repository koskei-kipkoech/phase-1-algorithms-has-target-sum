function hasTargetSum(array, target) {
  // Write your algorithm here
  const numbers = {};
  for(let num of array){
    const complete = target - num;
    if(numbers[complete]){
      return true
    }
    numbers[num] = true 
  }
  return false;
}
console.log(hasTargetSum([9,8,12,4,11,7],20))
/* 
  Write the Big O time complexity of your function here
  time complexity O(n) where n is the number of elements in the array. we make a single pass throughout the array O(1)
  space complexity O(n)in the worst case we may store every number in the array.
*/

/* 
  Add your pseudocode here
  create an empty object called numbers 
  for each number in a array ;
    calculate the complement(target -current number)
    if complement exist in numbers 
      return true
    otheriwse 
      add the current number to numbers 
  return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

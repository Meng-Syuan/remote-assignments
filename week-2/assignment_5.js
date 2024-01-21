//Assignment 5: Algorithm (Advanced Optional)

function twoSum(nums, target) {
  let answer = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = nums[nums.length - 1]; j > i; j--) {
      if (target === nums[i] + nums[j]) {
        answer.push(i, j);
      }
    }
  }

  return answer;
}

console.log(twoSum([2, 7, 11, 15], 9));

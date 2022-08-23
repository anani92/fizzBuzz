let nums = [...Array(101).keys()];
nums.splice(0, 1);
// console.log(nums)
nums = nums.map((num) => {
	if (num % 3 == 0) {
		return "Fizz"
	} else if (num % 5 == 0) {
		return 'Buzz'
	} else {
		return 'FizzBuzz'
	}
})
console.log(nums)

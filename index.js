let nums = [...Array(101).keys()];
nums.splice(0, 1);
// console.log(nums)
nums = nums.map((num) => {
	if (num % 3 == 0) {
		return "Fizz"
	} else if (num % 5 == 0) {
		return 'Buzz'
	} else if (num % 3 ===0 && num % 5 === 0){
		return 'fizzbuzz'
	
	} else {
		return num
	}
})
console.log(nums)

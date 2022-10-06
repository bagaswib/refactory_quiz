function fizzbuzz() {
	var i;
	var result = document.getElementById("output");

	for (i = 1; i <= 15; i++){
		if (i % 3 == 0 && i % 5 == 0) {
			result.innerHTML += ("FizzBuzz" + " ");
		} 
		else if (i % 3 == 0) {
			result.innerHTML += ("Fizz" + " ");
		} 
		else if (i % 5 == 0) {
			result.innerHTML += ("Buzz" + " ");
		}
		else result.innerHTML += (i + " ");
	}
}
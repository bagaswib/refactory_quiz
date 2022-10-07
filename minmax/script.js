function minmax() {
	var result = document.getElementById("result");
	let input = [5, 4, 9, 10, 60];
	let min = input[0];
	let max = input[0];

	for (let i = 0; i < input.length; i++) {
		if (input[i] < min) {
			min = input[i];
		}

		if (input[i] > max) {
			max = input[i];
		} 
	}
	result.innerHTML = ("Min = " + min + " dan Max = " + max);
}
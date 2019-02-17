function staircase(n) {
	let i = 1;
	let text = "";
	while (i <= n) {
			for (let j = 0; j < n-i; j++ ) {
					text += " ";
			}
			for (let k = 0; k < i; k++) {
					text += "#";
			}
			text += "\n"
			i++;
	}
	console.log(text);
}
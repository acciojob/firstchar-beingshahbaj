function firstChar(text) {
  // your code here
	if (text === " ") {
		return /' ';
	} else {
		return text.charAt(0);
	}
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));

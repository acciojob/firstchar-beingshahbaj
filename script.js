function firstChar(text) {
  // your code here
	for char in text:
        if char != ' ':
            return char
    return ''
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));

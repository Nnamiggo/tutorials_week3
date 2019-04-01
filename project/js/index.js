const paragraph = document.createElement('p');
console.log(paragraph);
paragraph.textContent = "I'm a brand new paragraph.";
console.log(paragraph);
paragraph.innerHTML = "I'm a paragraph with <strong>bold</strong> text.";
const text = document.createTextNode("I'm a new text node.");
console.log(text);

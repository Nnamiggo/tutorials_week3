// let button = document.getElementById('changeBackground');
// button.addEventListener('click', () => {
//   // action will go here
//   document.body.style.backgroundColor = 'fuchsia';
// });


let button = document.getElementById('changeBackground');

button.addEventListener('click', () => {
  document.body.style.backgroundColor = 'fuchsia';
});

// Assign image element
const img = document.querySelector('img');

console.log(img.hasAttribute('src'));
img.getAttribute('src');
img.removeAttribute('src');
img.setAttribute('src', 'img2.jpg');
img.src="img1.jpg"

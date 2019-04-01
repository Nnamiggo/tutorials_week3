// let button = document.getElementById('changeBackground');
// button.addEventListener('click', () => {
//   // action will go here
//   document.body.style.backgroundColor = 'fuchsia';
// });


let button = document.getElementById('changeBackground');

button.addEventListener('click', () => {
  document.body.style.backgroundColor = 'fuchsia';
});

let navLink = document.getElementById('nav');
navLink.href = 'https://www.wikipedia.org';
navLink.textContent = 'Navigate to Wikipedia';

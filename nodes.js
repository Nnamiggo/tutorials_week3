const h1 = document.getElementsByTagName('h1')[0];
const p = document.getElementsByTagName('p')[0];
const ul = document.getElementsByTagName('ul')[0];
// Assign html object to html variable
const html = document.documentElement;
ul.firstChild.style.background = 'yellow';
for (let element of ul.children) {
  element.style.background = 'yellow';
}
document.body.children[3].lastElementChild.style.background = 'fuchsia';
const tiger = ul.children[1];
tiger.nextElementSibling.style.background = 'coral';
tiger.previousElementSibling.style.background = 'aquamarine';

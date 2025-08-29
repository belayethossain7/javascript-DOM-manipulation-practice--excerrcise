// 1. parent node

const mainContainer = document.getElementById('main-container');

// 2. create child node

const placeSection = document.createElement('section');

//create h1
const h1 = document.createElement('h1');
h1.innerText = 'places I Want to visit';
placeSection.appendChild(h1);


const ul = document.createElement('ul');
placeSection.appendChild(ul);


const li1 = document.createElement('li');
li1.innerText = 'Bangladesh';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'USA';
ul.appendChild(li2);



// 3. append placeSetion to the mainContainer
mainContainer.appendChild(placeSection);



// easier to create HTML

const bookSection = document.createElement('section');

bookSection.innerHTML = `
<h1>Books I need to Read</h1>
<ul>
    <li>PLS</li>
    <li>TOC</li>
    <li>FEDS</li>
    <li>JS</li>
</ul>

`

mainContainer.appendChild(bookSection);
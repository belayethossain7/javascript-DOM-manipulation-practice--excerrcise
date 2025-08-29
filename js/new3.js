console.log('new3 js added');

// get the parent 
const thirdList = document.getElementById('third-list');



//create child 

const li = document.createElement('li');
li.innerText = 'Belayet';


// append parent to child

thirdList.appendChild(li);
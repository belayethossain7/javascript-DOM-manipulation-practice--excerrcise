// const check = document.getElementById('player-container').childNodes[3].childNodes[1].parentNode.parentNode.parentNode.parentNode



//create element and set innertext or innerhtml

const nchild = document.createElement('li');
nchild.innerText = 'New born footballer here';

//find the parrent where you will add the child

const player = document.getElementById('player-list');


//append the child to the parent
player.appendChild(nchild);

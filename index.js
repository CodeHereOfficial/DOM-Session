// Import stylesheets
import './style.css';

// Write Javascript code!
var changeHeading = document.getElementById('heading');
changeHeading.innerHTML = 'DOM SESSION';

document.getElementById('para2').style.backgroundColor = 'yellow';
document.getElementById('para2').style.fontWeight = 'bold';

var styleLists = document.getElementsByClassName('list-items');
styleLists[1].style.color = 'blue';
styleLists[3].style.color = 'blue';

var i;
for (i = 0; i < styleLists.length; i++) {
  styleLists[i].style.backgroundColor = 'grey';
  styleLists[i].style.fontSize = '20px';
}

var title = document.createElement('title');
title.innerHTML = "Dom Tutorial";
var head = document.head;
head.appendChild(title)

var form= document.getElementById('addform');
var listItem = document.getElementById('list');

form.addEventListener('submit',(e)=> {
  e.preventDefault();
  var newItem = document.getElementById('item').value;
 var li = document.createElement('li');
 li.className="list-group-item";
 li.innerHTML = newItem;

 var button = document.createElement('button');
 button.className = "btn btn-danger";
 button.innerHTML= 'X';

 li.appendChild(button);
 listItem.appendChild(li);

});

listItem.addEventListener('click', (e) =>{
  if(e.target.classList.contains('btn')){
    var li = e.target.parentElement;
    listItem.removeChild(li);
  }
})
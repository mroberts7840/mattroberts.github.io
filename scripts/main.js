var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Linesman.jpg') {
      myImage.setAttribute('src', 'images/Linesman2.jpg');
    } else {
      myImage.setAttribute('src','images/Linesman.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1)');
function setUserName() {
	var myName = prompt('Please enter your name');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'The Basics of Running The Line, ' + myName;
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'The Basics of Running The Line, ' + storedName;
}
myButton.onclick = function() {
	setUserName();
}

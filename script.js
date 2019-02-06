var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItem = document.querySelectorAll("li");
var deletebtn = document.getElementById("delete");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	//add markList function to each new item
	li.addEventListener("click", markList);
	//add delete button to each new item
	var deletebtn = document.createElement("button");
	deletebtn.appendChild(document.createTextNode("Delete"));
	li.appendChild(deletebtn);
	deletebtn.onclick = deleteItem;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function markList(){
	this.classList.toggle("done"); 
}

for (var i = 0; i < listItem.length; i++) {
	listItem[i].addEventListener("click", markList);
}

function deleteItem(e){
	e.target.parentNode.remove();
}

deletebtn.addEventListener("click", deleteItem);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
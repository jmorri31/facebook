var button = document.getElementById("enter");
var input = document.getElementById("input");
var ul = document.querySelector("ul");

function inputLength(){
	return input.value.length;
}

function append(){
	var li = document.createElement("li");
	var deleteButton = document.createElement("button");
	li.appendChild(document.createTextNode(input.value));
	deleteButton.appendChild(document.createTextNode("delete"));
	ul.appendChild(li);
	ul.appendChild(deleteButton);
	input.value = "";
}


function addListAfterClick(){
	if(inputLength()>0){
		append();
	}	
}

function addListAfterPress(event){
	if(inputLength()>0 && event.keyCode ===13){
		append();
	}
}

button.addEventListener("click",addListAfterClick);

input.addEventListener("keypress",addListAfterPress);

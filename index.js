
let ul = document.querySelector(".list");

let btn = document.querySelector(".btn");
let text = document.querySelector(".task-input");

btn.onclick = function() {
let newDiv = document.createElement("div");
newDiv.classList.add("list__item");
let newinput= document.createElement("input");
 newinput.classList.add("list__item-checkbox");
 newinput.setAttribute('type', 'checkbox');
let newlabel= document.createElement("label");
newlabel.setAttribute('for', 'checkbox');
newlabel.innerHTML=text.value;

ul.prepend(newDiv);
newDiv.prepend(newinput);
newDiv.append(newlabel);
};

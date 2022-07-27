"use strict";

const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
///on page load we check if something exist
//after reload either populates with localstora if it exists with values or show an empty array
const items = JSON.parse(localStorage.getItem("items")) || [];

function addItem(e) {
  e.preventDefault(); //prevents the page from reloading
  const text = this.querySelector("[name=item]").value;
  const item = {
    text,
    done: false,
  };
  items.push(item);
  populateList(items, itemsList);
  //we want stuff to persist, so when we refresh the webpage , it needs to keep the list
  //you can check localStore in Application -> localStorage or write localStorage to check for objects
  //localStorage can only have strings, it que convert anything to string
  //we need to stringify before passing it
  //to convert it again we just need to use JSON.parse(...)
  localStorage.setItem("items", JSON.stringify(items));
  this.reset(); //reset clears the input field after each submit
}

//NOTICE: every time we add an item, we are recreating the entire list
function populateList(plates = [], platesList) {
  //with default of empty array
  platesList.innerHTML = plates
    .map((plate, i) => {
      return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${
        plate.done ? "checked" : ""
      } />
        <label for="item${i}">${plate.text}</label>
      </li>
    `;
    })
    .join("");
}

//we want the toggle to also persist
//careful , when we run the script the checkboxes do not exist at the time we are listening
//event delegation problem - se we have to have a buddy and listen for the something that exists
//analogy: Hey parent, when your children inputs, can you please pass the click ? responsible parent, negligent children
function toggleDone(e) {
  if (!e.target.matches("input")) return; //skip this unless it's an input we want
  const el = e.target;
  //console.log(el.dataset.index); gives the index of what was clicked
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList); //now it keeps the toggle items , toggled after
}

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);

//populates the list with local storage - the items persist with reload
populateList(items, itemsList);

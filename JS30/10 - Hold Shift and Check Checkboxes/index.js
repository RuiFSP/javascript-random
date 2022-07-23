"strict";

const checkboxes = document.querySelectorAll(".inbox input[type=checkbox]");

let lastchecked;

function handlercheck(e) {
  //check if they had the shift key down
  //AND check that they are checking it
  let inBetween = false; //flag variable
  if (e.shiftKey && this.checked) {
    //go ahead and do what we please
    //loop over every single checkbox
    checkboxes.forEach((checkbox) => {
      console.log(checkbox);
      if (checkbox === this || checkbox == lastchecked) {
        inBetween = !inBetween;
        console.log("Starting to check them in between");
      }

      if (inBetween) {
        checkbox.checked = true; //check.check is a native property for checkbox
      }
    });
  }

  lastchecked = this;
}

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handlercheck)
);

//when we use a css variable (var) we can updated with JS

const inputs = document.querySelectorAll(".controls input"); //nodeList

function handlerUpdate() {
  // console.log(this.value);
  const suffix = this.dataset.sizing || ""; //no sufix for hex code
  //console.log(this.dataset); //dataset is an object that contains all data attributes
  //console.log(suffix);
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach((input) => input.addEventListener("change", handlerUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handlerUpdate));

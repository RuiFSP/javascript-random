const result = document.querySelector(".result");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");

decrease.addEventListener("click", ()=> {
  result.innerHTML--;
  color()
})

reset.addEventListener("click",() => {
  result.innerHTML = 0;
  color()
})

increase.addEventListener("click", () => {
  result.innerHTML++;
  color()
})

function color() {

  if(result.innerHTML < 0) {
    result.style.color = "#f03e3e";
  } else if(result.innerHTML > 0) {
    result.style.color = "#37b24d";
  } else {
    result.style.color = "#ffffff"
  }
}
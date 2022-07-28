"use strict";

const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 100;

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero; //destructuring
  let { offsetX: x, offsetY: y } = e; //useful to get the position of cursor

  if (this !== e.target) {
    x += e.target.offsetLeft;
    y += e.target.offsetTop;
  }

  const xWalk = Math.round((x / width) * walk - walk / 2); //(-50 - 50)
  const yWalk = Math.round((y / height) * walk - walk / 2); //(-50 - 50)

  text.style.textShadow = `
  ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7), 
  ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
  ${yWalk}px ${xWalk * -1}px 0 rgba(255,255,0,0.7),
  ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
  `;
}

hero.addEventListener("mousemove", shadow);

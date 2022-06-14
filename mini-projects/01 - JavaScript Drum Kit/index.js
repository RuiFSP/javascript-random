$(document).on('keydown', (event) => {

  const key = $(`.key[data-key="${event.keyCode}"]`).eq(0);
  const audio = $(`audio[data-key="${event.keyCode}"]`).get(0);
  //.eq(0) or .get(0) is essencial because selector return an array and we want the first position. I can not use [0] , because it´s like using DOM and not jquery. Can not mix commands

  if(!audio) return; // stop the function from running all together
  
  audio.currentTime = 0; //Sets or returns the current playback position in an audio (in seconds)

  audio.play();

  key.addClass('playing');


});

const keys = $('.key').get(0); //get an array with all the keys
// need to look for each element in array for the transion end

console.log(keys);
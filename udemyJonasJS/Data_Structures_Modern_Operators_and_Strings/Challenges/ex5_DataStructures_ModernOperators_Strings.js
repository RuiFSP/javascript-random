"use strict";

//data from some kind od data API
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

//show data in better format
//note the '+ sign acts has a separator
//aeroprot code are the first 3 letters

const getCode = (str) => str.slice(0, 3).toUpperCase();

for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");

  const output = `${type.startsWith("_Delayed") ? "🛑" : ""} ${type.replaceAll(
    "_",
    " "
  )} from ${getCode(from)} to ${getCode(to)} ${time.replace(
    ":",
    "h"
  )}`.padStart(46);

  console.log(output);
}

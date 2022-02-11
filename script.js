/*const today = new Date();

let hour = today.getHours();
let min = today.getMinutes();

let time = hour + ":" + min;

console.log(hour + " : " + min);

var x = (document.getElementById("hour").innerHTML = time);*/

let aTime = document.getElementById("time");

setInterval(function () {
  var currentTime = new Date(),
    hours = currentTime.getHours(),
    minutes = currentTime.getMinutes();

  /*hours += hours < 10 ? "0" : "";
  minutes += minutes < 10 ? "0" : "";*/

  aTime.innerHTML = addZeroes(hours, 2) + " " + addZeroes(minutes, 2);
}, 1000);

function addZeroes(num, len) {
  var numberWithZeroes = String(num);
  var counter = numberWithZeroes.length;

  while (counter < len) {
    numberWithZeroes = "0" + numberWithZeroes;

    counter++;
  }

  return numberWithZeroes;
}

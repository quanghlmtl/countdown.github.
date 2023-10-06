let endDate = new Date("02/10/2024 00:00:00").getTime();
let check = setInterval(function () {
  let now = new Date().getTime();
  let distance = (endDate - now)/1000;
  let day = Math.floor(distance / (60*60*24));
  let hour = Math.floor(distance / (60*60) % 24);
  let minute = Math.floor(distance / 60 % 60);
  let second = Math.floor(distance % 60 );
  document.getElementById('day').innerText = day;
  document.getElementById('hour').innerText = hour;
  document.getElementById('minute').innerText = minute;
  document.getElementById('second').innerText = second;
  if( distance <= 0){
    clearInterval(check);
  }
}, 1000)
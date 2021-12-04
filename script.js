let newyear = new Date('Jan 1, 2022 00:00:00').getTime();

function count(){
  let waktuskrg = new Date().getTime();
  let gap = newyear - waktuskrg;
  
  let second = 1000;
  let minutes = second * 60;
  let hours = minutes * 60;
  let day = hours * 24;
  
  let d = Math.floor(gap / (day));
  let h = Math.floor((gap % (day)) / hours);
  let m = Math.floor((gap % (hours)) / minutes);
  let s = Math.floor((gap % (minutes)) / second);
  
  document.querySelector('.new-year .count .day').innerHTML = d;
  document.querySelector('.new-year .count .hours').innerHTML = h;
  document.querySelector('.new-year .count .minutes').innerHTML = m;
  document.querySelector('.new-year .count .sec').innerHTML = s;
  
  if (d <= 0 && h <= 0 && m <= 0 & s <= 0) {
    Location.href = 'newyear.html';
  }
}

setInterval(count, 1000);
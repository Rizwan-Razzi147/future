let btn = document.getElementById("btn")
var hoursPrint = document.getElementById('hours')
var minutersPrint = document.getElementById('minutes')
var secondsPrint = document.getElementById('seconds')
var dayss = document.getElementById('days')


var titles
var dates

btn.addEventListener("click", ()=>{
titles = document.getElementById("titleInput").value
dates = document.getElementById("dateInput").value
data()
})

function data(){

    let a = new Date(dates);
    let current = new Date();
    let diff = a - current 
    var dayss = current.getDay()
    var hours = current.getHours()
    var minutes = current.getMinutes()
    var seconds = current.getSeconds()
    document.getElementById("tilesValue").innerHTML = "Your Plan:" + titles;
  document.getElementById("output").innerHTML = "Future time: " + a;
  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;
  days.innerHTML = "Days:" + "  " + d;
  hoursPrint.innerHTML =  h < 10 ? "0" + "Hours:" + "  " + h : "Hours:" + "  " + h ;
  minutersPrint.innerHTML =  m < 10 ? "" + "Minutes:" + "  " +  m : "Minutes:" + "  " + m;
  secondsPrint.innerHTML = "Seconds:" + "  " + s < 10 ? "0" + s : "Seconds:" + "  " + s;



//   days.innerHTML = "Days:" + "   " + dayss
//   hoursPrint.innerHTML = "Hours:" + "   " + hours
//   minutersPrint.innerHTML= "minutes:" + "   " +  minutes
//   secondsPrint.innerHTML = "seconds:" +  "   " + seconds


    
        setInterval( function(){
            data()
        }, 1000)

}




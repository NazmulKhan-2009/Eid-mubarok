function countDown() {

  // console.log('check');
  
var currentTime=new Date().getTime()
var eventDate=new Date('august 1,2020 00:00:00').getTime()

var realMs=eventDate-currentTime
// console.log(realMs);

if(realMs>0){
  var sec=Math.floor(realMs/1000)
var min=Math.floor(sec/60)
var hour=Math.floor(min/60)
var day=Math.floor(hour/24)

hour=hour%24
min=min%60
sec=sec%60

day=(day<10) ? '0'+day:day
hour=(hour<10) ? '0'+hour:hour
min=(min<10) ? '0'+min:min
sec=(sec<10) ? '0'+sec:sec




document.getElementById('day').innerHTML=day+' '
document.getElementById('hour').innerHTML=hour+''
document.getElementById('min').innerHTML=min+''
document.getElementById('sec').innerHTML=sec

setInterval(() => {
  countDown()
},1000);

}else{
  
  document.getElementById('day').innerHTML='00'
  document.getElementById('hour').innerHTML='00'
  document.getElementById('min').innerHTML='00'
  document.getElementById('sec').innerHTML='00'

}




}
countDown()

document.querySelector("html").addEventListener("mousemove",move)

function move() { 
      var box=document.querySelectorAll('.box');
      box.forEach(function(box){
        let x=(box.getBoundingClientRect().left)+(box.clientWidth/2);
      let y=(box.getBoundingClientRect().top)+(box.clientHeight/2);
      let radian=Math.atan2(event.pageX-x,event.pageY-y);
      let rot=(radian * (180/Math.PI) * -1)+270;
      box.style.transform='rotate('+rot+'deg)';

      })
      

 
}
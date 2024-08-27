let main = document.querySelector("#Main")
let img = document.querySelector('.img-div')



let cusor = document.querySelector(".cursor")
 main.addEventListener("mousemove", function(dets){
   //  console.log(dets.x);
   gsap.to(cusor,{
      x:dets.offsetX,
      y:dets.offsetY,
      duration:0.3,
       ease:"ease.in"

   })
 });

 
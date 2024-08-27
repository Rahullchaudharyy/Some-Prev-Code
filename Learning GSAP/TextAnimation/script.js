function breakItCombineIt(){
    let h1 = document.querySelector('h1')
let h1Text = h1.textContent

let splited = h1Text.split("")
let clutter = ''
let half = splited.length/2

splited.forEach(function (txt,index) {
    if(half>index){
        clutter += `<span class = "firstHalf">${txt}</span>`
    }else{
        clutter += `<span class = "secondHalf">${txt}</span>`
        
    }
    
})
h1.innerHTML = clutter;
// console.log(clutter);
}
breakItCombineIt()

gsap.from("h1 .firstHalf",{
    y:70,
    duration:0.6,
    delay:0.5,
    opacity:0,
    stagger:0.15,
    ScrollTrigger:{
        scroll:''
    }
})
gsap.from("h1 .secondHalf",{
    y:70,
    duration:0.6,
    delay:0.5,
    opacity:0,
    stagger:-0.15
})
// gsap.to("#container",{
//     x:900,
//     duration:2,
//     repeat:-1,
//     yoyo:true,
    
// })
// gsap.to("#container1",{
//     x:900,
//     duration:1,
//     repeat:-1,
//     yoyo:true,
//     rotate:360,
//     borderRadius:100,

// })
// gsap.to("#container2",{
//     x:900,
//     duration:2,
//     repeat:-1,
//     yoyo:true,
//     rotate:360,
//     borderRadius:100,

// })
// gsap.to("#container2",{
//     x:900,
//     duration:2.5,
//     repeat:-1,
//     yoyo:true,
//     rotate:360,
//     borderRadius:100,

// })

// gsap.from(".headings h1",{
//     y:200,
//     opacity:0,
//     stagger:0.3,
//     repeat:2,
//     yoyo:true
// })

gsap.from("#page1 .box",{
    scale:4,
    delay:1,
    duration:2,
    
})
gsap.from("#page2 .box",{
    scale:3,
    duration:2,
    // scrollTrigger:{
    //     trigger:"#page2 .box",
    //     scroller:"body",
    //     markers:true,
    //     start:"top 60%",
    //     end:"top 30%",
    //     scrub:5
    // }

    
})

gsap.from("#page3 .box",{
    scale:0,
    delay:1,
    duration:2,
    rotate:360,

})
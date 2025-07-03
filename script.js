gsap.to(".spongebob",{
    scale:2,
    duration:3,
    repeat:-1,
    yoyo:true,
    rotation:360,
    x: 400,
})

gsap.to('.football',{
    scale:2,
    duration:1,
    // repeat:-1,
    yoyo:true,

    onComplete: ()=>{
     gsap.fromTo('.football',{
        x:400,
        y:200,
     },{
        x:100,
        y:300,
        repeat:-1,
        yoyo:true,
     })
    }
        

})
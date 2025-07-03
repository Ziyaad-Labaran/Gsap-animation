gsap.to(".spongebob",{
    scale:2,
    duration:3,
    repeat:-1,
    yoyo:true,
    rotation:660,
    x:400,
        y:100,
})

gsap.to('.football',{
    scale:2,
    duration:2,
    yoyo:true,

    onComplete: ()=>{
     gsap.fromTo('.football',{
        x:200,
        y:400,
        opacity:0,
     },{
        x:-50,
        y:300,
        repeat:-1,
        yoyo:true,
        scale:3,
        opacity:1,
     })
    }
})
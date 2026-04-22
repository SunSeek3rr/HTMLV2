const cursor = document.querySelector("[data-class=customCursor]");
const cursorImg = document.querySelector("[data-class=customCursor] > img");
const imgContainer = document.querySelector("[data-class=img__container]");
const imgStep1 = document.querySelector("[data-class~=img--1]");
const imgStep2 = document.querySelector("[data-class~=img--2]");
const imgStep3 = document.querySelector("[data-class~=img--3]");
const imgStep4 = document.querySelector("[data-class~=img--4]");
const imgStep5 = document.querySelector("[data-class~=img--5]");
const imgStep6 = document.querySelector("[data-class~=img--6]");
const imgStep7 = document.querySelector("[data-class~=img--7]");
const imgStep8 = document.querySelector("[data-class~=img--8]");
const imgStep9 = document.querySelector("[data-class~=img--9]");
const imgStep10 = document.querySelector("[data-class~=img--10]");
const imgStep11 = document.querySelector("[data-class~=img--11]");


gsap.set(cursor, { xPercent: -50, yPercent: -50});

// const colors = ['red', 'blue', 'yellow', 'pink'];
const imgCursor = [ 'assets/cursor2.png', 'assets/cursor3.png', 'assets/cursor4.png', 'assets/cursor1.png']
let i = 0;

document.addEventListener('mousemove', (e) =>{
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: .24,
        ease: "power1.out",
    });

});

let previousTime = 0;

function animate() {
    setTimeout(()=>{
        i++;
        cursorImg.src = imgCursor[ i % 4 ];

        window.requestAnimationFrame( () => {
            animate();
        } );

    }, 776/2);

}
let tl = gsap.timeline();

tl.to(imgStep1, {
    scrollTrigger: {
        trigger :imgStep1,
        start: "top top",
        end: "bottom center",
        scrub: true,
        pin: true    
    },
    opacity:0,
    onComplete: () => {
        gsap.to(imgStep2, {
            opacity:1,
            duration: 2,
            ease: "power2.out",
            onComplete: ()=>{
                gsap.to(imgStep3, {
                    opacity:1,
                    duration: 2,
                    ease: "power2.out",
                    onComplete: () => {
                        gsap.to(imgStep4, {
                            opacity:1,
                            duration: 2,
                            ease: "power2.out",
                        });
                    }
                });
            }
        });
    }
});

function flowerGrowth () {
}

// tl.to(imgStep6, {
//     scrollTrigger: {
//         trigger :imgStep6,
//         markers: true,
//         start: "top top",
//         end: "bottom center",
//         scrub: true,
//         pin: true
//     },
//     scale : 12,
//     y:3400,
//     opacity:0,
//     markers: true,
//     onComplete : () => {
//         tl.to(imgStep7, {
//             scrollTrigger: {
//                 trigger :imgStep7,
//                 markers: true,
//                 start: "top top",
//                 end: "bottom center",
//                 scrub: true,
//             },
//             opacity: 2
//         })
//     }
// })

// tl.to(imgStep7, {
//     scrollTrigger: {
//         trigger :imgStep7,
//         markers: true,
//         start: "top top",
//         end: "bottom center",
//         scrub: true,
//     },
//     opacity: 2
// })


window.requestAnimationFrame( () => {
    animate();
} );

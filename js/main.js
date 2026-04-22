const cursor = document.querySelector("[data-class=customCursor]");
const imgTest = document.querySelector("[data-class=imgTest]");
const imgTest1 = document.querySelector("[data-class=imgTest-1]");
const imgTest2 = document.querySelector("[data-class=imgTest-2]");

gsap.set(cursor, { xPercent: -50, yPercent: -50});

const colors = ['red', 'blue', 'yellow', 'pink'];
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

        gsap.to(cursor, {
            backgroundColor: colors[i % 4],
            duration: .24,
            ease: "power2.out",
        });

        window.requestAnimationFrame( () => {
            animate();
        } );

    }, 776);

}

gsap.to(imgTest1, {
    scrollTrigger: {
        trigger :imgTest1,
        markers: true,
        start: "top top",
        end: "bottom center",
        scrub: true,
        pin: true
    },
    scale : 12,
    y:3400,
    opacity:0,
    markers: true,
})

gsap.to(imgTest2, {
    scrollTrigger: {
        trigger :imgTest2,
        markers: true,
        start: "top top",
        end: "bottom center",
        scrub: true,
    },
    opacity: 1
})

window.requestAnimationFrame( () => {
    animate();
} );

const cursor = document.querySelector("[data-class=customCursor]");
const cursorImg = document.querySelector("[data-class=customCursor] > img");
const frameContainer = document.querySelector("[data-class=frame__container]");
const frameStep1 = document.querySelector("[data-class~=frame--1]");
const frameStep2 = document.querySelector("[data-class~=frame--2]");
const frameStep3 = document.querySelector("[data-class~=frame--3]");
const frameStep4 = document.querySelector("[data-class~=frame--4]");
const frameStep5 = document.querySelector("[data-class~=frame--5]");
const frameStep6 = document.querySelector("[data-class~=frame--6]");
const frameStep7 = document.querySelector("[data-class~=frame--7]");
const frameStep8 = document.querySelector("[data-class~=frame--8]");
const frameStep9 = document.querySelector("[data-class~=frame--9]");
const frameStep10 = document.querySelector("[data-class~=frame--10]");
const frameStep11 = document.querySelector("[data-class~=frame--11]");


gsap.set(cursor, { xPercent: -50, yPercent: -50});

// const colors = ['red', 'blue', 'yellow', 'pink'];
const imgCursor = [ 'assets/cursor2.png', 'assets/cursor3.png', 'assets/cursor4.png', 'assets/cursor1.png']
let i = 0;

window.addEventListener('mousemove', (e) =>{
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: .24,
        ease: "power1.out",
        overwrite : 'auto'
    });

});

let previousTime = 0;

let frameAnim = { frameNum: 1 };

function updateFrames() {
    const frame = frameAnim.frameNum;
    const frameId = Math.round(frame).toString();

    const active = document.querySelector('[data-class~=frame--active]');
    if (active) {
        const values = active.getAttribute('data-class').split(/\s+/);
        active.setAttribute('data-class', values.filter(v => v !== 'frame--active').join(' '));
    }

    const newActive = document.querySelector(`[data-class~=frame--${frameId}]`);
    if (newActive) {
        const values = newActive.getAttribute('data-class').split(/\s+/);
        if (!values.includes('frame--active')) values.push('frame--active');
        newActive.setAttribute('data-class', values.join(' '));
    }

    console.log(frameAnim.frameNum);
}

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: "[data-class=frame__container]",
        start: "top top",
        end: "+=9000",
        scrub: true,
        pin: true,
        // markers: true
    }
});


tl.to(frameAnim, {
    frameNum: 4,
    ease: "none",
    onUpdate: updateFrames
});


tl.to("[data-class~=frame--4]", {
    scale: 10,
    y: 2700,
    ease: "none",
    duration : .2
}, ">"); // après la dernière

tl.to("[data-class~=frame--rabbit]", {
    opacity: 1,
    ease: "none",
    duration: .2
}, "<"); // en même temps

tl.to("[data-class~=frame--rabbit]", {
    opacity: 0,
    ease: "none",
    duration: .1,
    delay: .2
}, ">");
tl.to("[data-class~=frame--4]", {
    scale: 1,
    y: 0,
    ease: "none",
    duration : .1
}, ">");

tl.to(frameAnim, {
    frameNum: 11,
    ease: "none",
    onUpdate: updateFrames
});


tl.set("[data-class~=frame--rabbit]", { opacity: 0 });


function animate() {
    setTimeout(()=>{
        i++;
        cursorImg.src = imgCursor[ i % 4 ];
        
        window.requestAnimationFrame( () => {
            animate();
        } );
        
    }, 776/2);
    
}


window.requestAnimationFrame( () => {
    animate();
} );

/* 

Dialogue mixé avec début des fleurs qui poussent -> flashback lapin -> fin des fleurs qui poussent

*/
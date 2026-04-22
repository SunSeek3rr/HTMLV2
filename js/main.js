const cursor = document.querySelector('.customCursor');

gsap.set(".customCursor", { xPercent: -50, yPercent: -50});

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

function animate(timestamp) {
    setTimeout(()=>{
        i++;

        gsap.to(cursor, {
            backgroundColor: colors[i % 4],
            duration: .24,
            ease: "power2.out",
        });

        window.requestAnimationFrame( ( timestamp ) => {
            animate( timestamp );
        } );

    }, 82);

}

// window.requestAnimationFrame( ( timestamp ) => {
//     animate( timestamp );
// } );

(window).scroll(function(){
    if ((this).scrollTop() > 1) {
       ('[data-class=rabbit] [data-class^=dialogue__texte]').addAttribute('active');
    } else {
       ('[data-class=rabbit] [data-class*=active]').removeAttribute('active');
    }
});
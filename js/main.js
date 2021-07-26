CustomEase.create('loadingEase', '.72,.05,.21,.99');
window.addEventListener("load", () => {
    new TimelineMax()
        .to('.loading-text', 1, {
            transform: "translate3d(0, -250px, 0)",
            opacity: 0,
            ease: 'loadingEase'
        })
        .to('.loading', 1, {
            bottom: "100%",
            ease: 'loadingEase',
            delay: -0.8
        })
        .set(['.loading', '.loading-text'], { autoAlpha: 0 });
    comeIn();
    if (window.innerHeight < 665) {
        document.querySelector(".pelk-menu").style.overflow = "auto";
    }
});

function comeIn() {
    let done = [false];
    let sections = [
        document.querySelectorAll('.works-banner')[0],
    ];
    let offsets = [0];
    let funcs = [
        function () {
            if (document.querySelectorAll(".works-banner").length > 0) {
                new TimelineMax()
                    .from('.banner-title', 1, {
                        transform: "translate3d(0, 120px, 0) skewY(-7deg)",
                        opacity: 0,
                        ease: 'loadingEase',
                        delay: 0.2
                    })
                    .from('.banner-post-title', 1, {
                        transform: "translate3d(0, 100px, 0) skewY(-5deg)",
                        opacity: 0,
                        ease: 'loadingEase',
                        delay: -0.9
                    })
                    .from('.go-to-works', 1, {
                        transform: "translate3d(0, 100px, 0) skewY(-5deg)",
                        opacity: 0,
                        ease: 'loadingEase',
                        delay: -0.95
                    });
                new TimelineMax()
                    .from('.banner-image-holder', 1, {
                        transform: "translate3d(0, 100px, 0) skewY(5deg)",
                        opacity: 0,
                        ease: 'loadingEase',
                        delay: 0.25
                    });
            }
        },
    ];
    function runIt() {
        let distanceToTop = [];
        for (let i = 0; i < done.length; i++) {
            if (sections[i] !== undefined) {
                distanceToTop[i] = sections[i].getBoundingClientRect().top - window.innerHeight;
                if (!done[i]) {
                    if (distanceToTop[i] <= -offsets[i]) {
                        funcs[i]();
                        done[i] = true;
                    }
                }
            }
        }
    }
    runIt();
}

function menu() {
    document.querySelectorAll(".close-menu")[0].addEventListener("click", function () {
        new TimelineMax()
            .to('.logo-row', 1, {
                transform: "translate3d(0, -50px, 0) skewY(-5deg)",
                opacity: 0,
                ease: 'loadingEase'
            })
            .to('.main-menu-nav', 1, {
                transform: "translate3d(0, -50px, 0) skewY(-5deg)",
                opacity: 0,
                ease: 'loadingEase',
                delay: -0.9
            })
            .to('.social-icons', 1, {
                transform: "translate3d(0, -50px, 0) skewY(-5deg)",
                opacity: 0,
                ease: 'loadingEase',
                delay: -0.9
            });
        new TimelineMax()
            .to('.pelk-menu', 1, {
                bottom: "100%",
                ease: 'loadingEase',
                delay: 0.5
            })
            .set(".pelk-menu", {
                autoAlpha: 0
            });
    }, false);

    document.querySelectorAll(".menu-icon")[0].addEventListener("click", function () {
        new TimelineMax()
            .set(".pelk-menu", {
                bottom: "100%",
                autoAlpha: 1
            })
            .to('.pelk-menu', 1, {
                bottom: "0",
                ease: 'loadingEase'
            });
        new TimelineMax()
            .to('.social-icons', 1, {
                transform: "translate3d(0, 0, 0) skewY(0deg)",
                opacity: 1,
                ease: 'loadingEase',
                delay: 0.2
            })
            .to('.main-menu-nav', 1, {
                transform: "translate3d(0, 0, 0) skewY(0deg)",
                opacity: 1,
                ease: 'loadingEase',
                delay: -0.9
            })
            .to('.logo-row', 1, {
                transform: "translate3d(0, 0, 0) skewY(0deg)",
                opacity: 1,
                ease: 'loadingEase',
                delay: -0.9
            });

    }, false);
}
menu();

function pageAnimations() {
    ScrollReveal({ distance: '30px' }).reveal('.title', {
        delay: 200,
    });
    ScrollReveal({ distance: '50px' }).reveal('.text', {
        delay: 300,
        duration: 1000,
    });
    ScrollReveal({ distance: '50px' }).reveal('.image-holder', {
        delay: 100,
        duration: 1000,
    });
    ScrollReveal({ distance: '50px' }).reveal('.button', {
        delay: 300,
        duration: 1000,
    });
    ScrollReveal({ distance: '20px' }).reveal('.image-1', {
        delay: 100,
        duration: 1000,
    });
    ScrollReveal({ distance: '20px' }).reveal('.image-2', {
        delay: 200,
        duration: 1000,
    });
    ScrollReveal({ distance: '20px' }).reveal('.image-3', {
        delay: 300,
        duration: 1000,
    });
    ScrollReveal({ distance: '20px' }).reveal('.image-4', {
        delay: 400,
        duration: 1000,
    });
    ScrollReveal().reveal('.footer', {
        delay: 200,
        duration: 1000,
    });
}
pageAnimations();





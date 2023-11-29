import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

//Nav change bg color on scroll
const nav = document.querySelector('.navbar_component');

gsap.to(nav, {
    background: 'rgba(0, 0, 0, 1)',
    duration: 0.3,
    scrollTrigger: {
        trigger: nav,
        start: '+=100',
        toggleActions: 'play none none reverse',
    },
});
//Why section cards
const whyCards = document.querySelectorAll('.section_why .card_wrap.is-abs');
let windowHeight = window.innerHeight * 2;
const whyTl = gsap.timeline({
    ease: 'Power4.easeOut',
    duration: 0.5,
    scrollTrigger: {
        trigger: '.section_why',
        pin: true,
        pinSpacer: true,
        scrub: true,
        start: 'top 10%',
        end: () => `+=${windowHeight}`,
        onUpdate: (self) => {
            // Update progress bar height
            gsap.to('.why_scrollbar-inner', {
                height: self.progress * 100 + '%',
                ease: 'none',
            });
        },
    },
});

whyTl
    .to(whyCards[0], {
        y: '5%',
    })
    .to(whyCards[1], {
        y: '10%',
    });

//Sections with glow
const glowSections = [
    ...document.querySelectorAll(
        '.section_who, .section_package, .section_pricing, .section_faq'
    ),
];

glowSections.forEach((section) => {
    const bgDiv = [...section.querySelectorAll('.bg_divider')];

    const bgDividerTl = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: 'top 50%',
            //toggleActions: 'play none none none',
        },
    });
    bgDividerTl.to(bgDiv, {
        opacity: 1,
        duration: 0.4,
    });
});

//Who section cards
const whoCards = document.querySelectorAll(
    '.section_who .card_wrap:first-child, .section_who .card_wrap:last-child'
);

const whoTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.section_who',
        start: 'top 20%',
        once: true,
    },
});
whoTl.to(whoCards, {
    duration: 0.4,
    ease: 'power4.easeIn',
    x: '0%',
    scale: 1,
});

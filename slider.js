const blocksArray = gsap.utils.toArray('.page-sections .panel');
const page = document.querySelector('.page');
const pageSections = document.querySelector('.page-sections');
const body = document.getElementsByTagName('body');


gsap.registerPlugin(ScrollTrigger);

gsap.to(blocksArray, {
    xPercent: -100 * (blocksArray.length - 1),
    ease: 'none',
    duration: 6,
    scrollTrigger: {
        trigger: page,
        pin: true,
        scrub: true,
        snap: 1 / (blocksArray.length - 1),
        end: `+=${page.offsetWidth}`
    }
})
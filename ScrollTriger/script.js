var tl = gsap.timeline();

tl.from("nav > h1", {
  y: -50,
  opacity: 0,
  duration: 1,
  delay: 1,
});

tl.from(".innerNav > ul> li", {
  y: -50,
  opacity: 0,
  duration: 1.5,
  stagger: 0.3,
});

gsap.from("#page1 #box1", {
  scale: 0,
  duration: 2,
});

gsap.from("#page2 h3", {
  y: -30,
  opacity: 0,
  duration: 1.5,
  scrollTrigger: {
    trigger: "#ph3",
    scroller: "body",

    start: "top 60%",
    end: "top 20%",
    scrub: 2,
  },
});

gsap.from("#page2 #box2", {
  x: -900,
  duration: 1.5,
  scrollTrigger: {
    trigger: "#box2",
    scroller: "body",

    start: "top 80%",
    end: "top 40%",
    scrub: 5,
  },
});

gsap.to("#page3 h1", {
  transform: "translateX(-59%)",
  scrollTrigger: {
    trigger: "#page3",
    scroller: "body",
    markers: true,
    scrub: 5,
    start: "top 0%",
    end: "top -100%",
    pin: true,
  },
});

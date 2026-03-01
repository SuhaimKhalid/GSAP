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

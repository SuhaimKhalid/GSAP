var initial_Value = "M 10 50 Q 400 50 800 50";
var final_Value = "M 10 50 Q 400 50 800 50";

var string = document.querySelector("#svg_container");

string.addEventListener("mousemove", (dets) => {
  path = `M 10 50 Q ${dets.x} ${dets.y} 800 50`;
  gsap.to("svg path", {
    attr: { d: path },
    duration: 1,
  });
});

string.addEventListener("mouseleave", (dets) => {
  gsap.to("svg path", {
    attr: { d: final_Value },
    duration: 1,
    ease: "elastic.out(1,0.3)",
  });
});

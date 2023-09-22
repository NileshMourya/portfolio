var typed = new Typed(".text", {
  strings: ["Frontend Developer", "Sketch Artist"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: "2500",
  delay: 400,
});

sr.reveal(".about-img", { origin: "left" });
sr.reveal(".about-text", { origin: "right" });
sr.reveal(
  `#services,#project,#skills,.project,#contact`,
  { origin: "bottom" },
  { delay: 500 }
);
sr.reveal(
  ` .class,
  .constructor,
  .comment,
  .val,
  .value,
  .num,
  .equal,
  .education,
  .devop,
  .return,
  .work,
  .this,
  .yello,.mark-l`,
  { interval: 50 }
);
sr.reveal(".services-list", { orign: "top" });
sr.reveal(`.technical-bars,.radial-bars`, { origin: "bottom" });
sr.reveal(`.heading1`, { origin: "right" });
sr.reveal(`.heading1-pogress`, { origin: "left" });

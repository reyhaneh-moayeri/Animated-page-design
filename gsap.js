let textWrapper = document.querySelector(".intro-title");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /(\w)/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: false })
  .add({
    targets: ".intro-title .letter",
    translateX: [140, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: function (el, i) {
      return 500 + 50 * i;
    },
  })
  .add({
    targets: ".intro-title .letter",
    translateX: [0, -140],
    opacity: [1, 0],
    easing: "easeInExpo",
    duration: 1200,
    delay: function (el, i) {
      return 700 + 50 * i;
    },
  });

gsap.to(".loader", {
  delay: 5,
  y: "-100%",
  ease: Expo.easeInOut,
});

gsap.from(".logo", {
  duration: 1,
  delay: 6,
  y: 10,
  opacity: 0,
  ease: Expo.easeInOut,
});

gsap.from(".lang", {
  duration: 1,
  delay: 6.1,
  y: 10,
  opacity: 0,
  ease: Expo.easeInOut,
});

gsap.from(".left-im-cap", {
  duration: 1,
  delay: 6.2,
  y: 10,
  opacity: 0,
  ease: Expo.easeInOut,
});

gsap.from(".social-media ul li ", {
  delay: 6.3,
  duration: 1,
  y: 20,
  opacity: 0,
  ease: Expo.easeInOut,
  stagger: 0.2,
});

gsap.from(".left-bottom-text ", {
  delay: 6.4,
  y: 10,
  duration: 1,
  opacity: 0,
  ease: Expo.easeInOut,
  stagger: 0.2,
});

gsap.from(".right-bottom-text ", {
  delay: 6.4,
  duration: 1,
  y: 10,
  opacity: 0,
  ease: Expo.easeInOut,
  stagger: 0.2,
});
gsap.from(".left-img-btn", {
  delay: 6.4,
  duration: 1,
  scale: 0,
  opacity: 0,
  ease: Expo.easeInOut,
  stagger: 0.2,
});

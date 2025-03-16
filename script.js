document.addEventListener("DOMContentLoaded", function () {
  // Image Gallery Animation (Smooth)
  gsap.from(".image-gallery img", {
    opacity: 0,
    scale: 0.85,
    duration: 1.5,
    stagger: 0.6, // Reduced stagger for smoothness
    ease: "power2.out",
    force3D: true, // GPU acceleration
  });

  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".card img").forEach((img) => {
    gsap.to(img, {
      opacity: 1,
      y: 0, // Move back to normal position
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: img,
        start: "top 80%", // Animation starts when the image is 80% visible in viewport
        toggleActions: "play none none none",
      },
    });
  });
  setTimeout(() => {
    gsap.to(".scrolling-content", {
      x: "-100%",
      duration: 15,
      ease: "linear",
      repeat: -1,
      force3D: true,
    });
  }, 2000); // Increased delay slightly

  gsap.from("h1", {
    y: 50, // Move up from 50px below
    opacity: [0],
    duration: 2,
    ease: "power3.out",
  });
  gsap.from(".description", {
    opacity: 0,
    y: 30, // Move up slightly
    duration: 2,
    ease: "power3.out",
    delay: 0.5, // Starts after heading animation
  });
  gsap.from(".text-container", {
    x: -100, // Moves text from the left
    opacity: 0, // Fades in
    duration: 1.5,
    ease: "power2.out",
  });
  gsap.from(".floating-img", {
    opacity: 0,
    y: 50,
    duration: 1.2,
    stagger: 0.5,
    ease: "power2.out",
  });

  gsap.from(".hero-title", {
    opacity: 0,
    y: 50,
    duration: 1.2,
    ease: "power2.out",
  });

  gsap.to(".img-right", {
    rotation: 20,
    duration: 1,
    ease: "power2.out",
  });

  document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    if (hamburger && navMenu) {
      hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("show");
        console.log("Hamburger menu clicked!");
      });
    } else {
      console.error("Error: Hamburger menu or nav-menu not found!");
    }
  });

  // ---------------- Lenis Smooth Scrolling Fix ----------------
  const lenis = new Lenis({
    smooth: true,
    lerp: 0.1, // Adjust the smoothness
    wheelMultiplier: 1, // Adjust the scroll speed
    infinite: false,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
});

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

  gsap.from("h1", {
    y: 50, // Move up from 50px below
    opacity: 0,
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

  setTimeout(() => {
    gsap.to(".scrolling-content", {
      x: "-100%",
      duration: 15,
      ease: "linear",
      repeat: -1,
      force3D: true,
    });
  }, 2000); // Increased delay slightly

  document.addEventListener("DOMContentLoaded", () => {
    console.log("JS Loaded!"); // Check if script runs

    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    if (hamburger && navMenu) {
      console.log("Hamburger and Nav Menu found!"); // Debugging log

      hamburger.addEventListener("click", () => {
        console.log("Hamburger clicked!"); // Debugging log
        navMenu.classList.toggle("show");
      });
    } else {
      console.error("Hamburger or Nav Menu not found!");
    }
  });

  gsap.ticker.lagSmoothing(0);
  // ---------------- Lenis Smooth Scrolling Fix ----------------
  const lenis = new Lenis({
    smooth: true,
    duration: 0.5, // Reduce duration for a faster response
    easing: (t) => t, // Keep linear easing to prevent extra load
    wheelMultiplier: 0.6, // Reduce scrolling intensity
    touchMultiplier: 1.2, // Adjust for touch devices
    infinite: false,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
});

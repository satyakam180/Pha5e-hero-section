// Animate elements on page load using GSAP

window.onload = () => {

    gsap.from(".title", { y: -50, opacity: 0, duration: 1, ease: "bounce.out" });

    gsap.from(".subtitle", { y: 50, opacity: 0, delay: 0.5, duration: 1, ease: "power2.out" });

    gsap.from(".cta-btn", { scale: 0, duration: 1, delay: 1, ease: "elastic.out(1, 0.3)" });

  };

  

  // Parallax effect for background based on mouse movement

  const hero = document.querySelector(".hero");

  hero.addEventListener("mousemove", (e) => {

    const { clientX: x, clientY: y } = e;

    gsap.to(".hero::before", {

      x: (x - window.innerWidth / 2) / 20,

      y: (y - window.innerHeight / 2) / 20,

      duration: 0.3,

    });

  });

  

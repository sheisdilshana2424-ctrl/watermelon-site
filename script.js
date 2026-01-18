console.log("Script Loaded");

gsap.registerPlugin(ScrollTrigger);

const video = document.querySelector("#myVideo");

// This prevents the video from disappearing on some phones
video.addEventListener("loadedmetadata", function() {
  
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".scroll-height",
      start: "top top",
      end: "bottom bottom",
      scrub: 0.5, // The number is the "smoothness" delay. 
      markers: false
    }
  });

  // This magic line connects scroll to video time
  tl.fromTo(video, 
    { currentTime: 0 }, 
    { currentTime: video.duration || 1 }
  );
});

// Hack to make sure video is ready on mobile
window.addEventListener("touchstart", () => {
    if(video.paused) {
        video.play();
        video.pause();
    }
});

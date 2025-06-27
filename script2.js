document.addEventListener("DOMContentLoaded", () => {
  const videoUrls = [
    "vid1.mp4",     // Replace with your video 1
    "vid3.mp4",       // Replace with your video 2
    "vid4.mp4"      // Replace with your video 3
  ];

  const videos = document.querySelectorAll(".bg-video");
  let current = 0;
  let next = 1;

  // Initialize first two videos
  videos[0].src = videoUrls[0];
  videos[0].play();
  videos[0].style.opacity = 1;

  videos[1].src = videoUrls[1];
  videos[1].load();

  videos[0].addEventListener("timeupdate", () => {
    const currentVideo = videos[current];
    const duration = currentVideo.duration;
    const timeLeft = duration - currentVideo.currentTime;

    if (timeLeft <= 2) { // 2 seconds before end, start transition
      const nextVideo = videos[next];
      nextVideo.style.transition = "none"; // remove previous transitions
      nextVideo.style.opacity = 0;
      nextVideo.src = videoUrls[(current + 1) % videoUrls.length];
      nextVideo.load();
      nextVideo.play();

      // Small delay ensures next video starts before fade-in
      setTimeout(() => {
        nextVideo.style.transition = "opacity 1s ease-in-out";
        nextVideo.style.opacity = 1;
        currentVideo.style.opacity = 0;

        // Swap current and next
        current = next;
        next = (next + 1) % 2; // toggle between 0 and 1
      }, 100);
    }
  });
});

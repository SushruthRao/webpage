  window.addEventListener('DOMContentLoaded', function() {
      var audio = document.getElementById('background-music');
      audio.volume = 0.10; // set volume to 15%
    });
document.addEventListener("DOMContentLoaded", () => {
  const videoUrls = [
    "vid1.mp4",     // Replace with your video 1
    "vid3.mp4",       // Replace with your video 2
    "vid4.mp4"      // Replace with your video 3
  ];
document.getElementById('why').addEventListener('click', function(e) {
  // Prevent toggle if clicking inside the collapse content or on a link
  if (!e.target.closest('.collapse, a')) {
    var collapse = document.getElementById('whyPoornaCollapse');
    var bsCollapse = bootstrap.Collapse.getOrCreateInstance(collapse);
    bsCollapse.toggle();
  }
});




const galleryImages = [
    './1 (1).jpeg',
    './1 (2).jpeg',
    './1 (3).jpeg',
    './1 (4).jpeg',
    './1 (5).jpeg',
    './1 (6).jpeg',
    './1 (7).jpeg'
    
    // Add more URLs as needed
  ];

  // 2. Render images
  const galleryScroll = document.getElementById('gallery-scroll');
  galleryImages.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.className = 'gallery-img';
    img.alt = 'Gallery image';
    galleryScroll.appendChild(img);
  });

  // 3. Animate images on scroll (Intersection Observer)
  const observer = new window.IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    },
    { root: galleryScroll, threshold: 0.5 }
  );
  document.querySelectorAll('.gallery-img').forEach(img => observer.observe(img));










document.getElementById('why-kids-kafe').addEventListener('click', function(e) {
    if (!e.target.closest('.collapse, a')) {
      var collapse = document.getElementById('kidsKafeCollapse');
      var bsCollapse = bootstrap.Collapse.getOrCreateInstance(collapse);
      bsCollapse.toggle();
    }
  });
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


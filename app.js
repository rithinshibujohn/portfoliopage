document.addEventListener('DOMContentLoaded', () => {

    /*
     * Particle.js Configuration
     */
    particlesJS("particles-js", {
      particles: { number: { value: 80, density: { enable: true, value_area: 800 } }, color: { value: "#00f7ff" }, shape: { type: "circle" }, opacity: { value: 0.5, random: false }, size: { value: 3, random: true }, line_linked: { enable: true, distance: 150, color: "#00f7ff", opacity: 0.4, width: 1 }, move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false } },
      interactivity: { detect_on: "canvas", events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true }, modes: { repulse: { distance: 150, duration: 0.4 }, push: { particles_nb: 4 } } },
      retina_detect: true
    });

    /*
     * Scroll Reveal Animation
     */
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animated-section').forEach((el) => {
        scrollObserver.observe(el);
    });

    /*
     * Hamburger Menu Logic
     */
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Close nav when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    /*
     * Project Modal Logic
     */
    const projectCards = document.querySelectorAll('.project-card');
    const modal = document.getElementById('projectModal');
    const closeModal = document.querySelector('.close-button');
    
    const modalImg = document.getElementById('modalImg');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalTech = document.getElementById('modalTech');
    const modalLiveLink = document.getElementById('modalLiveLink');
    const modalRepoLink = document.getElementById('modalRepoLink');

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            modalImg.src = card.dataset.modalImg;
            modalTitle.textContent = card.dataset.modalTitle;
            modalDesc.textContent = card.dataset.modalDesc;
            modalTech.textContent = card.dataset.modalTech;
            modalLiveLink.href = card.dataset.modalLive;
            modalRepoLink.href = card.dataset.modalRepo;
            modal.classList.add('active');
        });
    });

    const closeTheModal = () => {
        modal.classList.remove('active');
    };

    closeModal.addEventListener('click', closeTheModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeTheModal();
        }
    });
    
    /*
     * Testimonial Slider Logic
     */
    const track = document.querySelector('.testimonial-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.next-btn');
    const prevButton = document.querySelector('.prev-btn');

    if (slides.length > 0) {
      const slideWidth = slides[0].getBoundingClientRect().width;
      let currentIndex = 0;

      const moveToSlide = (targetIndex) => {
          track.style.transform = 'translateX(-' + slideWidth * targetIndex + 'px)';
          currentIndex = targetIndex;
      };

      nextButton.addEventListener('click', () => {
          const nextIndex = (currentIndex + 1) % slides.length;
          moveToSlide(nextIndex);
      });

      prevButton.addEventListener('click', () => {
          const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
          moveToSlide(prevIndex);
      });
      
      // Auto-play feature (optional)
      setInterval(() => {
          const nextIndex = (currentIndex + 1) % slides.length;
          moveToSlide(nextIndex);
      }, 7000); // Change slide every 7 seconds
    }
});
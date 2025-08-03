import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const app = document.querySelector("#app");

// Coffee menu data for "no filter" - matching the image (icons removed)
const menuData = {
  coffee: {
    title: "Coffee",
    items: [
      { name: "Espresso", price: "485" },
      { name: "Americano (Hot)", price: "550" },
      { name: "Iced Americano", price: "550" },
      { name: "Cortado", price: "600" },
      { name: "Cappuccino", price: "650" },
      { name: "Classic Affogato", price: "650" },
      { name: "Dirty Espresso", price: "675" },
      { name: "Cold Brew", price: "650" },
    ],
  },
  latte: {
    title: "Latte",
    items: [
      { name: "Latte", hot: "650", cold: "650" },
      { name: "Vanilla Latte", hot: "675", cold: "710" },
      { name: "Spanish Latte", hot: "690", cold: "695" },
      { name: "Coconut Latte", hot: "675", cold: "710" },
      { name: "Tiramisu Latte", hot: "700", cold: "750" },
      { name: "Salted Caramel Latte", hot: "675", cold: "710" },
      { name: "Mocha Latte", hot: "700", cold: "710" },
      { name: "Hazelnut Latte", hot: "675", cold: "710" },
    ],
  },
  frappe: {
    title: "Frappe",
    items: [
      { name: "Mocha Frappe", price: "850" },
      { name: "Vanilla Frappe", price: "850" },
      { name: "Salted Caramel Frappe", price: "850" },
      { name: "Mixed Berry Frappe", price: "900" },
    ],
  },
  matcha: {
    title: "Matcha",
    items: [
      { name: "Matcha (Hot)", price: "750" },
      { name: "Matcha (Cold)", price: "750" },
      { name: "Strawberry Matcha", price: "950" },
      { name: "Coconut Matcha", price: "950" },
      { name: "Vanilla Matcha", price: "950" },
    ],
  },
  tea: {
    title: "Tea & More",
    items: [
      { name: "Peach Iced Tea", price: "550" },
      { name: "Yuzo Iced Tea", price: "590" },
      { name: "Mango Iced Tea", price: "550" },
      { name: "Belgian Hot Chocolate", price: "675" },
      { name: "Nutty Shake", price: "900" },
    ],
  },
  addons: {
    title: "Add Ons",
    items: [
      { name: "Lactose Free Milk", price: "50" },
      { name: "Low Fat Milk", price: "50" },
      { name: "Oat Milk", price: "550" },
      { name: "Extra Shot", price: "250" },
      { name: "Water", price: "100" },
      { name: "Cold Foam", price: "100" },
    ],
  },
};

const specialtyContent = {
  title: "Our Specialty",
  subtitle: "Ceremonial Uji Matcha",
  description:
    "Pakistan's only authentic ceremonial grade Uji matcha experience",
  features: [
    {
      icon: "🍃",
      title: "Authentic Uji Origin",
      description:
        "Direct from Uji, Japan - the birthplace of ceremonial matcha, where monks first cultivated this sacred tea over 800 years ago",
    },
    {
      icon: "🏆",
      title: "Ceremonial Grade Only",
      description:
        "The highest quality matcha available - stone-ground, shade-grown tencha leaves with vibrant jade color and umami richness",
    },
    {
      icon: "🇵🇰",
      title: "First in Pakistan",
      description:
        "We're proud to be the only cafe in Pakistan offering authentic ceremonial grade Uji matcha, prepared with traditional Japanese techniques",
    },
    {
      icon: "⚡",
      title: "Handcrafted Daily",
      description:
        "Each cup whisked to perfection using traditional bamboo tools, creating the signature frothy texture and balanced flavor",
    },
  ],
  cta: "Experience the difference that authentic ceremonial matcha makes",
};

// Create the main HTML structure
function createHTML() {
  return `
    <!-- Loading Screen -->
    <div class="loading-screen" id="loadingScreen">
      <div class="coffee-cup">
        <div class="steam">
          <div class="steam-line"></div>
          <div class="steam-line"></div>
          <div class="steam-line"></div>
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <nav class="nav" id="nav">
      <div class="nav-content">
        <div class="nav-logo">
          <img src="/logos/logo-secondary.svg" alt="nf" class="nav-logo-img" style="height: 32px; width: auto;" onerror="this.style.display='none'; this.nextElementSibling.style.display='inline';">
          <span class="nav-logo-text" style="display: none;">nf</span>
        </div>
        <ul class="nav-links">
          <li><a href="#menu">Menu</a></li>
          <li><a href="#specialties">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>

    <!-- Header Section -->
    <header class="header" id="home">
      <div class="logo-container">
        <img src="/logos/logo-primary.svg" alt="no filter." class="main-logo" style="max-height: 120px; width: auto; filter: brightness(0) invert(1);" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
        <h1 class="logo" style="display: none;">no filter.</h1>
      </div>
      <p class="tagline">authentic coffee. no compromises.</p>
      <div class="scroll-indicator">
        <div class="scroll-arrow"></div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="main-content">
      <!-- Menu Section -->
      <section class="menu-section" id="menu">
        <h2 class="section-title">Our Unfiltered Menu</h2>
        <div class="menu-categories">
          ${Object.entries(menuData)
            .map(
              ([key, category]) => `
            <div class="category-card" data-category="${key}">
              <h3 class="category-title">
                ${category.title}
              </h3>
              <ul class="menu-items">
                ${category.items
                  .map(
                    (item) => `
                  <li class="menu-item">
                    <div class="item-info">
                      <h3>${item.name}</h3>
                    </div>
                    <div class="item-price">
                      ${
                        item.hot && item.cold
                          ? `<span class="price-option">Hot: PKR ${item.hot}</span><span class="price-option">Cold: PKR ${item.cold}</span>`
                          : `PKR ${item.price}`
                      }
                    </div>
                  </li>
                `
                  )
                  .join("")}
              </ul>
            </div>
          `
            )
            .join("")}
        </div>
      </section>

      <!-- Specialty Section -->
      <section class="specialty-section" id="specialties">
        <div class="specialty-header">
          <h2 class="section-title">${specialtyContent.title}</h2>
        </div>
        <div class="specialty-video-container">
          <video 
            id="matcha-video" 
            class="specialty-video"
            muted
            playsinline
            preload="auto"
            poster="/videos/matcha-poster.jpg"
          >
            <source src="/videos/matcha-preparation.mp4" type="video/mp4">
            <source src="/videos/matcha-preparation.webm" type="video/webm">
            Your browser does not support the video tag.
          </video>
          <div class="video-overlay">
            <p class="video-instruction">Watch our authentic matcha preparation</p>
          </div>
          <div class="video-text-overlay">
            <h3 class="video-text-title">Ceremonial Grade Uji Matcha</h3>
          </div>
          <div class="video-progress">
            <div class="video-progress-bar" id="video-progress-bar"></div>
          </div>
        </div>
        <div class="specialty-cta">
          <p class="cta-text">${specialtyContent.cta}</p>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="footer" id="contact">
      <div class="footer-content">
        <h3 class="footer-title">Find Us. Taste Pure.</h3>
        <div class="footer-info">
          <div class="footer-section">
            <h4>Location</h4>
            <p>123 Authentic Street<br>Pure City, PC 12345</p>
          </div>
          <div class="footer-section">
            <h4>Hours</h4>
            <p>Mon-Fri: 6:00 AM - 8:00 PM<br>Sat-Sun: 7:00 AM - 9:00 PM</p>
          </div>
          <div class="footer-section">
            <h4>Contact</h4>
            <p>Phone: (555) NO-FILTER<br>Email: hello@nofilter.coffee</p>
          </div>
        </div>
        <p style="margin-top: 2rem; opacity: 0.8;">&copy; 2025 no filter. coffee. authentic taste, no compromises.</p>
      </div>
    </footer>
  `;
}

// Initialize the application
function init() {
  app.innerHTML = createHTML();

  // Hide loading screen after a delay
  setTimeout(() => {
    const loadingScreen = document.getElementById("loadingScreen");
    loadingScreen.style.opacity = "0";
    setTimeout(() => {
      loadingScreen.style.display = "none";
      initAnimations();
    }, 800);
  }, 1500);
}

// Initialize all animations
function initAnimations() {
  // Navigation scroll trigger
  ScrollTrigger.create({
    trigger: "body",
    start: "100px top",
    onEnter: () => {
      document.getElementById("nav").classList.add("visible");
    },
    onLeaveBack: () => {
      document.getElementById("nav").classList.remove("visible");
    },
  });

  // Section title animations
  gsap.utils.toArray(".section-title").forEach((title) => {
    ScrollTrigger.create({
      trigger: title,
      start: "top 80%",
      onEnter: () => title.classList.add("animate"),
    });
  });

  // Menu category cards animation
  gsap.utils.toArray(".category-card").forEach((card, index) => {
    ScrollTrigger.create({
      trigger: card,
      start: "top 85%",
      onEnter: () => {
        gsap.to(card, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: index * 0.1,
          ease: "power2.out",
        });
        card.classList.add("animate");
      },
    });
  });

  // Video autoplay when in view
  const video = document.getElementById("matcha-video");
  const videoContainer = document.querySelector(".specialty-video-container");
  const progressBar = document.getElementById("video-progress-bar");

  if (video && videoContainer) {
    console.log("Video element found:", video);

    // Ensure video is ready
    video.addEventListener("loadedmetadata", () => {
      console.log("Video metadata loaded, duration:", video.duration);
    });

    video.addEventListener("loadeddata", () => {
      console.log("Video data loaded, ready for playback");
    });

    video.addEventListener("error", (e) => {
      console.error("Video error:", e);
    });

    // Update progress bar during video playback
    video.addEventListener("timeupdate", () => {
      if (video.duration && progressBar) {
        const progress = (video.currentTime / video.duration) * 100;
        progressBar.style.width = progress + "%";
      }
    });

    // Create scroll trigger to play video when container is in view
    ScrollTrigger.create({
      trigger: ".specialty-video-container",
      start: "top 50%", // Start when container top hits 50% of viewport
      end: "bottom 50%", // End when container bottom hits 50% of viewport
      onEnter: () => {
        console.log("Video section entered - starting video");
        video.play();
        videoContainer.classList.add("playing");

        // Hide the instruction overlay
        const overlay = document.querySelector(".video-overlay");
        if (overlay) {
          gsap.to(overlay, { opacity: 0, duration: 0.5 });
        }
      },
      onLeave: () => {
        console.log("Video section left - pausing video");
        video.pause();
        videoContainer.classList.remove("playing");
      },
      onEnterBack: () => {
        console.log("Video section re-entered - resuming video");
        video.play();
        videoContainer.classList.add("playing");

        // Hide the instruction overlay
        const overlay = document.querySelector(".video-overlay");
        if (overlay) {
          gsap.to(overlay, { opacity: 0, duration: 0.5 });
        }
      },
      onLeaveBack: () => {
        console.log("Video section left upward - resetting video");
        video.pause();
        video.currentTime = 0;
        videoContainer.classList.remove("playing");

        // Reset progress bar
        if (progressBar) {
          progressBar.style.width = "0%";
        }

        // Show the instruction overlay
        const overlay = document.querySelector(".video-overlay");
        if (overlay) {
          gsap.to(overlay, { opacity: 1, duration: 0.5 });
        }
      },
    });
  } else {
    console.error("Video element or container not found!");
  }

  // Simple, reliable smooth scroll for navigation links
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Menu item hover animations
  document.querySelectorAll(".menu-item").forEach((item) => {
    item.addEventListener("mouseenter", () => {
      gsap.to(item, {
        x: 10,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    item.addEventListener("mouseleave", () => {
      gsap.to(item, {
        x: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  });
}

// Initialize the app
init();

import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const app = document.querySelector("#app");

// Coffee menu data for "no filter"
const menuData = {
  signature: {
    title: "Signature Blends",
    icon: "☕",
    items: [
      {
        name: "no filter. house blend",
        description:
          "Our signature roast with notes of dark chocolate and caramel, unfiltered perfection",
        price: "$6.50",
      },
      {
        name: "pure vanilla cold brew",
        description:
          "12-hour cold brew with Madagascar vanilla, no artificial flavors",
        price: "$5.75",
      },
      {
        name: "raw honey latte", 
        description:
          "Smooth espresso with steamed oat milk and local raw honey",
        price: "$5.25",
      },
      {
        name: "authentic americano",
        description:
          "Double shot espresso with hot water, simple and uncompromising",
        price: "$4.75",
      },
    ],
  },
  espresso: {
    title: "Pure Espresso",
    icon: "🫘",
    items: [
      {
        name: "single origin shot",
        description: "Rich, full-bodied shot from our single-origin beans",
        price: "$3.25",
      },
      {
        name: "black americano",
        description:
          "Fresh espresso shots with hot water, no frills",
        price: "$3.75",
      },
      {
        name: "classic cappuccino",
        description: "Equal parts espresso, steamed milk, and natural foam",
        price: "$4.50",
      },
      {
        name: "flat white",
        description: "Double shot espresso with microfoam oat milk",
        price: "$4.75",
      },
    ],
  },
  specialty: {
    title: "Unfiltered Specials",
    icon: "✨",
    items: [
      {
        name: "lavender calm",
        description:
          "Pure lavender with raw honey and steamed milk, no artificial additives",
        price: "$5.95",
      },
      {
        name: "spiced chai authentic",
        description: "House-ground chai spices with espresso and oat milk",
        price: "$5.50",
      },
      {
        name: "matcha pure",
        description:
          "Ceremonial grade matcha with oat milk, no sweeteners added",
        price: "$6.25",
      },
      {
        name: "golden turmeric",
        description:
          "Fresh turmeric root with coconut milk and warming spices",
        price: "$4.95",
      },
    ],
  },
  pastries: {
    title: "Real Baked Goods",
    icon: "🥐",
    items: [
      {
        name: "butter croissant",
        description:
          "Classic French croissant with real butter, baked fresh daily",
        price: "$4.25",
      },
      {
        name: "cinnamon roll", 
        description: "House-made roll with Ceylon cinnamon and brown butter",
        price: "$3.75",
      },
      {
        name: "blueberry muffin",
        description:
          "Fresh blueberries in organic flour muffin, no preservatives",
        price: "$3.95",
      },
      {
        name: "dark chocolate cookie",
        description: "Belgian dark chocolate chunks in organic cookie dough",
        price: "$3.50",
      },
    ],
  },
};

const specialtyFeatures = [
  {
    icon: "🌱",
    title: "No Artificial Ingredients",
    description:
      "Pure, natural ingredients only - no artificial flavors, colors, or preservatives",
  },
  {
    icon: "👨‍🍳",
    title: "Authentic Brewing",
    description:
      "Traditional brewing methods and real craftsmanship, no shortcuts taken",
  },
  {
    icon: "🥛",
    title: "Real Milk Alternatives",
    description: "Fresh oat, almond, and coconut milk made in-house daily",
  },
  {
    icon: "⚡",
    title: "Unfiltered Quality",
    description: "Every cup made fresh to order, no compromises on taste",
  },
];

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
          <img src="/src/assets/logos/logo-secondary.png" alt="nf" class="nav-logo-img" style="height: 32px; width: auto;" onerror="this.style.display='none'; this.nextElementSibling.style.display='inline';">
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
        <img src="/src/assets/logos/logo-primary.png" alt="no filter." class="main-logo" style="max-height: 120px; width: auto;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
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
        <h2 class="section-title">our unfiltered menu</h2>
        <div class="menu-categories">
          ${Object.entries(menuData)
            .map(
              ([key, category]) => `
            <div class="category-card" data-category="${key}">
              <h3 class="category-title">
                <span class="category-icon">${category.icon}</span>
                ${category.title}
              </h3>
              <ul class="menu-items">
                ${category.items
                  .map(
                    (item) => `
                  <li class="menu-item">
                    <div class="item-info">
                      <h3>${item.name}</h3>
                      <p class="item-description">${item.description}</p>
                    </div>
                    <span class="item-price">${item.price}</span>
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
        <h2 class="section-title">Why Choose Brew & Bean?</h2>
        <div class="specialty-grid">
          ${specialtyFeatures
            .map(
              (feature) => `
            <div class="specialty-card">
              <span class="specialty-icon">${feature.icon}</span>
              <h3 class="specialty-title">${feature.title}</h3>
              <p class="specialty-description">${feature.description}</p>
            </div>
          `
            )
            .join("")}
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="footer" id="contact">
      <div class="footer-content">
        <h3 class="footer-title">find us. taste pure.</h3>
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

  // Specialty cards animation
  gsap.utils.toArray(".specialty-card").forEach((card, index) => {
    ScrollTrigger.create({
      trigger: card,
      start: "top 85%",
      onEnter: () => {
        gsap.to(card, {
          scale: 1,
          rotationY: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.15,
          ease: "back.out(1.7)",
        });
        card.classList.add("animate");
      },
    });
  });

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

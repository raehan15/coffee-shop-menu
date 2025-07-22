import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const app = document.querySelector("#app");

// Coffee menu data
const menuData = {
  signature: {
    title: "Signature Coffee",
    icon: "☕",
    items: [
      {
        name: "Brew & Bean Signature",
        description:
          "Our house blend with hints of chocolate and caramel, topped with artisan foam art",
        price: "$6.50",
      },
      {
        name: "Golden Caramel Macchiato",
        description:
          "Espresso with steamed milk, vanilla syrup, and our signature caramel drizzle",
        price: "$5.75",
      },
      {
        name: "Honey Cinnamon Latte",
        description:
          "Smooth espresso with steamed milk, local honey, and a dash of Ceylon cinnamon",
        price: "$5.25",
      },
      {
        name: "Vanilla Bean Cold Brew",
        description:
          "12-hour cold brew infused with Madagascar vanilla beans, served over ice",
        price: "$4.75",
      },
    ],
  },
  espresso: {
    title: "Espresso Classics",
    icon: "🫘",
    items: [
      {
        name: "Traditional Espresso",
        description: "Rich, full-bodied shot of our premium espresso blend",
        price: "$3.25",
      },
      {
        name: "Americano",
        description:
          "Fresh espresso shots with hot water for a smooth, clean taste",
        price: "$3.75",
      },
      {
        name: "Cappuccino",
        description: "Equal parts espresso, steamed milk, and velvety foam",
        price: "$4.50",
      },
      {
        name: "Flat White",
        description: "Double shot espresso with microfoam steamed milk",
        price: "$4.75",
      },
    ],
  },
  specialty: {
    title: "Specialty Drinks",
    icon: "✨",
    items: [
      {
        name: "Lavender Honey Latte",
        description:
          "Calming lavender with local honey and perfectly steamed milk",
        price: "$5.95",
      },
      {
        name: "Spiced Chai Fusion",
        description: "House-made chai blend with espresso and steamed milk",
        price: "$5.50",
      },
      {
        name: "Matcha Cloud",
        description:
          "Premium ceremonial matcha with vanilla oat milk and cloud foam",
        price: "$6.25",
      },
      {
        name: "Turmeric Golden Milk",
        description:
          "Anti-inflammatory turmeric blend with coconut milk and warming spices",
        price: "$4.95",
      },
    ],
  },
  pastries: {
    title: "Fresh Pastries",
    icon: "🥐",
    items: [
      {
        name: "Almond Croissant",
        description:
          "Buttery croissant filled with almond cream and topped with sliced almonds",
        price: "$4.25",
      },
      {
        name: "Cinnamon Sugar Donut",
        description: "Fresh-made cake donut rolled in cinnamon sugar",
        price: "$3.75",
      },
      {
        name: "Blueberry Scone",
        description:
          "Tender scone bursting with fresh blueberries and lemon zest",
        price: "$3.95",
      },
      {
        name: "Chocolate Chip Muffin",
        description: "Moist muffin loaded with Belgian chocolate chips",
        price: "$3.50",
      },
    ],
  },
};

const specialtyFeatures = [
  {
    icon: "🌱",
    title: "Organic & Fair Trade",
    description:
      "All our coffee beans are ethically sourced and certified organic",
  },
  {
    icon: "👨‍🍳",
    title: "Expert Roasted",
    description:
      "Small-batch roasting by our master roasters for perfect flavor",
  },
  {
    icon: "🥛",
    title: "Plant-Based Options",
    description: "Oat, almond, and coconut milk alternatives available",
  },
  {
    icon: "⚡",
    title: "Lightning Fast Service",
    description: "Your perfect cup ready in under 3 minutes, guaranteed",
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
        <div class="nav-logo">Brew & Bean</div>
        <ul class="nav-links">
          <li><a href="#menu">Menu</a></li>
          <li><a href="#specialties">Specialties</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>

    <!-- Header Section -->
    <header class="header" id="home">
      <h1 class="logo">Brew & Bean</h1>
      <p class="tagline">Where Every Cup Tells a Story</p>
      <div class="scroll-indicator">
        <div class="scroll-arrow"></div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="main-content">
      <!-- Menu Section -->
      <section class="menu-section" id="menu">
        <h2 class="section-title">Our Handcrafted Menu</h2>
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
        <h3 class="footer-title">Visit Us Today</h3>
        <div class="footer-info">
          <div class="footer-section">
            <h4>Location</h4>
            <p>123 Coffee Street<br>Bean City, BC 12345</p>
          </div>
          <div class="footer-section">
            <h4>Hours</h4>
            <p>Mon-Fri: 6:00 AM - 8:00 PM<br>Sat-Sun: 7:00 AM - 9:00 PM</p>
          </div>
          <div class="footer-section">
            <h4>Contact</h4>
            <p>Phone: (555) 123-BREW<br>Email: hello@brewandbean.com</p>
          </div>
        </div>
        <p style="margin-top: 2rem; opacity: 0.8;">&copy; 2025 Brew & Bean Coffee Shop. All rights reserved.</p>
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

  // Smooth scroll for navigation links
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        gsap.to(window, {
          duration: 1.2,
          scrollTo: {
            y: targetSection,
            offsetY: 80,
          },
          ease: "power2.inOut",
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

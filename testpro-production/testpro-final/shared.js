// shared.js — nav, footer, animations for all pages

const NAV_HTML = `
<nav id="navbar">
  <a href="/index.html" class="nav-logo">TestPro <span class="badge">INDIA</span></a>
  <ul class="nav-links">
    <li><a href="/index.html#topics">Topics</a></li>
    <li><a href="/articles.html">Articles</a></li>
    <li><a href="/interview.html">Interview Prep</a></li>
    <li><a href="/tools.html">Tools Guide</a></li>
    <li><a href="/courses.html">Courses</a></li>
    <li><a href="/index.html#newsletter" class="nav-cta">Join Free</a></li>
  </ul>
  <button class="hamburger" id="hamburger" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <a href="/index.html#topics">Topics</a>
  <a href="/articles.html">Articles</a>
  <a href="/interview.html">Interview Prep</a>
  <a href="/tools.html">Tools Guide</a>
  <a href="/courses.html">Courses</a>
  <a href="/index.html#newsletter">Join Free Newsletter</a>
</div>`;

const FOOTER_HTML = `
<footer>
  <div class="footer-inner">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="/index.html" class="nav-logo" style="color:#fff">TestPro <span class="badge">INDIA</span></a>
        <p>India's trusted resource for software testing professionals. Helping QA engineers learn, grow, and earn more.</p>
        <p style="margin-top:.75rem;font-size:.78rem">Based in Pune, Maharashtra 🇮🇳</p>
      </div>
      <div class="footer-col">
        <h4>Learn</h4>
        <ul>
          <li><a href="/articles.html?cat=ISTQB">ISTQB Guide</a></li>
          <li><a href="/articles.html?cat=Selenium">Selenium Tutorial</a></li>
          <li><a href="/articles.html?cat=API Testing">API Testing</a></li>
          <li><a href="/articles.html?cat=Performance">Performance Testing</a></li>
          <li><a href="/tools.html">Tools Guide</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Career</h4>
        <ul>
          <li><a href="/interview.html">Interview Questions</a></li>
          <li><a href="/articles.html?cat=Salary">Salary Guide</a></li>
          <li><a href="/articles.html?cat=Career">Career Growth</a></li>
          <li><a href="/courses.html">Courses</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <ul>
          <li><a href="/about.html">About</a></li>
          <li><a href="/contact.html">Contact</a></li>
          <li><a href="/privacy.html">Privacy Policy</a></li>
          <li><a href="/disclaimer.html">Disclaimer</a></li>
          <li><a href="/admin.html">Admin</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© ${new Date().getFullYear()} TestPro India. Made with ❤️ in Pune. All rights reserved.</span>
      <div class="footer-socials">
        <a href="#">LinkedIn</a>
        <a href="#">YouTube</a>
        <a href="#">Telegram</a>
        <a href="#">Twitter/X</a>
      </div>
    </div>
  </div>
</footer>`;

function initShared() {
  // Inject nav
  const navEl = document.getElementById('nav-placeholder');
  if (navEl) navEl.outerHTML = NAV_HTML;

  // Inject footer
  const footEl = document.getElementById('footer-placeholder');
  if (footEl) footEl.outerHTML = FOOTER_HTML;

  // Nav scroll
  setTimeout(() => {
    const navbar = document.getElementById('navbar');
    if (navbar) window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 20));

    // Mobile menu
    const ham = document.getElementById('hamburger');
    const mob = document.getElementById('mobileMenu');
    if (ham && mob) {
      ham.addEventListener('click', () => mob.classList.toggle('open'));
      document.querySelectorAll('.mobile-menu a').forEach(a => a.addEventListener('click', () => mob.classList.remove('open')));
    }
  }, 0);

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const siblings = [...(e.target.parentElement?.querySelectorAll('.reveal') || [])];
        const idx = siblings.indexOf(e.target);
        setTimeout(() => e.target.classList.add('visible'), idx * 80);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  reveals.forEach(r => obs.observe(r));
}

document.addEventListener('DOMContentLoaded', initShared);

// DOM Elements
const themeToggle = document.getElementById('themeToggle');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');
const searchInput = document.getElementById('searchInput');
const header = document.querySelector('header');
const themeIcon = themeToggle.querySelector('ion-icon');

// --- Theme Toggling ---
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    // Update Icon
    if (theme === 'dark') {
        themeIcon.setAttribute('name', 'sunny-outline');
    } else {
        themeIcon.setAttribute('name', 'moon-outline');
    }
}

// Check Local Storage or System Preference
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme) {
    setTheme(savedTheme);
} else if (systemPrefersDark) {
    setTheme('dark');
}

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
});

// --- Mobile Menu ---
mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    const icon = mobileMenuBtn.querySelector('ion-icon');
    if (navLinks.classList.contains('active')) {
        icon.setAttribute('name', 'close-outline');
    } else {
        icon.setAttribute('name', 'menu-outline');
    }
});

// Close menu when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.querySelector('ion-icon').setAttribute('name', 'menu-outline');
    });
});

// --- ID Link Smooth Scroll Offset ---
// Handle anchor links to offset the sticky header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        if (!targetId) return; // for # links

        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const headerHeight = 80; // Approximate header height
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});


// --- Search Functionality ---
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase().trim();
    const currentCards = document.querySelectorAll('.roadmap-card');

    currentCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const desc = card.querySelector('p').textContent.toLowerCase();

        if (title.includes(searchTerm) || desc.includes(searchTerm)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
});

// --- Scroll Effect for Header ---
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// --- Data Management ---
async function getRoadmaps() {
    // Priority 1: JS Constant (Bypasses CORS for local files)
    if (typeof ROADMAP_DATA !== 'undefined' && ROADMAP_DATA) {
        return ROADMAP_DATA;
    }

    // Priority 2: Fetch JSON (For local server environments)
    try {
        console.log('ROADMAP_DATA not found, fetching roadmaps.json...');
        const response = await fetch('roadmaps.json');
        if (response.ok) {
            return await response.json();
        }
    } catch (err) {
        console.warn('Fetch also failed (likely CORS). Ensure roadmaps-data.js is loaded correctly.');
    }

    return null;
}

// --- Roadmap Loader (Data to HTML) ---
async function loadRoadmap(roadmapId) {
    const container = document.getElementById('roadmapContent');
    if (!container) return;

    try {
        const roadmaps = await getRoadmaps();
        if (!roadmaps) throw new Error('Data not found');

        const roadmap = roadmaps.find(r => r.id === roadmapId);
        if (!roadmap) {
            container.innerHTML = '<p>Yol haritası bulunamadı.</p>';
            return;
        }

        // Update Hero Section
        const heroTitle = document.querySelector('.hero h2');
        const heroDesc = document.querySelector('.hero p');
        if (heroTitle) heroTitle.textContent = roadmap.title + " Yol Haritası";
        if (heroDesc) heroDesc.textContent = roadmap.heroSubtitle || roadmap.description;

        // Clear container
        container.innerHTML = '';

        roadmap.steps.forEach(step => {
            const stepHtml = `
                <div class="roadmap-step">
                    <span>${step.phase}</span>
                    <p>${step.topics.join(' • ')}</p>
                </div>
            `;
            container.innerHTML += stepHtml;
        });

    } catch (error) {
        console.error('Error loading roadmap:', error);
        container.innerHTML = '<p>Yol haritası yüklenirken bir hata oluştu. Lütfen sayfayı yenileyin veya verileri kontrol edin.</p>';
    }
}

// --- Home Page Card Loader ---
async function renderHomeCards() {
    const grid = document.getElementById('roadmapGrid');
    if (!grid) return;

    try {
        const roadmaps = await getRoadmaps();
        if (!roadmaps) throw new Error('Data source missing');

        grid.innerHTML = ''; // Clear loading state

        roadmaps.forEach(roadmap => {
            const card = document.createElement('article');
            card.className = 'roadmap-card';

            const hasContent = roadmap.steps && roadmap.steps.length > 0;
            const linkHref = hasContent ? `roadmap.html?id=${roadmap.id}` : '#';
            const onClickAttr = hasContent ? '' : 'onclick="alert(\'Yakında eklenecek!\')"';

            card.innerHTML = `
                <div class="card-header">
                    <ion-icon name="${roadmap.icon || 'map-outline'}"></ion-icon>
                    <h3>${roadmap.title}</h3>
                </div>
                <p>${roadmap.description}</p>
                <a href="${linkHref}" class="card-link" ${onClickAttr}>Görüntüle</a>
            `;
            grid.appendChild(card);
        });

    } catch (error) {
        console.error('Error rendering cards:', error);
        grid.innerHTML = '<p>Kartlar yüklenirken bir hata oluştu. Lütfen dosya yollarını ve konsol hata mesajlarını kontrol edin.</p>';
    }
}

// Auto-load based on page content
document.addEventListener('DOMContentLoaded', () => {
    // 1. Home Page Grid
    if (document.getElementById('roadmapGrid')) {
        renderHomeCards();
    }

    // 2. Roadmap Detail Page
    if (document.getElementById('roadmapContent')) {
        const container = document.getElementById('roadmapContent');

        // Only load dynamically if the container is near empty (e.g., just placeholder text)
        // This allows static HTML to work while still supporting dynamic loading if needed
        if (container.children.length <= 1) {
            const path = window.location.pathname;
            const fileName = path.split('/').pop().split('.')[0] || 'index';

            if (fileName !== 'index' && fileName !== '') {
                loadRoadmap(fileName);
            }
        }
    }
});



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

        const savedStr = localStorage.getItem(`techcompass_progress_${roadmapId}`);
        let savedData = {};
        if (savedStr) {
            try { savedData = JSON.parse(savedStr); } catch(e){}
        }

        roadmap.steps.forEach((step, index) => {
            let allTopicsChecked = true;
            const topicHtml = step.topics.map((topic, tIndex) => {
                const isChecked = savedData[`${index}-${tIndex}`] ? 'checked' : '';
                if (!isChecked) allTopicsChecked = false;
                return `
                <div class="topic-item">
                    <div class="topic-checkbox">
                        <input type="checkbox" id="topic-dyn-${roadmapId}-${index}-${tIndex}" onchange="updateStageCheckbox(this)" ${isChecked}>
                    </div>
                    <label for="topic-dyn-${roadmapId}-${index}-${tIndex}">${topic}</label>
                </div>
            `}).join('');
            if (step.topics.length === 0) allTopicsChecked = false;

            const stepChecked = allTopicsChecked ? 'checked' : '';

            const stepHtml = `
                <div class="roadmap-step">
                    <div class="step-checkbox">
                        <input type="checkbox" id="step-dyn-${roadmapId}-${index}" onchange="toggleAllTopics(this)" ${stepChecked}>
                    </div>
                    <div class="step-content">
                        <label for="step-dyn-${roadmapId}-${index}"><span>${step.phase}</span></label>
                        <div class="topics-list">
                            ${topicHtml}
                        </div>
                    </div>
                </div>
            `;
            container.innerHTML += stepHtml;
        });

        if (typeof updateProgressBar === 'function') {
            updateProgressBar();
        }

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

            let percentage = 0;
            if (hasContent) {
                const savedStr = localStorage.getItem(`techcompass_progress_${roadmap.id}`);
                const totalTopics = roadmap.steps.reduce((sum, step) => sum + (step.topics ? step.topics.length : 0), 0);
                if (savedStr && totalTopics > 0) {
                    try {
                        const savedData = JSON.parse(savedStr);
                        const checkedCount = Object.values(savedData).filter(v => v === true).length;
                        percentage = Math.round((checkedCount / totalTopics) * 100);
                    } catch(e) {}
                }
            }

            const progressBarHtml = hasContent ? `
                <div class="card-progress-container">
                    <div class="card-progress-title"><span>İlerleme</span><span>${percentage}%</span></div>
                    <div class="card-progress-bg">
                        <div class="card-progress-fill" style="width: ${percentage}%;"></div>
                    </div>
                </div>
            ` : '';

            card.innerHTML = `
                <div class="card-header">
                    <ion-icon name="${roadmap.icon || 'map-outline'}"></ion-icon>
                    <h3>${roadmap.title}</h3>
                </div>
                <p>${roadmap.description}</p>
                ${progressBarHtml}
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

// --- Checkbox Synchronization & Progress ---
function updateProgressBar() {
    const container = document.getElementById('roadmapContent');
    if (!container) return;
    
    const topicCheckboxes = container.querySelectorAll('.topics-list input[type="checkbox"]');
    if (topicCheckboxes.length === 0) return;
    
    let roadmapId = new URLSearchParams(window.location.search).get('id');
    if (!roadmapId && topicCheckboxes[0]) {
        const idParts = topicCheckboxes[0].id.split('-');
        idParts.pop(); idParts.pop();
        roadmapId = idParts.filter(p => p !== 'topic' && p !== 'dyn').join('-');
    }

    const total = topicCheckboxes.length;
    let checkedCount = 0;
    const progressData = {};

    topicCheckboxes.forEach(cb => {
        if (cb.checked) checkedCount++;
        const parts = cb.id.split('-');
        const tIndex = parts.pop();
        const index = parts.pop();
        progressData[`${index}-${tIndex}`] = cb.checked;
    });

    if (roadmapId) {
        localStorage.setItem(`techcompass_progress_${roadmapId}`, JSON.stringify(progressData));
    }

    const percentage = Math.round((checkedCount / total) * 100);
    
    const progressBarFill = document.getElementById('progressBarFill');
    const progressText = document.getElementById('progressText');
    
    if (progressBarFill) {
        progressBarFill.style.width = percentage + '%';
    }
    if (progressText) {
        progressText.textContent = percentage + '%';
    }
}

function toggleAllTopics(stageCheckbox) {
    const stepContainer = stageCheckbox.closest('.roadmap-step');
    if (!stepContainer) return;
    const topicCheckboxes = stepContainer.querySelectorAll('.topics-list input[type="checkbox"]');
    topicCheckboxes.forEach(cb => {
        cb.checked = stageCheckbox.checked;
    });
    updateProgressBar();
}

function updateStageCheckbox(topicCheckbox) {
    const stepContainer = topicCheckbox.closest('.roadmap-step');
    if (!stepContainer) return;
    const stageCheckbox = stepContainer.querySelector('.step-checkbox input[type="checkbox"]');
    const topicCheckboxes = stepContainer.querySelectorAll('.topics-list input[type="checkbox"]');
    if (stageCheckbox && topicCheckboxes.length > 0) {
        const allChecked = Array.from(topicCheckboxes).every(cb => cb.checked);
        stageCheckbox.checked = allChecked;
    }
    updateProgressBar();
}



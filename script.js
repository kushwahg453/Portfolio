// Project Data
const projects = [
    {
        title: 'Paperlite validation',
        description: 'A Paperlite Validation System is a secure, digital platform that streamlines document approvals by eliminating paper-based workflows through automated validation, tracking, and e-signatures.',
        image: 'https://via.placeholder.com/400x300',
        technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
        liveLink: '#',
        githubLink: '#',
        challenges: 'Validating paperlite systems is challenging due to data accuracy, regulatory compliance, system integration, and user adoption.'
    },
    {
        title: 'Task Management App',
        description: 'A collaborative task management application with real-time updates and team features.',
        image: 'https://via.placeholder.com/400x300',
        technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
        liveLink: '#',
        githubLink: '#',
        challenges: 'Handling real-time updates and maintaining data consistency across multiple users.'
    },
    {
        title: 'Travel World',
        description: 'A travel planning app that helps users explore destinations, build itineraries, and access real-time travel info worldwide.',
        image: 'https://via.placeholder.com/400x300',
        technologies: ['JavaScript', 'Weather API', 'Chart.js'],
        liveLink: '#',
        githubLink: '#',
        challenges: 'Challenges include integrating diverse APIs, handling real-time data, and ensuring a seamless user experience across regions.'
    }
];

// Load Projects
function loadProjects() {
    const projectGrid = document.querySelector('.project-grid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.liveLink}" target="_blank">Live Demo</a>
                    <a href="${project.githubLink}" target="_blank">GitHub</a>
                </div>
                <div class="project-challenges">
                    <p><strong>Challenges & Learnings:</strong> ${project.challenges}</p>
                </div>
            </div>
        `;
        
        projectGrid.appendChild(projectCard);
    });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Handling
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Navbar Scroll Effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadProjects();
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.project-card, .skill-item, .about-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
    observer.observe(el);
});
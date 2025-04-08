document.addEventListener('DOMContentLoaded', function() {
    // Project cards click handler
    const projectCards = document.querySelectorAll('.project-card');
    const modal = document.getElementById('project-modal');
    const modalContent = document.getElementById('modal-content');
    const closeModalBtn = document.getElementById('close-modal');
    
    // Project data
    const projectData = {
        echo: {
            title: "Echo – Audio Social Platform",
            description: "A comprehensive redesign of an audio-focused social platform that emphasizes accessibility and community engagement. The project involved extensive user research to understand pain points in the existing experience, development of user personas, and a complete information architecture overhaul.",
            challenge: "The original platform had poor user engagement and retention due to a confusing interface and lack of clear user journeys. Additionally, accessibility for users with visual impairments needed significant improvement.",
            approach: "I conducted 20+ user interviews and developed a revised IA based on card sorting exercises. The redesign focused on creating a clear content hierarchy, improving navigation, and implementing accessible design patterns including proper contrast ratios and screen reader compatibility.",
            outcome: "The redesigned platform saw a 42% increase in user engagement, 27% increase in content creation, and a substantial improvement in accessibility scores. The client reported significantly higher user satisfaction rates in post-launch surveys.",
            tags: ["UX/UI Design", "Mobile App", "Accessibility", "User Research"]
        },
        pulse: {
            title: "Pulse – Health Analytics Dashboard",
            description: "A comprehensive health metrics visualization platform designed for healthcare professionals to track patient data and identify trends. The dashboard presents complex medical information in an intuitive, scannable interface.",
            challenge: "Healthcare professionals needed to quickly analyze large amounts of patient data without being overwhelmed. The existing solution was data-rich but caused cognitive overload and made it difficult to identify critical patterns.",
            approach: "I developed a modular dashboard system with customizable views and applied information design principles to create visual hierarchies that highlight the most important data. Interactive data visualization components were designed to reveal insights through progressive disclosure.",
            outcome: "The new dashboard reduced decision-making time by 35% in usability tests and received exceptionally positive feedback from medical professionals. The system has been adopted by three major healthcare networks.",
            tags: ["Dashboard Design", "Data Visualization", "Healthcare", "Information Architecture"]
        },
        nova: {
            title: "Nova – E-commerce Reimagined",
            description: "A complete overhaul of an e-commerce platform focusing on personalization and discovery. The project reimagined the online shopping experience to feel more curated and tailored to individual user preferences.",
            challenge: "The client's conversion rates were below industry standards despite having high-quality products. User testing revealed that customers struggled to discover products relevant to their interests.",
            approach: "I designed a personalization engine interface that learns from user behavior and presents increasingly relevant recommendations. The browsing experience was redesigned to highlight product context and storytelling rather than just specifications.",
            outcome: "The redesigned platform achieved a 53% improvement in average order value and a 28% increase in conversion rate within three months of launch. User time-on-site increased by 4.7 minutes on average.",
            tags: ["E-commerce", "Web Design", "Personalization", "User Experience"]
        },
        terra: {
            title: "Terra – Sustainability Platform",
            description: "An educational platform promoting sustainable practices with interactive components to engage users and track their environmental impact. The design encourages ongoing commitment through gamification and community features.",
            challenge: "Environmental organizations struggled to maintain user engagement beyond initial sign-up. Educational content was perceived as dry and failed to inspire long-term behavior change.",
            approach: "I designed an experience that combines learning with action through interactive challenges, progress visualization, and community recognition. The interface uses subtle gamification elements to reinforce positive behaviors without trivializing the mission.",
            outcome: "User engagement metrics showed 68% of users returning weekly (compared to 23% on the previous platform). The platform has facilitated over 50,000 sustainable actions tracked through the challenge system.",
            tags: ["Educational", "Interactive", "Gamification", "Social Impact"]
        }
    };
    
    // Handle project card clicks
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const projectId = this.dataset.project;
            const project = projectData[projectId];
            
            // Populate modal content
            modalContent.innerHTML = `
                <div class="h-64 bg-gradient-to-br from-indigo-500 to-purple-600 relative mb-8 rounded-lg overflow-hidden">
                    <div class="absolute inset-0 flex items-center justify-center">
                        <p class="font-geist-mono text-2xl font-medium">${projectId.charAt(0).toUpperCase() + projectId.slice(1)}</p>
                    </div>
                </div>
                
                <h2 class="text-2xl font-bold mb-4">${project.title}</h2>
                <p class="text-gray-400 mb-6">${project.description}</p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                    <div>
                        <h3 class="text-lg font-semibold mb-3">The Challenge</h3>
                        <p class="text-gray-400">${project.challenge}</p>
                    </div>
                    
                    <div>
                        <h3 class="text-lg font-semibold mb-3">My Approach</h3>
                        <p class="text-gray-400">${project.approach}</p>
                    </div>
                </div>
                
                <div class="mb-8">
                    <h3 class="text-lg font-semibold mb-3">The Outcome</h3>
                    <p class="text-gray-400">${project.outcome}</p>
                </div>
                
                <div class="flex flex-wrap gap-2">
                    ${project.tags.map(tag => `<span class="text-xs px-2 py-1 bg-gray-800 rounded">${tag}</span>`).join('')}
                </div>
            `;
            
            // Show modal
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // Prevent body scrolling
        });
    });
    
    // Close modal
    closeModalBtn.addEventListener('click', function() {
        modal.classList.add('hidden');
        document.body.style.overflow = ''; // Restore body scrolling
    });
    
    // Close modal when clicking outside of content
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        }
    });
    
    // Form submission
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Simulate form submission
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            // Simulate API call
            setTimeout(function() {
                submitButton.textContent = 'Message Sent!';
                submitButton.classList.remove('bg-indigo-600');
                submitButton.classList.add('bg-green-600');
                
                // Reset form
                contactForm.reset();
                
                // Reset button after delay
                setTimeout(function() {
                    submitButton.textContent = originalText;
                    submitButton.classList.remove('bg-green-600');
                    submitButton.classList.add('bg-indigo-600');
                    submitButton.disabled = false;
                }, 3000);
            }, 1500);
        });
    }
    
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
});

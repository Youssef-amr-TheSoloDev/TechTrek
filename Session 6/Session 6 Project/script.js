/* ============================================================
   script.js – Course Hub
   Dynamic course cards, stats counter, form handling, nav toggle
   ============================================================ */

(function () {
    'use strict';

    // ---------- COURSE DATA ----------
    const courses = [
        {
            id: 1,
            title: 'Web Development Bootcamp',
            instructor: 'Dr. Sarah Chen',
            icon: 'fa-code',
            duration: '12 weeks',
            level: 'Beginner → Advanced',
            price: '$89',
        },
        {
            id: 2,
            title: 'UI/UX Design Mastery',
            instructor: 'Marcus Rivera',
            icon: 'fa-pencil-ruler',
            duration: '8 weeks',
            level: 'Intermediate',
            price: '$74',
        },
        {
            id: 3,
            title: 'Data Science & Analytics',
            instructor: 'Prof. Elena Vogt',
            icon: 'fa-chart-line',
            duration: '14 weeks',
            level: 'Advanced',
            price: '$99',
        },
        {
            id: 4,
            title: 'Digital Marketing Pro',
            instructor: 'James Okonkwo',
            icon: 'fa-bullhorn',
            duration: '6 weeks',
            level: 'All Levels',
            price: '$59',
        },
        {
            id: 5,
            title: 'Python for Everybody',
            instructor: 'Dr. Anita Sharma',
            icon: 'fa-python',
            duration: '10 weeks',
            level: 'Beginner',
            price: '$69',
        },
        {
            id: 6,
            title: 'Cloud Computing (AWS)',
            instructor: 'Michael Torres',
            icon: 'fa-cloud',
            duration: '9 weeks',
            level: 'Intermediate',
            price: '$94',
        },
    ];

    // ---------- RENDER COURSE CARDS ----------
    const coursesGrid = document.getElementById('coursesGrid');

    function renderCourses() {
        if (!coursesGrid) return;

        coursesGrid.innerHTML = courses
            .map(
                (course) => `
                    <div class="course-card">
                        <div class="course-icon">
                            <i class="fas ${course.icon}"></i>
                        </div>
                        <h3>${course.title}</h3>
                        <div class="course-instructor">
                            <i class="fas fa-user-graduate"></i> ${course.instructor}
                        </div>
                        <div class="course-meta">
                            <span><i class="fas fa-clock"></i> ${course.duration}</span>
                            <span><i class="fas fa-signal"></i> ${course.level}</span>
                        </div>
                        <div class="course-meta" style="border-top: none; padding-top: 6px; margin-top: 4px;">
                            <span class="course-price">${course.price}</span>
                            <span style="color: #5319da; font-weight: 600; font-size: 0.9rem;">
                                <i class="fas fa-arrow-right"></i> Enroll
                            </span>
                        </div>
                    </div>
                `
            )
            .join('');
    }

    // ---------- POPULATE FORM DROPDOWN ----------
    const courseSelect = document.getElementById('courseSelect');

    function populateCourseDropdown() {
        if (!courseSelect) return;

        // keep the first "— Choose a course —" option
        courses.forEach((course) => {
            const option = document.createElement('option');
            option.value = course.title;
            option.textContent = `${course.title} (${course.price})`;
            courseSelect.appendChild(option);
        });
    }

    // ---------- ENROLLMENT FORM HANDLING ----------
    const enrollForm = document.getElementById('enrollForm');
    const formMessage = document.getElementById('formMessage');

    if (enrollForm) {
        enrollForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('fullName').value.trim();
            const email = document.getElementById('email').value.trim();
            const course = document.getElementById('courseSelect').value;

            // Basic validation
            if (!name || !email || !course) {
                formMessage.className = 'form-message error';
                formMessage.textContent = '⚠️ Please fill in all fields.';
                return;
            }

            // Simple email check
            if (!email.includes('@') || !email.includes('.')) {
                formMessage.className = 'form-message error';
                formMessage.textContent = '⚠️ Please enter a valid email address.';
                return;
            }

            // Success!
            formMessage.className = 'form-message success';
            formMessage.textContent = `✅ Thank you, ${name}! You are now enrolled in "${course}". We'll send details to ${email}.`;

            // Reset form (optional)
            // this.reset();

            // Clear success message after 6 seconds
            setTimeout(() => {
                formMessage.className = 'form-message';
                formMessage.textContent = '';
            }, 6000);
        });
    }

    // ---------- STATS COUNTER (Intersection Observer) ----------
    const statNumbers = document.querySelectorAll('.stat-number');

    function animateStats() {
        statNumbers.forEach((stat) => {
            const target = parseInt(stat.getAttribute('data-target'), 10);
            if (isNaN(target)) return;

            // If already animated, skip
            if (stat.dataset.animated === 'true') return;

            let current = 0;
            const increment = Math.ceil(target / 60); // smooth over ~60 frames
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                stat.textContent = current + (target > 100 ? '+' : '');
            }, 25);

            stat.dataset.animated = 'true';
        });
    }

    // Use Intersection Observer to trigger counter when stats section is visible
    const numbersSection = document.querySelector('.numbers');

    if (numbersSection) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animateStats();
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.3 }
        );
        observer.observe(numbersSection);
    }

    // fallback: if observer fails or stats already visible, run after a delay
    // but we keep the observer as primary.

    // ---------- MOBILE HAMBURGER MENU ----------
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function (e) {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            // toggle icon between bars and times
            const icon = this.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });

        // Close nav when a link is clicked (on mobile)
        navLinks.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = hamburger.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            });
        });

        // Close nav when clicking outside (optional)
        document.addEventListener('click', function (e) {
            if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
                navLinks.classList.remove('active');
                const icon = hamburger.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            }
        });
    }

    // ---------- INIT ----------
    renderCourses();
    populateCourseDropdown();

    // If stats are already visible on load (e.g. on desktop without scroll),
    // the observer will catch them. But to be safe, also check after a tiny delay.
    // However, we want to avoid double-counting, so we check if any stat is already visible.
    setTimeout(() => {
        // If the numbers section is in view, trigger the counter.
        if (numbersSection) {
            const rect = numbersSection.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const threshold = 0.3;
            const visiblePart = Math.min(1, (windowHeight - rect.top) / windowHeight);
            if (visiblePart >= threshold && rect.top < windowHeight && rect.bottom > 0) {
                // section is already visible, animate
                animateStats();
            }
        }
    }, 500);

    console.log('🚀 Course Hub initialized successfully!');
})();
const courses = [
    { id: 1, title: "HTML Fundamentals", level: "Beginner", price: 500 },
    { id: 2, title: "CSS Mastery", level: "Beginner", price: 600 },
    { id: 3, title: "JavaScript Essentials", level: "Intermediate", price: 800 },
    { id: 4, title: "React.js Complete Guide", level: "Intermediate", price: 950 },
    { id: 5, title: "Node.js Backend Development", level: "Advanced", price: 1100 },
    { id: 6, title: "Python for Data Science", level: "Intermediate", price: 850 },
    { id: 7, title: "UI/UX Design Principles", level: "Beginner", price: 550 },
    { id: 8, title: "DevOps with Docker & Kubernetes", level: "Advanced", price: 1200 }
];

let students = [];
let filteredCourses = [...courses];
let studentIdCounter = 1;

const coursesGrid = document.getElementById('coursesGrid');
const coursesCount = document.getElementById('coursesCount');
const courseSearch = document.getElementById('courseSearch');
const levelFilter = document.getElementById('levelFilter');
const studentCourseSelect = document.getElementById('studentCourse');
const registerForm = document.getElementById('registerForm');
const formMessage = document.getElementById('formMessage');
const studentsBody = document.getElementById('studentsBody');
const studentsCount = document.getElementById('studentsCount');
const studentSearch = document.getElementById('studentSearch');
const clearAllBtn = document.getElementById('clearAllBtn');
const statCourses = document.getElementById('statCourses');
const statStudents = document.getElementById('statStudents');
const statBeginner = document.getElementById('statBeginner');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

function displayCourses() {
    if (filteredCourses.length === 0) {
        coursesGrid.innerHTML = `<p style="text-align:center; grid-column:1/-1; padding:40px; color:var(--gray-500);">No courses found matching your criteria.</p>`;
        coursesCount.textContent = 'Showing 0 courses';
        return;
    }
    let html = '';
    filteredCourses.forEach(course => {
        html += `
            <div class="course-card">
                <div class="course-icon"><i class="fas fa-book-open"></i></div>
                <h3>${course.title}</h3>
                <div class="course-level">${course.level}</div>
                <div class="course-meta">
                    <div class="course-price">$${course.price} <span>USD</span></div>
                    <span style="color:var(--primary); font-weight:600; font-size:0.9rem;"><i class="fas fa-arrow-right"></i> Enroll</span>
                </div>
            </div>
        `;
    });
    coursesGrid.innerHTML = html;
    coursesCount.textContent = `Showing ${filteredCourses.length} of ${courses.length} courses`;
}

function filterCourses() {
    const searchTerm = courseSearch.value.toLowerCase().trim();
    const level = levelFilter.value;
    filteredCourses = courses.filter(course => {
        const matchesSearch = course.title.toLowerCase().includes(searchTerm);
        const matchesLevel = level === 'all' || course.level === level;
        return matchesSearch && matchesLevel;
    });
    displayCourses();
}

function populateCourseDropdown() {
    studentCourseSelect.innerHTML = '<option value="">— Choose a course —</option>';
    courses.forEach(course => {
        const option = document.createElement('option');
        option.value = course.title;
        option.textContent = `${course.title} ($${course.price})`;
        studentCourseSelect.appendChild(option);
    });
}

function registerStudent(e) {
    e.preventDefault();
    const name = document.getElementById('studentName').value.trim();
    const email = document.getElementById('studentEmail').value.trim();
    const course = studentCourseSelect.value;

    if (!name || !email || !course) {
        formMessage.className = 'form-message error';
        formMessage.textContent = 'Please fill in all fields.';
        return;
    }
    if (!email.includes('@') || !email.includes('.')) {
        formMessage.className = 'form-message error';
        formMessage.textContent = 'Please enter a valid email address.';
        return;
    }
    const emailExists = students.some(s => s.email.toLowerCase() === email.toLowerCase());
    if (emailExists) {
        formMessage.className = 'form-message error';
        formMessage.textContent = 'A student with this email is already registered.';
        return;
    }

    const newStudent = {
        id: studentIdCounter++,
        name: name,
        email: email,
        course: course
    };
    students.push(newStudent);
    displayStudents();
    updateStatistics();
    registerForm.reset();
    formMessage.className = 'form-message success';
    formMessage.textContent = `✅ ${name} successfully registered for "${course}"!`;
    setTimeout(() => {
        formMessage.className = 'form-message';
        formMessage.textContent = '';
    }, 5000);
}

function displayStudents() {
    const searchTerm = studentSearch.value.toLowerCase().trim();
    let filtered = students;
    if (searchTerm) {
        filtered = students.filter(s =>
            s.name.toLowerCase().includes(searchTerm) ||
            s.email.toLowerCase().includes(searchTerm) ||
            s.course.toLowerCase().includes(searchTerm)
        );
    }
    if (filtered.length === 0) {
        studentsBody.innerHTML = `<tr><td colspan="4" style="text-align:center; padding:40px; color:var(--gray-500);">No students found.</td></tr>`;
        studentsCount.textContent = '0 students registered';
        return;
    }
    let html = '';
    filtered.forEach(student => {
        html += `
            <tr>
                <td><strong>${student.name}</strong></td>
                <td>${student.email}</td>
                <td>${student.course}</td>
                <td><button class="btn-sm" data-id="${student.id}"><i class="fas fa-trash-alt"></i> Delete</button></td>
            </tr>
        `;
    });
    studentsBody.innerHTML = html;
    studentsCount.textContent = `${filtered.length} of ${students.length} students registered`;
    document.querySelectorAll('.students-table .btn-sm').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = parseInt(this.dataset.id);
            deleteStudent(id);
        });
    });
}

function deleteStudent(id) {
    if (!confirm('Are you sure you want to delete this student?')) return;
    students = students.filter(s => s.id !== id);
    displayStudents();
    updateStatistics();
}

function searchStudents() {
    displayStudents();
}

function clearAllStudents() {
    if (students.length === 0) {
        alert('No students to clear.');
        return;
    }
    if (!confirm('Are you sure you want to delete ALL students?')) return;
    students = [];
    displayStudents();
    updateStatistics();
}

function updateStatistics() {
    const totalCourses = courses.length;
    const totalStudents = students.length;
    const beginnerCount = courses.filter(c => c.level === 'Beginner').length;
    statCourses.textContent = totalCourses;
    statStudents.textContent = totalStudents;
    statBeginner.textContent = beginnerCount;
}

courseSearch.addEventListener('input', filterCourses);
levelFilter.addEventListener('change', filterCourses);
registerForm.addEventListener('submit', registerStudent);
studentSearch.addEventListener('input', searchStudents);
clearAllBtn.addEventListener('click', clearAllStudents);

hamburger.addEventListener('click', function(e) {
    e.stopPropagation();
    navLinks.classList.toggle('active');
    const icon = this.querySelector('i');
    if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    }
});
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = hamburger.querySelector('i');
        if (icon) {
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        }
    });
});
document.addEventListener('click', function(e) {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        navLinks.classList.remove('active');
        const icon = hamburger.querySelector('i');
        if (icon) {
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        }
    }
});

populateCourseDropdown();
displayCourses();
displayStudents();
updateStatistics();
// Portfolio Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== Initialize Current Year in Footer =====
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
    
    // ===== Initialize Last Updated Date =====
    const lastUpdated = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    document.getElementById('lastUpdated').textContent = lastUpdated;
    
    // ===== Smooth Scrolling for Navigation Links =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile navbar if open
                const navbarToggler = document.querySelector('.navbar-toggler');
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }
            }
        });
    });
    
    // ===== Navbar Background on Scroll =====
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });
    
    // ===== Project Data from CV =====
    const projects = [
        {
            id: 1,
            title: "EduLens AI (Machine Learning + Analytics Platform)",
            category: "data",
            description: "Built ML models to predict academic risk factors with integrated dashboards for performance tracking.",
            image: "assets/images/edulens-ai.jpg",
            tags: ["Python", "Machine Learning", "Django", "Data Analysis"],
            details: {
                problem: "Rural schools lacked tools to track academic performance and improve decision-making.",
                solution: "Developed ML models to predict academic risk factors and created analytics dashboard.",
                tech: ["Python", "Scikit-learn", "Django", "Pandas", "Power BI"],
                features: ["Academic risk prediction", "Performance tracking dashboard", "Data cleaning pipeline", "Feature engineering"],
                repo: "https://github.com/BrianZiro/EduLensProject.git", // Add your actual GitHub link
                demo: "#" // Add your live demo link if available
            }
        },

        {
    id: 2,
    title: "ZiroCreative Agency (Web Design & Digital Solutions)",
    category: "web",
    description: "A creative agency offering professional web design, branding, and digital solutions for businesses.",
    image: "assets/images/zirocreative-agency.png",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "Branding"],
    details: {
        problem: "Many small and medium-sized businesses struggled with online visibility and lacked modern digital branding.",
        solution: "Designed and developed responsive websites, brand kits, and digital products tailored to client needs.",
        tech: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "Figma"],
        features: [
            "Responsive and modern website designs",
            "Branding & Logo creation",
            "Landing page development",
            "Portfolio and business websites",
            "SEO-ready structure"
        ],
        repo: "https://github.com/BrianZiro/zirocreativeagency.git", // Replace with real repo if available
        demo: "#" // Add live link if you host it
    }
},


{
    id: 3,
    title: "PayWote (Bulk Payment Automation System)",
    category: "fintech",
    description: "A bulk payment system that automates payouts, integrates with M-Pesa APIs, and supports multi-channel disbursement.",
    image: "assets/images/paywote.jpg",
    tags: ["Django", "Python", "FinTech", "API Integration", "M-Pesa"],
    details: {
        problem: "Organizations struggled to send bulk payments manually, leading to delays, errors, and high operational costs.",
        solution: "Developed an automated bulk payment engine with secure API workflows, instant payment reconciliation, and M-Pesa integration.",
        tech: [
            "Django",
            "Python",
            "Django REST Framework",
            "M-Pesa Daraja API",
            "PostgreSQL",
            "HTML/CSS/JS"
        ],
        features: [
            "Bulk payment file upload (CSV/Excel)",
            "Automated payouts via M-Pesa API",
            "Real-time payment status updates",
            "Webhook-based transaction validation",
            "Multi-user roles & permissions",
            "Payment history & reporting dashboard"
        ],
        repo: "https://github.com/BrianZiro/paywote.git", // replace with actual repo
        demo: "#" // add live link if hosted
    }
},


{
    id: 4,
    title: "Medical Insurance Cost Prediction (Machine Learning)",
    category: "data",
    description: "A machine learning model that predicts medical insurance charges based on personal and lifestyle factors.",
    image: "assets/images/insurance-ml.jpg",
    tags: ["Python", "Machine Learning", "Regression", "Pandas", "Scikit-learn"],
    details: {
        problem: "Insurance companies struggle to estimate accurate medical charges due to varying age, BMI, smoking habits, and lifestyle factors.",
        solution: "Developed regression models to predict insurance costs using demographic and health-related attributes.",
        tech: [
            "Python",
            "Pandas",
            "NumPy",
            "Scikit-learn",
            "Matplotlib",
            "Seaborn"
        ],
        features: [
            "Data preprocessing and cleaning",
            "One-Hot Encoding for categorical variables",
            "Trained multiple regression models",
            "Model evaluation using MAE, RMSE, and R²",
            "Feature importance analysis (smoker & BMI strongly influence charges)"
        ],
        repo: "https://github.com/BrianZiro/Insuarance_Prediction.git", // replace with your actual repo
        demo: "#" // add live link if you deploy the notebook or app
    }
},


{
    id: 7,
    title: "Economic Crises Analysis in Africa",
    category: "data",
    description: "A data-driven analysis of systemic and inflation crises in Africa, identifying key factors and thresholds for financial instability.",
    image: "assets/images/economic-crises.jpg",
    tags: ["Python", "Data Analysis", "Econometrics", "Pandas", "Matplotlib", "Seaborn"],
    details: {
        problem: "Economic crises such as systemic banking crises and high inflation threaten financial stability and growth in African countries.",
        solution: "Analyzed historical economic data to identify factors most associated with systemic crises and determine critical inflation thresholds.",
        tech: [
            "Python",
            "Pandas",
            "NumPy",
            "Matplotlib",
            "Seaborn",
            "Statsmodels",
            "Scikit-learn"
        ],
        features: [
            "Exploratory data analysis of economic indicators",
            "Correlation and trend analysis of systemic crises factors",
            "Threshold identification for inflation crisis certainty",
            "Data visualization of distributions and relationships",
            "Predictive modeling for risk assessment",
            "Insightful reports for policy and financial decision-making"
        ],
        repo: "https://github.com/BrianZiro/Africa_Economic_Crisis.git", // replace with actual GitHub repo
        demo: "#" // add live dashboard or report link if hosted
    }
},


{
    id: 8,
    title: "Car Insurance Claim Analysis (Machine Learning)",
    category: "data",
    description: "A data-driven analysis of car insurance claims to detect fraud, predict future claims, and optimize policy pricing.",
    image: "assets/images/car-insurance-analysis.jpg",
    tags: ["Python", "Machine Learning", "Data Analysis", "Pandas", "Scikit-learn"],
    details: {
        problem: "Car insurance companies face challenges in efficiently managing claims, minimizing risks, and detecting fraudulent activities.",
        solution: "Analyzed car insurance claim data to uncover patterns, predict claims, detect fraud, and improve decision-making in risk assessment.",
        tech: [
            "Python",
            "Pandas",
            "NumPy",
            "Scikit-learn",
            "Matplotlib",
            "Seaborn",
            "Statsmodels"
        ],
        features: [
            "Data exploration, cleaning, and preprocessing",
            "Visualization of claim patterns and trends",
            "Predictive modeling for future claim prediction",
            "Fraud detection using anomaly detection techniques",
            "Customer risk segmentation for policy optimization",
            "Insights to improve insurance decision-making"
        ],
        repo: "https://github.com/BrianZiro/CarInsuaranceClaimAnalysis.git", // replace with actual repo
        demo: "#" // add live notebook or dashboard link if hosted
    }
},



{
    id: 9,
    title: "Mental Health & Lifestyle Habits Analysis (2019-2024)",
    category: "data",
    description: "A comprehensive analysis of mental health in relation to lifestyle habits, exploring factors such as sleep, diet, exercise, and social interactions.",
    image: "assets/images/mental-health-analysis.jpg",
    tags: ["Python", "Data Analysis", "Machine Learning", "Pandas", "Seaborn", "Matplotlib"],
    details: {
        problem: "Mental health issues are influenced by lifestyle choices, but understanding the relationships between these factors requires structured analysis.",
        solution: "Analyzed lifestyle and mental health data to identify trends, correlations, and risk factors, providing insights for interventions and predictive modeling.",
        tech: [
            "Python",
            "Pandas",
            "NumPy",
            "Matplotlib",
            "Seaborn",
            "Scikit-learn",
            "Statsmodels"
        ],
        features: [
            "Data cleaning and preprocessing",
            "Exploratory Data Analysis (EDA) with visualizations",
            "Correlation matrix to examine variable relationships",
            "Statistical analysis including skewness and distributions",
            "Predictive modeling for mental health risk factors",
            "Insights for professionals and policymakers"
        ],
        repo: "https://github.com/BrianZiro/Mental-Health-Analysis-.git", // replace with actual repo
        demo: "#" // add live notebook or dashboard link if hosted
    }
},
{
    id: 5,
    title: "School Website (Django + Full Features)",
    category: "web",
    description: "A fully featured school website built with Django, including tenders page, news, gallery, academics, admissions, and contact system.",
    image: "assets/images/school-website-django.jpg",
    tags: ["Django", "HTML", "CSS", "JavaScript", "Bootstrap"],
    details: {
        problem: "Many schools lacked a modern, dynamic website that could publish information such as tenders, news, and academic programs.",
        solution: "Developed a complete school website with Django backend, allowing the school to manage content like tenders, news, teachers, and gallery images.",
        tech: [
            "Django",
            "Django Admin",
            "HTML5",
            "CSS3",
            "JavaScript",
            "Bootstrap",
            "SQLite / PostgreSQL"
        ],
        features: [
            "Dynamic homepage with sliders and announcements",
            "About & school history section",
            "Academics page with programs",
            "Admissions page with downloadable forms",
            "Teachers & staff directory",
            "Photo gallery with admin uploads",
            "Tenders page with PDF uploads and expiry dates",
            "News/Blog updates",
            "Contact form with email notifications",
            "Django backend for easy content management"
        ],
        repo: "https://github.com/BrianZiro/urban-trends.git", // replace with your repo
        demo: "#" // add live link if hosted
    }
},



{
    id: 6,
    title: "EduLens – Student Dropout Risk Prediction (Machine Learning)",
    category: "data",
    description: "A machine learning system that predicts which students are at high risk of dropping out based on academic, behavioral, and attendance data.",
    image: "assets/images/edulens-dropout.jpg",
    tags: ["Python", "Machine Learning", "Django", "Data Analytics"],
    details: {
        problem: "Many schools struggle to identify at-risk students early, leading to preventable dropout cases and poor academic outcomes.",
        solution: "Developed machine learning models that analyze school data to flag high-risk students and provide insights for early intervention.",
        tech: [
            "Python",
            "Pandas",
            "NumPy",
            "Scikit-learn",
            "Django",
            "Matplotlib",
            "Seaborn"
        ],
        features: [
            "Data cleaning & preprocessing pipeline",
            "Feature engineering for attendance, performance, and behavior",
            "Trained ML models for dropout risk classification",
            "Model evaluation using accuracy, precision, recall, and ROC-AUC",
            "Django dashboard for risk monitoring",
            "Visualization of trends and student profiles"
        ],
        repo: "https://github.com/BrianZiro/edulensml.git", // replace with actual GitHub repo
        demo: "#" // add live demo link if hosted
    }
},




        {
            id: 2,
            title: "Zipay — Digital Payment Platform",
            category: "web",
            description: "A secure web-based payment solution with Django backend and REST APIs.",
            image: "assets/images/zipay.jpg",
            tags: ["Django", "REST API", "Python", "SQL"],
            details: {
                problem: "Need for a secure digital payment solution for small businesses.",
                solution: "Developed full-featured payment platform with user authentication and wallet system.",
                tech: ["Django", "Django REST Framework", "MySQL", "HTML/CSS/JS"],
                features: ["User authentication", "Wallet logic", "Deposit/withdrawal system", "Transaction records"],
                repo: "https://github.com/BrianZiro/Zipay", // Add your actual GitHub link
                demo: "#" // Add your live demo link if available
            }
        },
        {
            id: 3,
            title: "NotifyHub — SMS & Notification Platform",
            category: "web",
            description: "Communication platform for sending branded SMS and notifications.",
            image: "assets/images/notifyhub.jpg",
            tags: ["Django", "APIs", "SMS", "Dashboard"],
            details: {
                problem: "Businesses needed efficient communication platform for customer notifications.",
                solution: "Built SMS platform with message routing, analytics, and delivery reports.",
                tech: ["Django", "APIs", "JavaScript", "Database Design"],
                features: ["Sender ID logic", "Message routing", "Analytics dashboard", "Delivery reports"],
                repo: "https://github.com/BrianZiro/notifyhub.git", // Add your actual GitHub link
                demo: "#" // Add your live demo link if available
            }
        },
        {
            id: 4,
            title: "Students' Sleeping Patterns Analysis",
            category: "analytics",
            description: "Statistical analysis on sleeping habits with Tableau visualization dashboards.",
            image: "assets/images/sleep-analysis.jpg",
            tags: ["Python", "Tableau", "Statistics", "Data Visualization"],
            details: {
                problem: "Understanding relationship between sleep patterns and student productivity.",
                solution: "Conducted statistical analysis and created visualization dashboards.",
                tech: ["Python", "Tableau", "Excel", "Statistical Analysis"],
                features: ["Statistical analysis", "Tableau dashboards", "Correlation studies", "Data visualization"],
                repo: "https://github.com/BrianZiro/Sleep-Patterns-Analysis", // Add your actual GitHub link
                demo: "#" // Add your Tableau dashboard link
            }
        },
        {
            id: 5,
            title: "Term Deposit Subscription Prediction",
            category: "data",
            description: "Classification model for banking telemarketing data using Scikit-learn.",
            image: "assets/images/term-deposit.jpg",
            tags: ["Python", "Machine Learning", "Scikit-learn", "Classification"],
            details: {
                problem: "Bank needed to predict which customers would subscribe to term deposits.",
                solution: "Developed classification model with feature optimization.",
                tech: ["Python", "Scikit-learn", "Pandas", "Feature Engineering"],
                features: ["Classification model", "Feature optimization", "Model evaluation", "Prediction accuracy"],
                repo: "https://github.com/BrianZiro/Term-Deposit-Prediction", // Add your actual GitHub link
                demo: "#"
            }
        },
        {
            id: 6,
            title: "Loan Amortization (Cash Money Empire)",
            category: "finance",
            description: "Financial calculations system with actuary-based formulas for loan repayment.",
            image: "assets/images/loan-system.jpg",
            tags: ["Django", "Finance", "SQL", "Actuarial"],
            details: {
                problem: "Need for automated loan amortization and sinking fund calculations.",
                solution: "Built Django system with actuarial formulas and reporting.",
                tech: ["Django", "SQL", "Python", "Financial Modeling"],
                features: ["Loan amortization", "Sinking fund calculations", "Reporting logic", "Database integration"],
                repo: "https://github.com/BrianZiro/cashmoneyempire_V.2.0.git", // Add your actual GitHub link
                demo: "#"
            }
        },
        {
            id: 7,
            title: "Django E-Commerce Platform",
            category: "web",
            description: "Full-featured e-commerce platform with secure checkout and inventory management.",
            image: "assets/images/ecommerce.jpg",
            tags: ["Django", "E-commerce", "APIs", "Web Development"],
            details: {
                problem: "Small businesses needed customizable e-commerce solution.",
                solution: "Built complete e-commerce platform with Django backend.",
                tech: ["Django", "HTML/CSS/JS", "Database", "Payment Integration"],
                features: ["Secure login", "Product management", "Checkout system", "Inventory APIs"],
                repo: "https://github.com/BrianZiro/urban-trends.git", // Add your actual GitHub link
                demo: "#" // Add your live demo link
            }
        },
        {
            id: 8,
            title: "Sales Forecasting Model",
            category: "analytics",
            description: "Forecasting monthly sales using Python and Excel for inventory management.",
            image: "assets/images/sales-forecast.jpg",
            tags: ["Python", "Excel", "Forecasting", "Analytics"],
            details: {
                problem: "Business needed accurate sales forecasts for inventory planning.",
                solution: "Developed forecasting model to predict monthly sales.",
                tech: ["Python", "Excel", "Time Series", "Data Analysis"],
                features: ["Sales forecasting", "Inventory optimization", "Predictive analysis", "Excel integration"],
                repo: "https://github.com/BrianZiro/Sales-Forecasting", // Add your actual GitHub link
                demo: "#"
            }
        },
        {
            id: 9,
            title: "Interactive Business Dashboard (Retail)",
            category: "analytics",
            description: "Excel dashboard for KPI monitoring with pivot tables and dynamic visualization.",
            image: "assets/images/business-dashboard.jpg",
            tags: ["Excel", "Dashboard", "Data Visualization", "KPI"],
            details: {
                problem: "Retail business needed real-time KPI monitoring dashboard.",
                solution: "Created interactive Excel dashboard with dynamic visualizations.",
                tech: ["Excel", "Pivot Tables", "Charts", "Data Visualization"],
                features: ["KPI monitoring", "Dynamic visualization", "Pivot tables", "Interactive slicers"],
                repo: "https://github.com/BrianZiro/Business-Dashboard", // Add your actual GitHub link
                demo: "#" // Add link to download Excel template
            }
        },
        {
            id: 10,
            title: "Financial Budget Tracker",
            category: "finance",
            description: "Automated budget monitoring system with macros and variance analysis.",
            image: "assets/images/budget-tracker.jpg",
            tags: ["Excel", "VBA", "Finance", "Automation"],
            details: {
                problem: "Individuals and small businesses needed automated budget tracking.",
                solution: "Built Excel-based budget tracker with automation and reporting.",
                tech: ["Excel", "VBA", "Macros", "Financial Analysis"],
                features: ["Budget monitoring", "Cost control", "Variance analysis", "Automated reports"],
                repo: "https://github.com/BrianZiro/Budget-Tracker", // Add your actual GitHub link
                demo: "#" // Add link to download Excel template
            }
        }
    ];
    
    // ===== Initialize Projects =====
    function initializeProjects() {
        const projectContainer = document.getElementById('projectContainer');
        
        if (!projectContainer) return;
        
        // Clear existing content
        projectContainer.innerHTML = '';
        
        // Create project cards
        projects.forEach(project => {
            const projectCard = createProjectCard(project);
            projectContainer.appendChild(projectCard);
        });
        
        // Initialize project filtering
        initializeProjectFiltering();
    }
    
    // ===== Create Project Card with Code and Live Preview Links =====
    function createProjectCard(project) {
        const col = document.createElement('div');
        col.className = `col-md-6 col-lg-4 project-item ${project.category}`;
        
        // Determine button states based on available links
        const codeBtn = project.details.repo && project.details.repo !== '#' 
            ? `<a href="${project.details.repo}" class="btn btn-primary btn-sm" target="_blank">
                  <i class="fab fa-github me-1"></i> View Code
               </a>`
            : `<button class="btn btn-primary btn-sm" disabled>
                  <i class="fab fa-github me-1"></i> Code Private
               </button>`;
        
        const demoBtn = project.details.demo && project.details.demo !== '#'
            ? `<a href="${project.details.demo}" class="btn btn-outline-primary btn-sm" target="_blank">
                  <i class="fas fa-external-link-alt me-1"></i> Live Preview
               </a>`
            : `<button class="btn btn-outline-primary btn-sm view-details" data-project-id="${project.id}">
                  <i class="fas fa-info-circle me-1"></i> View Details
               </button>`;
        
        col.innerHTML = `
            <div class="project-card card h-100 shadow-sm">
                <img src="${project.image}" class="card-img-top" alt="${project.title}" loading="lazy">
                <div class="card-body d-flex flex-column">
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                    </div>
                    <h5 class="card-title">${project.title}</h5>
                    <p class="card-text flex-grow-1">${project.description}</p>
                    <div class="project-actions mt-3">
                        ${codeBtn}
                        ${demoBtn}
                    </div>
                </div>
            </div>
        `;
        
        return col;
    }
    
    // ===== Project Filtering =====
    function initializeProjectFiltering() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const projectItems = document.querySelectorAll('.project-item');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                const filter = this.getAttribute('data-filter');
                
                // Filter projects
                projectItems.forEach(item => {
                    if (filter === 'all' || item.classList.contains(filter)) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, 100);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
                
                // Update project count
                updateProjectCount(filter);
            });
        });
        
        // Initialize count
        updateProjectCount('all');
    }
    
    // ===== Update Project Count =====
    function updateProjectCount(filter) {
        const count = filter === 'all' 
            ? projects.length 
            : projects.filter(p => p.category === filter).length;
        
        const countElement = document.querySelector('.project-count');
        if (!countElement) {
            const filterContainer = document.querySelector('.project-filter');
            const countElement = document.createElement('div');
            countElement.className = 'project-count text-center mt-3';
            filterContainer.appendChild(countElement);
        }
        
        document.querySelector('.project-count').textContent = 
            `Showing ${count} ${filter === 'all' ? 'projects' : filter + ' projects'}`;
    }
    
    // ===== Project Details Modal =====
    function initializeProjectModals() {
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('view-details')) {
                const projectId = parseInt(e.target.getAttribute('data-project-id'));
                const project = projects.find(p => p.id === projectId);
                
                if (project) {
                    showProjectModal(project);
                }
            }
        });
    }
    
    function showProjectModal(project) {
        // Create modal HTML
        const modalHTML = `
            <div class="modal fade" id="projectModal" tabindex="-1" aria-labelledby="projectModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="projectModalLabel">${project.title}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-md-6 mb-4">
                                    <img src="${project.image}" alt="${project.title}" class="img-fluid rounded">
                                </div>
                                <div class="col-md-6">
                                    <h6>Problem</h6>
                                    <p>${project.details.problem}</p>
                                    
                                    <h6 class="mt-3">Solution</h6>
                                    <p>${project.details.solution}</p>
                                    
                                    <h6 class="mt-3">Tech Stack</h6>
                                    <div class="d-flex flex-wrap gap-2 mb-3">
                                        ${project.details.tech.map(tech => `<span class="badge bg-primary">${tech}</span>`).join('')}
                                    </div>
                                </div>
                            </div>
                            
                            <h6>Key Features</h6>
                            <ul>
                                ${project.details.features.map(feature => `<li>${feature}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="modal-footer">
                            ${project.details.repo && project.details.repo !== '#' ? 
                                `<a href="${project.details.repo}" class="btn btn-outline-primary" target="_blank">
                                    <i class="fab fa-github me-2"></i>View Code
                                </a>` : ''
                            }
                            ${project.details.demo && project.details.demo !== '#' ? 
                                `<a href="${project.details.demo}" class="btn btn-primary" target="_blank">
                                    <i class="fas fa-external-link-alt me-2"></i>Live Demo
                                </a>` : ''
                            }
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Remove existing modal
        const existingModal = document.getElementById('projectModal');
        if (existingModal) {
            existingModal.remove();
        }
        
        // Add modal to body
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        
        // Show modal
        const modal = new bootstrap.Modal(document.getElementById('projectModal'));
        modal.show();
    }
    
    // ===== Skills Animation =====
    function initializeSkillsAnimation() {
        const skillBars = document.querySelectorAll('.progress-bar');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target;
                    const width = progressBar.getAttribute('data-width');
                    
                    setTimeout(() => {
                        progressBar.style.width = width + '%';
                    }, 300);
                    
                    observer.unobserve(progressBar);
                }
            });
        }, { threshold: 0.5 });
        
        skillBars.forEach(bar => {
            observer.observe(bar);
        });
    }
    
    // ===== Contact Form Handling =====
    function initializeContactForm() {
        const contactForm = document.getElementById('contactForm');
        
        if (!contactForm) return;
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            let isValid = true;
            
            // Reset validation
            contactForm.querySelectorAll('.is-invalid').forEach(el => {
                el.classList.remove('is-invalid');
            });
            
            // Validate fields
            if (!name) {
                document.getElementById('name').classList.add('is-invalid');
                isValid = false;
            }
            
            if (!email || !isValidEmail(email)) {
                document.getElementById('email').classList.add('is-invalid');
                isValid = false;
            }
            
            if (!subject) {
                document.getElementById('subject').classList.add('is-invalid');
                isValid = false;
            }
            
            if (!message) {
                document.getElementById('message').classList.add('is-invalid');
                isValid = false;
            }
            
            if (!isValid) return;
            
            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const submitText = submitBtn.querySelector('.submit-text');
            const spinner = submitBtn.querySelector('.spinner-border');
            
            submitText.classList.add('d-none');
            spinner.classList.remove('d-none');
            submitBtn.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                // In a real application, you would send data to a server here
                // For demo purposes, we'll simulate a successful submission
                
                // Reset form
                contactForm.reset();
                
                // Show success message
                const formMessage = document.getElementById('formMessage');
                formMessage.innerHTML = `
                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                        <i class="fas fa-check-circle me-2"></i>
                        Message sent successfully! I'll get back to you soon.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                `;
                
                // Reset button
                submitText.classList.remove('d-none');
                spinner.classList.add('d-none');
                submitBtn.disabled = false;
                
                // Scroll to message
                formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                
                // Remove alert after 5 seconds
                setTimeout(() => {
                    const alert = formMessage.querySelector('.alert');
                    if (alert) {
                        alert.remove();
                    }
                }, 5000);
                
            }, 1500);
        });
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // ===== Testimonial Carousel Auto-play =====
    function initializeTestimonialCarousel() {
        const carousel = document.getElementById('testimonialCarousel');
        if (carousel) {
            const carouselInstance = new bootstrap.Carousel(carousel, {
                interval: 5000,
                wrap: true
            });
        }
    }
    
    // ===== Dark Mode Toggle (Optional) =====
    function initializeDarkModeToggle() {
        // Create dark mode toggle button
        const darkModeToggle = document.createElement('button');
        darkModeToggle.className = 'btn btn-sm btn-outline-secondary position-fixed';
        darkModeToggle.style.top = '100px';
        darkModeToggle.style.right = '20px';
        darkModeToggle.style.zIndex = '1000';
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        darkModeToggle.title = 'Toggle Dark Mode';
        
        document.body.appendChild(darkModeToggle);
        
        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            enableDarkMode();
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
        
        // Toggle dark mode
        darkModeToggle.addEventListener('click', function() {
            if (document.body.classList.contains('dark-mode')) {
                disableDarkMode();
                this.innerHTML = '<i class="fas fa-moon"></i>';
            } else {
                enableDarkMode();
                this.innerHTML = '<i class="fas fa-sun"></i>';
            }
        });
    }
    
    function enableDarkMode() {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        
        // Add dark mode styles
        if (!document.querySelector('#dark-mode-styles')) {
            const darkStyles = `
                <style id="dark-mode-styles">
                    body.dark-mode {
                        background-color: #121212;
                        color: #e0e0e0;
                    }
                    
                    body.dark-mode .bg-light {
                        background-color: #1e1e1e !important;
                    }
                    
                    body.dark-mode .card {
                        background-color: #1e1e1e;
                        color: #e0e0e0;
                    }
                    
                    body.dark-mode .navbar {
                        background-color: #1e1e1e !important;
                    }
                    
                    body.dark-mode .modal-content {
                        background-color: #1e1e1e;
                        color: #e0e0e0;
                    }
                </style>
            `;
            document.head.insertAdjacentHTML('beforeend', darkStyles);
        }
    }
    
    function disableDarkMode() {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
    
    // ===== Initialize Everything =====
    function initializeApp() {
        initializeProjects();
        initializeProjectModals();
        initializeSkillsAnimation();
        initializeContactForm();
        initializeTestimonialCarousel();
        
        // Optional: Uncomment to enable dark mode toggle
        // initializeDarkModeToggle();
    }
    
    // Start the application
    initializeApp();
});
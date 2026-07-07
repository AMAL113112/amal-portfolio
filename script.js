// ===============================
// STICKY PROFILE CARD
// ===============================

const profileCard = document.getElementById("profileCard");

window.addEventListener("scroll", () => {
    if (window.scrollY > 250) {
        profileCard.classList.add("show");
    } else {
        profileCard.classList.remove("show");
    }
});

// ===============================
// REVEAL ANIMATION
// ===============================

const revealElements = document.querySelectorAll(
    ".training-section, .tech-section, .project-section, .certificates-section, .contact-section"
);

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
            }
        });
    },
    { threshold: 0.15 }
);

revealElements.forEach(element => {
    element.classList.add("hidden-section");
    revealObserver.observe(element);
});

// ===============================
// FLOATING TECH
// ===============================

const techItems = document.querySelectorAll(".tech");

techItems.forEach(item => {
    item.style.animationDelay = `${Math.random() * 3}s`;
    item.style.animationDuration = `${3 + Math.random() * 3}s`;
});

// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// ===============================
// TECH HOVER GLOW
// ===============================

techItems.forEach(item => {
    item.addEventListener("mouseenter", () => {
        item.style.boxShadow =
            "0 15px 40px rgba(255,255,255,0.15)";
    });

    item.addEventListener("mouseleave", () => {
        item.style.boxShadow = "none";
    });
});

// ===============================
// PROJECT TAG HOVER
// ===============================

const tags = document.querySelectorAll(".project-tags span");

tags.forEach(tag => {
    tag.addEventListener("mouseenter", () => {
        tag.style.transform = "translateY(-3px)";
    });

    tag.addEventListener("mouseleave", () => {
        tag.style.transform = "translateY(0px)";
    });
});

// ===============================
// PROJECT 1 SLIDER (SMART CLINIC)
// ===============================

const project1Images = [
    "images/project1/1.png",
    "images/project1/2.png",
    "images/project1/3.png",
    "images/project1/4.png",
    "images/project1/5.png",
    "images/project1/6.png",
    "images/project1/7.png"
];

let currentProject1 = 0;
const project1Image = document.getElementById("project1Image");

function updateProject1() {
    if (!project1Image) return;

    project1Image.style.opacity = "0";

    setTimeout(() => {
        project1Image.src = project1Images[currentProject1];
        project1Image.style.opacity = "1";
    }, 180);
}

function nextProject1() {
    currentProject1++;
    if (currentProject1 >= project1Images.length) {
        currentProject1 = 0;
    }
    updateProject1();
}

function prevProject1() {
    currentProject1--;
    if (currentProject1 < 0) {
        currentProject1 = project1Images.length - 1;
    }
    updateProject1();
}

// ===============================
// PROJECT 2 SLIDER (E-COMMERCE)
// ===============================

const projectImages = [
    "images/project2/1.png",
    "images/project2/2.png",
    "images/project2/3.png",
    "images/project2/4.png",
    "images/project2/5.png",
    "images/project2/6.png"
];

let currentSlide = 0;
const sliderImage = document.getElementById("sliderImage");

function updateSlide() {
    if (!sliderImage) return;

    sliderImage.style.opacity = "0";

    setTimeout(() => {
        sliderImage.src = projectImages[currentSlide];
        sliderImage.style.opacity = "1";
    }, 180);
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= projectImages.length) {
        currentSlide = 0;
    }
    updateSlide();
}

function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = projectImages.length - 1;
    }
    updateSlide();
}

// ===============================
// PROJECT 3 SLIDER
// ===============================

const project3Images = [
    "images/project3/1.png",
    "images/project3/2.png",
    "images/project3/3.png",
    "images/project3/4.png",
    "images/project3/5.png",
    "images/project3/6.png",
    "images/project3/7.png",
    "images/project3/8.png",
    "images/project3/9.png"
];

let currentProject3 = 0;
const project3Image = document.getElementById("project3Image");

// Preload images
project3Images.forEach(src => {
    const img = new Image();
    img.src = src;
});

function updateProject3() {
    if (!project3Image) return;

    project3Image.style.opacity = "0";

    setTimeout(() => {
        project3Image.src = project3Images[currentProject3];
        project3Image.style.opacity = "1";
    }, 180);
}

function nextProject3() {
    currentProject3++;

    if (currentProject3 >= project3Images.length) {
        currentProject3 = 0;
    }

    updateProject3();
}

function prevProject3() {
    currentProject3--;

    if (currentProject3 < 0) {
        currentProject3 = project3Images.length - 1;
    }

    updateProject3();
}

// ===============================
// IMAGE ZOOM MODAL
// ===============================

const zoomModal = document.getElementById("zoomModal");
const zoomedImage = document.getElementById("zoomedImage");

function addZoom(imageElement) {
    if (!imageElement) return;

    imageElement.addEventListener("click", () => {
        zoomedImage.src = imageElement.src;
        zoomModal.classList.add("show");
    });
}

addZoom(project1Image);
addZoom(sliderImage);
addZoom(project3Image);

if (zoomModal) {
    zoomModal.addEventListener("click", () => {
        zoomModal.classList.remove("show");
    });
}

// ===============================
// SECTION SUMMARY
// ===============================

const summaryTitle = document.getElementById("summaryTitle");
const summaryText = document.getElementById("summaryText");
const summaryPanel = document.getElementById("summaryPanel");

const sectionData = {

    about: {
        title: "Welcome",
        text: "Welcome to my portfolio. I'm Amal N V, a Java Full Stack Developer passionate about building secure, scalable, and database-driven web applications using modern Java technologies."
    },

    training: {
        title: "Professional Training",
        text: "This is where my passion for Java turned into practical experience through building real-world applications and solving real development challenges."
    },

    tech: {
        title: "Technologies & Tools",
        text: "The technologies and tools I use daily to design, develop, test, and deploy modern full-stack applications, from backend development to containerized deployment."
    },

    projects: {
        title: "Projects",
        text: "A collection of real-world applications demonstrating my experience in backend development, REST APIs, authentication, database management, Docker, and full-stack software engineering."
    },

    certificates: {
        title: "Certificates",
        text: "Professional certifications earned through continuous learning, hands-on projects, and technical training to strengthen my software development skills."
    },

    contact: {
        title: "Let's Connect",
        text: "Thank you for visiting my portfolio. If you're looking for a Java Full Stack Developer who enjoys solving real-world problems and continuously learning, I'd be happy to connect."
    }

};

function changeSummary(section){

    if(!sectionData[section]) return;

    summaryPanel.classList.add("fade");

    setTimeout(() => {

        summaryTitle.textContent = sectionData[section].title;
        summaryText.textContent = sectionData[section].text;

        summaryPanel.classList.remove("fade");

    },180);

}

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            changeSummary(entry.target.id);

        }

    });

},{
    threshold:0.45
});

[
    "about",
    "training",
    "tech",
    "projects",
    "certificates",
    "contact"
].forEach(id=>{

    const section = document.getElementById(id);

    if(section){
        observer.observe(section);
    }

});


// ===============================
// HIDE SUMMARY DURING PROJECTS
// ===============================

const projectsSection = document.getElementById("projects");

if(projectsSection){

    const projectObserver = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                summaryPanel.style.opacity = "0";
                summaryPanel.style.pointerEvents = "none";

            }else{

                summaryPanel.style.opacity = "1";
                summaryPanel.style.pointerEvents = "auto";

            }

        });

    },{

        threshold:0.15

    });

    projectObserver.observe(projectsSection);

}

console.log("Portfolio Loaded Successfully");

// ===============================
// LED SCROLL PROGRESS
// ===============================

const ledContainer = document.getElementById("ledContainer");
const progressPercent = document.getElementById("progressPercent");

const LED_COUNT = 50;

if (ledContainer && progressPercent) {

    // Create LEDs
    for (let i = 0; i < LED_COUNT; i++) {

        const led = document.createElement("div");
        led.className = "led";

        ledContainer.appendChild(led);

    }

    const leds = ledContainer.querySelectorAll(".led");

    function updateProgress() {

        const scrollTop = window.scrollY;

        const pageHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const percent = Math.max(
            0,
            Math.min(
                100,
                (scrollTop / pageHeight) * 100
            )
        );

        progressPercent.textContent =
            Math.round(percent) + "%";

        const active =
            Math.floor((percent / 100) * LED_COUNT);

        leds.forEach((led, index) => {

            if (index < active) {

                led.classList.add("active");

            } else {

                led.classList.remove("active");

            }

        });

    }

    let ticking = false;

    window.addEventListener("scroll", () => {

        if (!ticking) {

            requestAnimationFrame(() => {

                updateProgress();

                ticking = false;

            });

            ticking = true;

        }

    });

    // Initialize progress on page load
    updateProgress();

}
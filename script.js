let menuIcon = document.querySelector('#menu-icon');
let navbar  = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        };
    });
    
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

const typed = new Typed('.multiple-text', {
    strings: ['Siswa SMK Krian 1', 'Siswa Rekayasa Perangkat Lunak'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const projectData = {
    project1: { image: "portfolio1.png", title: "Proyek Ketahanan Pangan", description: "Proyek ketahanan pangan ini merupakan kegiatan menanam dan merawat tanaman kangkung sebagai salah satu upaya memanfaatkan lahan yang tersedia untuk menghasilkan bahan pangan secara mandiri." },
    project2: { image: "portfolio2.jpg", title: "Proyek Ketahanan Pangan", description: "Proyek ini merupakan kegiatan penanaman dan perawatan berbagai jenis tanaman. Kegiatan ini bertujuan untuk mempelajari cara merawat tanaman, menjaga lingkungan, serta meningkatkan kepedulian terhadap lingkungan yang hijau dan bersih ." },
    project3: { image: "portfolio3.jpg", title: "", description: "" },
    project4: { image: "portfolio4.jpg", title: "", description: "" },
    project5: { image: "portfolio5.jpg", title: "", description: "" },
    project6: { image: "portfolio6.jpg", title: "", description: "" }
};

function showProject(project) {
    const data = projectData[project];
    if (!data) return;

    document.getElementById("projectImage").src = data.image;
    document.getElementById("projectTitle").innerText = data.title;
    document.getElementById("projectDescription").innerText = data.description;
    document.getElementById("projectModal").style.display = "flex";
}

function closeProject() {
    document.getElementById("projectModal").style.display = "none";
}

window.addEventListener("click", function(event) {
    const modal = document.getElementById("projectModal");
    if (event.target === modal) closeProject();
});

function showService(service) {
    const modal = document.getElementById("serviceModal");
    const title = document.getElementById("serviceTitle");
    const description = document.getElementById("serviceDescription");

    if (service === "programming") {
        title.innerText = "Pemrograman Dasar";
        description.innerText = "Saya memiliki keterampilan pemrograman dasar dan sedang mempelajari cara membuat website serta aplikasi sederhana menggunakan HTML, CSS, JavaScript, dan teknologi pemrograman lainnya.";
    }
    else if (service === "ui") {
        title.innerText = "Desain UI Dasar";
        description.innerText = "Saya senang membuat desain antarmuka website yang sederhana, modern, dan menarik. Saya menggunakan HTML dan CSS untuk membuat tampilan website yang rapi, responsif, dan mudah digunakan.";
    }
    else if (service === "computer") {
        title.innerText = "Keterampilan Komputer";
        description.innerText = "Saya memiliki keterampilan dasar komputer, termasuk menggunakan Microsoft Office, mengelola file, menginstal perangkat lunak, dan mengatasi masalah komputer sederhana.";
    }

    modal.style.display = "flex";
}

function closeService() {
    document.getElementById("serviceModal").style.display = "none";
}

window.addEventListener("click", function(event) {
    const modal = document.getElementById("serviceModal");
    if (event.target === modal) {
        closeService();
    }
});

function showAbout() {
    const modal = document.getElementById("aboutModal");

    if(modal) {
        modal.style.display = "flex";
    }
}

function closeAbout() {
    const modal = document.getElementById("aboutModal");
    if (modal) {
        modal.style.display = "none";
    }
}

window.addEventListener ("click", function(event) {
    const modal = document.getElementById("aboutModal");

    if (event.target === modal) {
        closeAbout()
    }
});
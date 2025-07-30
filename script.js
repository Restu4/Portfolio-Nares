const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


const roles = [
    'Network Engineer',
    'Data Analyst',
    'Frontend Web Dev',
    'IT Support',
    'UI Design'
];

const dynamicRole = document.getElementById('dynamic-role');
let index = 0;

function animatePerLetter(text) {
    const letters = dynamicRole.querySelectorAll('.letter');

    // Tambahkan animasi keluar ke semua huruf lama
    letters.forEach((letter, i) => {
        letter.classList.remove('letter'); // remove in class
        letter.classList.add('letter-out');
        letter.style.animationDelay = `${i * 0.03}s`;
    });

    // Tunggu animasi keluar selesai dulu
    setTimeout(() => {
        dynamicRole.innerHTML = ''; // Bersihin huruf lama

        for (let i = 0; i < text.length; i++) {
            const span = document.createElement('span');
            span.className = 'letter';
            span.style.animationDelay = `${i * 0.05}s`;
            span.textContent = text[i] === ' ' ? '\u00A0' : text[i];
            dynamicRole.appendChild(span);
        }
    }, 500); // sesuai durasi slideOut
}

document.addEventListener('DOMContentLoaded', () => {
    animatePerLetter(roles[index]);

    setInterval(() => {
        index = (index + 1) % roles.length;
        animatePerLetter(roles[index]);
    }, 3000);
});

const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        tabContents.forEach(c => {
            c.classList.remove('tab-active');
        });

        const activeTab = document.getElementById(btn.dataset.tab);
        activeTab.classList.add('tab-active');
    });
});

document.querySelectorAll('.detail-btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.preventDefault(); // stop anchor behavior
        const targetId = this.dataset.target;
        const modal = document.getElementById(targetId);
        if (modal) {
            modal.style.display = 'flex';
        }
    });
});

function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = 'none';
    }
}

window.onclick = function (event) {
    document.querySelectorAll('.modal').forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
};

const sections = document.querySelectorAll('.fade-in-section');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => {
    observer.observe(section);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === "Escape") {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.style.display = 'none';
        });
    }
});

document.querySelectorAll('.detail-btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.dataset.target;
        const modal = document.getElementById(targetId);
        if (modal && modal.style.display !== 'flex') {
            modal.style.display = 'flex';
        }
    });
});

function animatePerLetter(text) {
    if (!text || typeof text !== 'string') return;

    const letters = dynamicRole.querySelectorAll('.letter');
    letters.forEach((letter, i) => {
        letter.classList.remove('letter');
        letter.classList.add('letter-out');
        letter.style.animationDelay = `${i * 0.03}s`;
    });

    setTimeout(() => {
        dynamicRole.innerHTML = '';

        for (let i = 0; i < text.length; i++) {
            const span = document.createElement('span');
            span.className = 'letter';
            span.style.animationDelay = `${i * 0.05}s`;
            span.textContent = text[i] === ' ' ? '\u00A0' : text[i];
            dynamicRole.appendChild(span);
        }
    }, 500);
}

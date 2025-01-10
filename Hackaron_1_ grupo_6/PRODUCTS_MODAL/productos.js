

document.querySelectorAll('.plan-card .cta-button').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        const plan = this.parentElement.querySelector('h3').textContent;
        const price = this.parentElement.querySelector('.plan-price').textContent;

// Mostrar el modal
        const modal = document.getElementById('modal');
        const modalMessage = document.getElementById('modal-message');
        modalMessage.textContent = `Has seleccionado el ${plan} por ${price}. ¡GRACIAS!`;
        modal.classList.add('active');

// Cerrar modal al hacer clic en el botón
        modal.querySelector('.close-modal').addEventListener('click', () => {
            modal.classList.remove('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
// Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // FAQ accordion functionality
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('i');
            
            // Toggle current answer
            answer.classList.toggle('active');
            
            // Toggle icon rotation
            if (answer.classList.contains('active')) {
                icon.style.transform = 'rotate(180deg)';
            } else {
                icon.style.transform = 'rotate(0deg)';
            }
        });
    });

    // Animate elements on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
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

    // Animate cards and sections
    const animateElements = document.querySelectorAll('.benefit-card, .testimonial-card, .plan-card');
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
        observer.observe(element);
    });

    // Sticky header functionality
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            header.style.transform = 'translateY(0)';
            return;
        }

        if (currentScroll > lastScroll && currentScroll > 80) {
            // Scrolling down & past header
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }

        lastScroll = currentScroll;
    });

    
    // Plan selection handling
    document.querySelectorAll('.plan-card .cta-button').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const plan = this.parentElement.querySelector('h3').textContent;
            const price = this.parentElement.querySelector('.plan-price').textContent;
            
            // Animate button click
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);

            // Show confirmation message
            const originalText = this.textContent;
            this.textContent = '¡Plan seleccionado!';
            this.style.backgroundColor = '#27ae60';
            
            // Reset button after animation
            setTimeout(() => {
                this.textContent = originalText;
                this.style.backgroundColor = '';
                
                // Aquí podrías agregar la lógica para redirigir al checkout o mostrar un modal
                alert(`Has seleccionado el ${plan} por ${price}. ¡Gracias`);
            }, 1500);
        });
    });


    // Mobile menu toggle (si se implementa posteriormente)
    const createMobileMenu = () => {
        if (window.innerWidth <= 768) {
            const mobileMenuButton = document.createElement('button');
            mobileMenuButton.classList.add('mobile-menu-button');
            mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
            
            const nav = document.querySelector('.nav-container');
            nav.insertBefore(mobileMenuButton, nav.firstChild);

            mobileMenuButton.addEventListener('click', () => {
                document.querySelector('.nav-links').classList.toggle('show');
            });
        }
    };

    // Call mobile menu creation on load
    createMobileMenu();

    // Add loading animation for images
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
    });
});


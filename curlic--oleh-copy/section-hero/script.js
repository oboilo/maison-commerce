// Hero Section JavaScript
document.addEventListener('DOMContentLoaded', function () {

    // Initialize all functionality
    initializeProductGallery();
    initializePackageSelection();
    initializeAddToCart();
    initializeVideoPlayers();
    initializeCarousels();
    initializeFAQ();
    initializeSmoothScrolling();

    console.log('Hero section initialized successfully');
});

/**
 * Product Gallery Functionality
 */
function initializeProductGallery() {
    const mainImage = document.querySelector('.maison_commerce__main-image img');
    const thumbnails = document.querySelectorAll('.maison_commerce__thumbnail-grid img');

    if (!mainImage || !thumbnails.length) return;

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', function () {
            // Remove active class from all thumbnails
            thumbnails.forEach(thumb => thumb.classList.remove('active'));

            // Add active class to clicked thumbnail
            this.classList.add('active');

            // Update main image with smooth transition
            mainImage.style.opacity = '0.7';

            setTimeout(() => {
                mainImage.src = this.src;
                mainImage.alt = this.alt;
                mainImage.style.opacity = '1';
            }, 150);
        });

        // Add hover effects (only on non-touch devices)
        if (!('ontouchstart' in window)) {
            thumbnail.addEventListener('mouseenter', function () {
                this.style.transform = 'scale(1.05)';
                this.style.transition = 'transform 0.2s ease';
            });

            thumbnail.addEventListener('mouseleave', function () {
                this.style.transform = 'scale(1)';
            });
        }

        // Add touch feedback for mobile devices
        thumbnail.addEventListener('touchstart', function () {
            this.style.transform = 'scale(0.95)';
        });

        thumbnail.addEventListener('touchend', function () {
            this.style.transform = 'scale(1)';
        });
    });

    // Set first thumbnail as active by default
    if (thumbnails[0]) {
        thumbnails[0].classList.add('active');
    }
}

/**
 * Package Selection Functionality
 */
function initializePackageSelection() {
    const packageOptions = document.querySelectorAll('.maison_commerce__package-option');

    if (!packageOptions.length) return;

    packageOptions.forEach(option => {
        option.addEventListener('click', function () {
            // Remove selected class from all options
            packageOptions.forEach(opt => opt.classList.remove('selected'));

            // Add selected class to clicked option
            this.classList.add('selected');

            // Update pricing in add to cart button if needed
            updateCartButtonPrice(this);

            // Add selection animation
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    });

    // Set default selection (1-month package)
    const defaultPackage = document.querySelector('.maison_commerce__package-option');
    if (defaultPackage) {
        defaultPackage.classList.add('selected');
    }
}

/**
 * Update cart button price based on selected package
 */
function updateCartButtonPrice(selectedPackage) {
    const cartButton = document.querySelector('.maison_commerce__add-to-cart-btn');
    const priceElement = cartButton?.querySelector('span:last-child');

    if (!priceElement) return;

    // Get package type from data attribute or class
    let newPrice = '35.90 USD'; // default

    if (selectedPackage.classList.contains('most-popular')) {
        newPrice = '50.90 USD';
    } else if (selectedPackage.querySelector('h4')?.textContent.includes('4 Months')) {
        newPrice = '65.90 USD';
    }

    // Animate price change
    priceElement.style.opacity = '0.5';
    setTimeout(() => {
        priceElement.textContent = newPrice;
        priceElement.style.opacity = '1';
    }, 150);
}

/**
 * Add to Cart Button Functionality
 */
function initializeAddToCart() {
    const addToCartBtn = document.querySelector('.maison_commerce__add-to-cart-btn');

    if (!addToCartBtn) return;

    addToCartBtn.addEventListener('click', function (e) {
        e.preventDefault();

        // Get selected package
        const selectedPackage = document.querySelector('.maison_commerce__package-option.selected');
        const packageName = selectedPackage?.querySelector('h4')?.textContent || '1 Month Package';

        // Add loading state
        const originalText = this.innerHTML;
        this.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="animate-spin">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" stroke-dasharray="31.416" stroke-dashoffset="31.416">
                    <animate attributeName="stroke-dasharray" dur="2s" values="0 31.416;15.708 15.708;0 31.416" repeatCount="indefinite"/>
                    <animate attributeName="stroke-dashoffset" dur="2s" values="0;-15.708;-31.416" repeatCount="indefinite"/>
                </circle>
            </svg>
            <span>Adding to Cart...</span>
        `;

        // Simulate API call
        setTimeout(() => {
            this.innerHTML = originalText;
            showAddToCartSuccess(packageName);
        }, 1500);

        // Add click animation
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 100);
    });
}

/**
 * Show success message after adding to cart
 */
function showAddToCartSuccess(packageName) {
    // Create success notification
    const notification = document.createElement('div');
    notification.className = 'maison_commerce__success-notification';
    notification.innerHTML = `
        <div class="maison_commerce__success-content">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="#12B76A"/>
                <path d="m9 12 2 2 4-4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Added "${packageName}" to cart!</span>
        </div>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: white;
        border: 1px solid #12B76A;
        border-radius: 12px;
        padding: 16px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;

    notification.querySelector('.maison_commerce__success-content').style.cssText = `
        display: flex;
        align-items: center;
        gap: 8px;
        font-weight: 600;
        color: #1D211E;
    `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

/**
 * Video Player Functionality
 */
function initializeVideoPlayers() {
    const videoContainers = document.querySelectorAll('.maison_commerce__story-video');

    videoContainers.forEach(container => {
        const playBtn = container.querySelector('.maison_commerce__play-btn');

        if (playBtn) {
            playBtn.addEventListener('click', function (e) {
                e.preventDefault();

                // Add click animation
                this.style.transform = 'scale(0.9)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 100);

                // Simulate video play (replace with actual video logic)
                showVideoModal(container);
            });
        }
    });
}

/**
 * Show video modal (placeholder)
 */
function showVideoModal(videoContainer) {
    // This is a placeholder - replace with actual video modal implementation
    const modal = document.createElement('div');
    modal.className = 'maison_commerce__video-modal';
    modal.innerHTML = `
        <div class="maison_commerce__video-modal-content">
            <button class="maison_commerce__video-close">&times;</button>
            <div class="maison_commerce__video-placeholder">
                <p>Video player would be implemented here</p>
                <p>Click X to close</p>
            </div>
        </div>
    `;

    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;

    modal.querySelector('.maison_commerce__video-modal-content').style.cssText = `
        position: relative;
        background: white;
        border-radius: 12px;
        padding: 20px;
        max-width: 80%;
        max-height: 80%;
    `;

    modal.querySelector('.maison_commerce__video-close').style.cssText = `
        position: absolute;
        top: 10px;
        right: 15px;
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
    `;

    modal.querySelector('.maison_commerce__video-placeholder').style.cssText = `
        padding: 40px;
        text-align: center;
        color: #666;
    `;

    document.body.appendChild(modal);

    setTimeout(() => {
        modal.style.opacity = '1';
    }, 100);

    // Close modal functionality
    const closeBtn = modal.querySelector('.maison_commerce__video-close');
    const closeModal = () => {
        modal.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(modal);
        }, 300);
    };

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', function (e) {
        if (e.target === modal) closeModal();
    });
}

/**
 * Carousel Functionality
 */
function initializeCarousels() {
    // Customer Stories Carousel
    initializeStoriesCarousel();

    // Upsell Products Carousel
    initializeUpsellCarousel();
}

/**
 * Customer Stories Carousel
 */
function initializeStoriesCarousel() {
    // Initialize Swiper for customer stories
    const storiesSwiper = new Swiper('.stories-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        loop: true,
        centeredSlides: false,
        freeMode: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        navigation: {
            nextEl: '.stories-next',
            prevEl: '.stories-prev',
        },
        speed: 600,
        grabCursor: true,
        breakpoints: {
            320: {
                slidesPerView: 1.2,
                spaceBetween: 12,
                centeredSlides: true,
                freeMode: false,
            },
            480: {
                slidesPerView: 1.5,
                spaceBetween: 16,
                centeredSlides: false,
                freeMode: true,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 16,
                freeMode: true,
            },
            768: {
                slidesPerView: 2.5,
                spaceBetween: 16,
                freeMode: true,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 16,
                freeMode: false,
            },
        },
        on: {
            slideChange: function () {
                console.log(`Showing customer story ${this.realIndex + 1}`);
            },
            autoplayTimeLeft(s, time, progress) {
                // Optional: Add progress indicator
                const progressBar = document.querySelector('.stories-progress');
                if (progressBar) {
                    progressBar.style.setProperty('--progress', 1 - progress);
                }
            }
        }
    });

    // Pause autoplay on hover
    const storiesContainer = document.querySelector('.stories-swiper');
    if (storiesContainer) {
        storiesContainer.addEventListener('mouseenter', () => {
            storiesSwiper.autoplay.stop();
        });

        storiesContainer.addEventListener('mouseleave', () => {
            storiesSwiper.autoplay.start();
        });
    }
}

/**
 * Upsell Products Carousel
 */
function initializeUpsellCarousel() {
    // Initialize Swiper for upsell products
    const upsellSwiper = new Swiper('.upsell-swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.upsell-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.upsell-next',
            prevEl: '.upsell-prev',
        },
        effect: 'slide',
        speed: 300,
        on: {
            slideChange: function () {
                // Add any custom logic when slide changes
                console.log(`Showing upsell product ${this.realIndex + 1}`);
            }
        }
    });

    // Add click handlers for upsell buttons
    const upsellButtons = document.querySelectorAll('.maison_commerce__upsell-btn');
    upsellButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();

            const productName = this.closest('.maison_commerce__upsell-product')
                .querySelector('.maison_commerce__upsell-info h4').textContent;

            // Add loading state
            const originalText = this.innerHTML;
            this.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="animate-spin">
                    <circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="2" stroke-dasharray="25.133" stroke-dashoffset="25.133">
                        <animate attributeName="stroke-dasharray" dur="1.5s" values="0 25.133;12.566 12.566;0 25.133" repeatCount="indefinite"/>
                        <animate attributeName="stroke-dashoffset" dur="1.5s" values="0;-12.566;-25.133" repeatCount="indefinite"/>
                    </circle>
                </svg>
                <span>Adding...</span>
            `;

            // Simulate API call
            setTimeout(() => {
                this.innerHTML = originalText;
                showUpsellSuccess(productName);
            }, 1200);

            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    });
}

/**
 * Show success message after adding upsell product
 */
function showUpsellSuccess(productName) {
    // Create success notification
    const notification = document.createElement('div');
    notification.className = 'maison_commerce__upsell-success-notification';
    notification.innerHTML = `
        <div class="maison_commerce__success-content">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="8" fill="#12B76A"/>
                <path d="m7 10 2 2 4-4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Added "${productName}" to cart!</span>
        </div>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: white;
        border: 1px solid #12B76A;
        border-radius: 8px;
        padding: 12px 16px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;

    notification.querySelector('.maison_commerce__success-content').style.cssText = `
        display: flex;
        align-items: center;
        gap: 8px;
        font-weight: 600;
        color: #1D211E;
        font-size: 14px;
    `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

/**
 * FAQ Accordion Functionality
 */
function initializeFAQ() {
    const faqItems = document.querySelectorAll('.maison_commerce__faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.maison_commerce__faq-question');
        const answer = item.querySelector('.maison_commerce__faq-answer');

        if (!question || !answer) return;

        // Set initial state
        answer.style.maxHeight = '0px';
        answer.style.opacity = '0';
        answer.classList.remove('open');

        question.addEventListener('click', function () {
            const isOpen = answer.classList.contains('open');

            // Close all other FAQ items first
            faqItems.forEach(otherItem => {
                const otherQuestion = otherItem.querySelector('.maison_commerce__faq-question');
                const otherAnswer = otherItem.querySelector('.maison_commerce__faq-answer');

                if (otherItem !== item && otherAnswer.classList.contains('open')) {
                    otherQuestion.classList.remove('active');
                    otherAnswer.classList.remove('open');
                    otherAnswer.style.maxHeight = '0px';
                    otherAnswer.style.opacity = '0';
                }
            });

            // Toggle current item
            if (isOpen) {
                // Close current item
                question.classList.remove('active');
                answer.classList.remove('open');
                answer.style.maxHeight = '0px';
                answer.style.opacity = '0';
            } else {
                // Open current item
                question.classList.add('active');
                answer.classList.add('open');

                // Calculate the actual height needed
                // Temporarily show the content to measure it
                answer.style.maxHeight = 'none';
                answer.style.opacity = '1';
                const scrollHeight = answer.scrollHeight;

                // Reset and animate
                answer.style.maxHeight = '0px';
                answer.style.opacity = '0';

                // Force reflow
                answer.offsetHeight;

                // Animate to the calculated height
                requestAnimationFrame(() => {
                    answer.style.maxHeight = scrollHeight + 'px';
                    answer.style.opacity = '1';
                });
            }

            // Add click animation to question
            question.style.transform = 'scale(0.98)';
            setTimeout(() => {
                question.style.transform = 'scale(1)';
            }, 100);
        });

        // Add hover effects
        question.addEventListener('mouseenter', function () {
            if (!this.classList.contains('active')) {
                this.style.backgroundColor = 'rgba(166, 55, 43, 0.02)';
            }
        });

        question.addEventListener('mouseleave', function () {
            this.style.backgroundColor = 'transparent';
        });
    });
}

/**
 * Smooth Scrolling for Internal Links
 */
function initializeSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Utility Functions
 */

// Debounce function for performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Add scroll-based animations
window.addEventListener('scroll', throttle(function () {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;

    // Parallax effect for hero section (optional)
    const heroSection = document.querySelector('.maison_commerce__hero-section');
    if (heroSection && scrolled < window.innerHeight) {
        heroSection.style.transform = `translateY(${rate}px)`;
    }
}, 16));

// Add intersection observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(`
        .maison_commerce__features,
        .maison_commerce__package-options,
        .maison_commerce__free-gifts,
        .maison_commerce__customer-stories,
        .maison_commerce__dermatologist-approval,
        .maison_commerce__faq-section,
        .maison_commerce__upsell-section
    `);

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}); 
function productPage() {
    return {
        selectedBundleIndex: 1,
        subscriptionType: "subscribe",
        dropdownOpen: false,
        selectedFrequency: "6 Months (Most Popular)",
        currentReviewPage: 0,
        currentImageIndex: 0,
        images: [
            "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=432&h=444&fit=crop",
            "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=432&h=444&fit=crop",
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=432&h=444&fit=crop",
            "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=432&h=444&fit=crop",
            "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=432&h=444&fit=crop"
        ],
        bundles: [
            {
                bottles: "1 Bottles",
                supply: "3 MONTH SUPPLY",
                price: "$19.95",
                originalPrice: "$39.95",
                savings: "$20",
                savingsText: "You Save $20",
                freeShipping: false,
                popular: false,
                bestValue: false,
                image: "../images/bundle_1bottle.png"
            },
            {
                bottles: "2 Bottles",
                supply: "6 MONTH SUPPLY",
                price: "$35.90",
                originalPrice: "$79.90",
                savings: "$44",
                savingsText: "You Save $44",
                freeShipping: true,
                popular: true,
                bestValue: false,
                image: "../images/bundle_2bottles.png"
            },
            {
                bottles: "3 Bottles",
                supply: "9 MONTH SUPPLY",
                price: "$53.85",
                originalPrice: "$119.85",
                savings: "$66",
                savingsText: "You Save 66 USD",
                freeShipping: true,
                popular: false,
                bestValue: true,
                image: "../images/bundle_3bottles.png"
            },
        ],
        reviews: [
            {
                id: 1,
                text: "After 3 weeks of Moringa, my energy has transformed! No more afternoon coffee and I wake up refreshed. Best health decision this year!",
                author: "Sarah M., 42",
            },
            {
                id: 2,
                text: "ACV capsules eliminated my bloating and reduced cravings without the vinegar taste. A true game-changer for my digestion!",
                author: "James T., 51",
            },
            {
                id: 3,
                text: "Skeptic turned believer! Less joint pain, better sleep, and glowing skin that friends notice. These supplements are now my daily essential!",
                author: "Linda K., 38",
            },
            {
                id: 4,
                text: "Amazing results after just 2 weeks! My energy levels are through the roof and I feel more focused throughout the day.",
                author: "Mike R., 35",
            },
            {
                id: 5,
                text: "I've tried many supplements but this one actually works. My digestion has improved and I feel healthier overall.",
                author: "Emma S., 29",
            },
            {
                id: 6,
                text: "Great quality product with noticeable benefits. My skin looks better and I have more sustained energy.",
                author: "David L., 44",
            },
        ],
        faqs: [
            {
                question: "What ingredients are in your supplements?",
                answer:
                    "Our Moringa supplements contain 100% pure Moringa Oleifera leaf powder, sourced from organic farms. Each capsule contains 500mg of premium Moringa with no fillers or artificial additives.",
                icon: '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>',
                open: false,
            },
            {
                question: "Where are your products manufactured?",
                answer:
                    "Our supplements are manufactured in FDA-registered facilities in the USA, following strict GMP (Good Manufacturing Practice) guidelines to ensure quality and safety.",
                icon: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>',
                open: false,
            },
            {
                question: "Do you offer a satisfaction guarantee?",
                answer:
                    "Yes! We offer a 100-day money-back guarantee. If you're not completely satisfied with your purchase, contact us within 100 days for a full refund.",
                icon: '<path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>',
                open: false,
            },
            {
                question: "How quickly will I receive my order?",
                answer:
                    "Orders typically ship within 1-2 business days and arrive within 3-5 business days for standard shipping. Free shipping is available on orders over $40.",
                icon: '<path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4z"/>',
                open: false,
            },
            {
                question: "Are your supplements third-party tested?",
                answer:
                    "Yes, all our products undergo rigorous third-party testing for purity, potency, and safety. We test for heavy metals, pesticides, and other contaminants.",
                icon: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>',
                open: false,
            },
            {
                question: "Can I take these supplements with medications?",
                answer:
                    "While our supplements are natural, we recommend consulting with your healthcare provider before starting any new supplement regimen, especially if you're taking medications.",
                icon: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>',
                open: false,
            },
        ],

        get selectedBundle() {
            return this.bundles[this.selectedBundleIndex];
        },

        get visibleReviews() {
            const start = this.currentReviewPage * 3;
            return this.reviews.slice(start, start + 3);
        },

        get totalPages() {
            return Math.ceil(this.reviews.length / 3);
        },

        selectBundle(index) {
            this.selectedBundleIndex = index;
        },

        changeMainImage(index) {
            this.currentImageIndex = index;
            const mainImage = document.querySelector('.maison_commerce_main_image');
            if (mainImage) {
                mainImage.style.background = `url("${this.images[index]}") center/cover`;
            }

            // Update thumbnail active states
            document.querySelectorAll('.maison_commerce_thumbnail').forEach((thumb, i) => {
                if (i === index) {
                    thumb.style.border = '2px solid #5eb116';
                } else {
                    thumb.style.border = 'none';
                }
            });
        },

        nextImage() {
            const nextIndex = (this.currentImageIndex + 1) % this.images.length;
            this.changeMainImage(nextIndex);
        },

        prevImage() {
            const prevIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
            this.changeMainImage(prevIndex);
        },

        toggleDropdown() {
            this.dropdownOpen = !this.dropdownOpen;
            // Close dropdown when clicking outside
            if (this.dropdownOpen) {
                setTimeout(() => {
                    const closeDropdown = (e) => {
                        if (
                            !e.target.closest(".maison_commerce_dropdown") &&
                            !e.target.closest(".maison_commerce_dropdown_menu")
                        ) {
                            this.dropdownOpen = false;
                            document.removeEventListener("click", closeDropdown);
                        }
                    };
                    document.addEventListener("click", closeDropdown);
                }, 100);
            }
        },

        addToCart() {
            // Add to cart logic
            console.log("Adding to cart:", this.selectedBundle);
            alert("Product added to cart!");
        },

        playVideo(videoId) {
            // Video play logic
            console.log("Playing video:", videoId);
        },

        previousReviews() {
            if (this.currentReviewPage > 0) {
                this.currentReviewPage--;
            }
        },

        nextReviews() {
            if (this.currentReviewPage < this.totalPages - 1) {
                this.currentReviewPage++;
            }
        },

        goToReviewPage(page) {
            this.currentReviewPage = page;
        },

        toggleFaq(index) {
            this.faqs[index].open = !this.faqs[index].open;
        },

        selectFrequency(frequency) {
            this.selectedFrequency = frequency;
            this.dropdownOpen = false;
        },
    };
}

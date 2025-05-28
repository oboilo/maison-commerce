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
                icon: '<path d="M19.2426 7.6567C23.2529 11.7289 22.6941 16.3686 19.2426 19.8734C16.1692 22.9942 10.8018 22.7756 6.40949 19.0589C1.18119 14.6348 0.795044 6.43503 4.00329 1.95557C6.40949 5.21336 15.2322 3.58445 19.2426 7.6567Z" fill="#A5D37D"/><path d="M19.2426 7.6567C23.2529 11.7289 22.6941 16.3686 19.2426 19.8734C16.1692 22.9942 10.8018 22.7756 6.40949 19.0589C1.18119 14.6348 0.795044 6.43503 4.00329 1.95557C6.40949 5.21336 15.2322 3.58445 19.2426 7.6567Z" stroke="#192F06" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.4199 10.4819C15.3303 12.9933 19.4224 16.3417 19.4224 19.6902" stroke="#192F06" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
                open: false,
            },
            {
                question: "Where are your products manufactured?",
                answer:
                    "Our supplements are manufactured in FDA-registered facilities in the USA, following strict GMP (Good Manufacturing Practice) guidelines to ensure quality and safety.",
                icon: '<path d="M2.35718 2.93521C5.57575 4.93845 6.86317 0.931989 10.0817 2.93521" stroke="#192F06" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.35718 6.39469C5.57575 8.39792 6.86317 4.39146 10.0817 6.39469" stroke="#192F06" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9.06856 21.642C8.06432 21.642 7.16966 21.611 6.35929 21.5454C4.99674 21.4352 3.96963 20.3219 3.86769 18.9587C3.80587 18.132 3.77002 17.2881 3.77002 16.4235C3.77002 15.2485 3.83627 14.2944 3.94388 13.2955C4.0343 12.4562 4.46477 11.6843 5.17804 11.2328C6.93712 10.1194 9.47488 8.98656 11.7651 8.70529C13.1219 8.53866 14.1377 9.67064 14.2084 11.0358C14.273 12.2831 14.3211 13.7286 14.3466 14.8919C16.0806 14.9039 17.6008 14.9426 18.9667 15.0114C20.2662 15.0769 21.4276 15.9574 21.5814 17.2493C21.6212 17.5831 21.6429 17.9216 21.6429 18.2649C21.6429 18.6083 21.6212 18.9467 21.5814 19.2806C21.4276 20.5724 20.2662 21.453 18.9667 21.5186C17.2874 21.6031 15.3751 21.6422 13.1189 21.6422C12.1628 21.6422 11.2683 21.6352 10.4272 21.6206C9.99723 21.6349 9.54524 21.642 9.06856 21.642Z" fill="#A5D37D"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5071 9.33552C13.9174 9.76641 14.1742 10.3739 14.2086 11.0363C14.2732 12.2836 14.3213 13.7292 14.3467 14.8924C16.0807 14.9044 17.601 14.9431 18.9669 15.012C19.1966 15.0235 19.4217 15.0605 19.6379 15.1208C19.6649 12.3401 19.2967 9.26276 18.9876 6.67848C18.8946 5.90112 18.807 5.16836 18.7369 4.50173C18.6755 3.91617 18.315 3.39102 17.7641 3.1832C16.6957 2.78008 16.1044 2.78008 15.0359 3.1832C14.485 3.39102 14.1246 3.91617 14.0631 4.50173C13.9931 5.16837 13.9055 5.90112 13.8125 6.67849C13.7117 7.52089 13.6047 8.41569 13.5071 9.33552Z" fill="#EEF7E6"/><path d="M13.5071 9.33552C13.9174 9.76641 14.1742 10.3739 14.2086 11.0363C14.2732 12.2836 14.3213 13.7292 14.3467 14.8924C16.0807 14.9044 17.601 14.9431 18.9669 15.012C19.1966 15.0235 19.4217 15.0605 19.6379 15.1208C19.6649 12.3401 19.2967 9.26276 18.9876 6.67848C18.8946 5.90112 18.807 5.16836 18.7369 4.50173C18.6755 3.91617 18.315 3.39102 17.7641 3.1832C16.6957 2.78008 16.1044 2.78008 15.0359 3.1832C14.485 3.39102 14.1246 3.91617 14.0631 4.50173C13.9931 5.16837 13.9055 5.90112 13.8125 6.67849C13.7117 7.52089 13.6047 8.41569 13.5071 9.33552Z" stroke="#192F06" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.49316 18.8036V21.5197H10.9334V18.8036C10.9334 17.8536 10.1633 17.0835 9.21329 17.0835C8.26329 17.0835 7.49316 17.8536 7.49316 18.8036Z" fill="#EEF7E6"/><path d="M7.49316 21.5923V18.8036C7.49316 17.8536 8.26329 17.0835 9.21329 17.0835C10.1633 17.0835 10.9334 17.8536 10.9334 18.8036V21.5923" stroke="#192F06" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.06856 21.6424C8.06432 21.6424 7.16966 21.6115 6.35929 21.546C4.99674 21.4356 3.96963 20.3225 3.86769 18.9593C3.80587 18.1326 3.77002 17.2886 3.77002 16.424C3.77002 15.249 3.83627 14.2949 3.94388 13.296C4.0343 12.4567 4.46477 11.6848 5.17804 11.2333C6.93712 10.1198 9.47488 8.98703 11.7651 8.70578C13.1219 8.53915 14.1377 9.67113 14.2084 11.0363C14.273 12.2836 14.3211 13.7291 14.3466 14.8923C16.0806 14.9044 17.6008 14.9431 18.9667 15.0119C20.2662 15.0774 21.4276 15.9579 21.5814 17.2499C21.6212 17.5837 21.6429 17.922 21.6429 18.2655C21.6429 18.6088 21.6212 18.9472 21.5814 19.281C21.4276 20.573 20.2662 21.4534 18.9667 21.519C17.2874 21.6037 15.3751 21.6427 13.1189 21.6427C12.1628 21.6427 11.2683 21.6356 10.4272 21.6212C9.99723 21.6355 9.54524 21.6424 9.06856 21.6424Z" stroke="#192F06" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
                open: false,
            },
            {
                question: "Do you offer a satisfaction guarantee?",
                answer:
                    "Yes! We offer a 100-day money-back guarantee. If you're not completely satisfied with your purchase, contact us within 100 days for a full refund.",
                icon: '<path d="M13.5242 8.62096C13.8198 5.83574 12.878 4.14075 10.9082 3.91268C8.93846 3.68459 7.66423 5.12298 7.36873 7.90821C7.07321 10.6934 8.01498 12.3884 9.98474 12.6165C11.9545 12.8446 13.2287 11.4062 13.5242 8.62096Z" stroke="#192F06" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M22.3929 7.69176C22.6883 4.90653 21.7467 3.21156 19.7768 2.98347C17.8071 2.7554 16.5329 4.1938 16.2374 6.97902C15.9419 9.76425 16.8836 11.4592 18.8534 11.6873C20.8232 11.9154 22.0974 10.477 22.3929 7.69176Z" stroke="#192F06" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.25626 16.8187C3.67588 11.5303 5.41042 4.23592 4.81767 3.93655C4.34083 3.69572 2.90305 5.11319 1.56055 6.57489" stroke="#192F06" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.21753 16.9808C11.1138 15.9213 16.0184 15.1857 21.002 14.7656" stroke="#192F06" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M1.55347 21.04C8.46312 19.545 15.3846 18.5069 22.4176 17.9141" stroke="#192F06" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
                open: false,
            },
            {
                question: "How quickly will I receive my order?",
                answer:
                    "Orders typically ship within 1-2 business days and arrive within 3-5 business days for standard shipping. Free shipping is available on orders over $40.",
                icon: '<path d="M22.4465 17.1995V12.2666H19.634L18.1288 8.0083H13.4653C13.6399 11.3984 13.5152 15.7677 13.6149 18.8184L18.1833 18.8066H20.851C21.7322 18.8066 22.4465 18.0871 22.4465 17.1995Z" fill="#EEF7E6" stroke="#192F06" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.3492 4.52622C12.9281 5.15631 13.2933 5.98076 13.3853 6.86512C13.4278 7.2954 13.4679 8.27073 13.5031 8.7081L13.6151 18.8187L11.5953 18.7943H7.70763C6.11264 18.7808 5.61534 18.7907 4.1481 18.3362C3.65699 18.14 3.20754 17.8293 2.83315 17.4219C2.25426 16.7918 1.88907 15.9673 1.79711 15.083C1.66511 13.7454 1.55396 12.3726 1.55396 10.9734C1.55396 9.57424 1.66511 8.20145 1.79711 6.86512C1.88907 5.98076 2.25427 5.15631 2.83315 4.52622C4.10866 3.13787 5.90077 3.14973 7.6451 3.16129L7.68486 3.16156C9.39877 3.17283 11.0978 3.16405 12.3492 4.52622Z" fill="#A5D37D" stroke="#192F06" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.14004 20.8411C7.43435 20.8411 8.1624 20.1131 8.1624 18.8187C8.1624 17.5245 7.43435 16.7964 6.14004 16.7964C4.84573 16.7964 4.11768 17.5245 4.11768 18.8187C4.11768 20.1131 4.84573 20.8411 6.14004 20.8411Z" fill="#EEF7E6"/><path d="M6.14004 20.8411C7.43435 20.8411 8.1624 20.1131 8.1624 18.8187C8.1624 17.5245 7.43435 16.7964 6.14004 16.7964C4.84573 16.7964 4.11768 17.5245 4.11768 18.8187C4.11768 20.1131 4.84573 20.8411 6.14004 20.8411Z" stroke="#192F06" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.739 20.8411C19.0332 20.8411 19.7613 20.1131 19.7613 18.8187C19.7613 17.5245 19.0332 16.7964 17.739 16.7964C16.4446 16.7964 15.7166 17.5245 15.7166 18.8187C15.7166 20.1131 16.4446 20.8411 17.739 20.8411Z" fill="#EEF7E6"/><path d="M17.739 20.8411C19.0332 20.8411 19.7613 20.1131 19.7613 18.8187C19.7613 17.5245 19.0332 16.7964 17.739 16.7964C16.4446 16.7964 15.7166 17.5245 15.7166 18.8187C15.7166 20.1131 16.4446 20.8411 17.739 20.8411Z" stroke="#192F06" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
                open: false,
            },
            {
                question: "Are your supplements third-party tested?",
                answer:
                    "Yes, all our products undergo rigorous third-party testing for purity, potency, and safety. We test for heavy metals, pesticides, and other contaminants.",
                icon: '<path d="M11.3973 20.8395C17.4401 20.8395 20.8393 17.4404 20.8393 11.3975C20.8393 5.35467 17.4401 1.95557 11.3973 1.95557C5.35443 1.95557 1.95532 5.35467 1.95532 11.3975C1.95532 17.4404 5.35443 20.8395 11.3973 20.8395Z" fill="#A5D37D"/><path d="M22.045 22.0451L18.4519 18.4521" stroke="#192F06" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.3973 20.8395C17.4401 20.8395 20.8393 17.4404 20.8393 11.3975C20.8393 5.35467 17.4401 1.95557 11.3973 1.95557C5.35443 1.95557 1.95532 5.35467 1.95532 11.3975C1.95532 17.4404 5.35443 20.8395 11.3973 20.8395Z" stroke="#192F06" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
                open: false,
            },
            {
                question: "Can I take these supplements with medications?",
                answer:
                    "While our supplements are natural, we recommend consulting with your healthcare provider before starting any new supplement regimen, especially if you're taking medications.",
                icon: '<path d="M3.95199 2.82803C4.06233 2.1337 4.68578 1.6602 5.3886 1.64242C9.90875 1.52805 14.0916 1.52805 18.6117 1.64242C19.3145 1.6602 19.938 2.1337 20.0483 2.82803C20.1942 3.74638 20.1942 4.63809 20.0483 5.55644C19.938 6.25076 19.3145 6.72428 18.6117 6.74205C14.0916 6.85641 9.90875 6.85641 5.3886 6.74205C4.68578 6.72428 4.06233 6.25076 3.95199 5.55644C3.80604 4.63809 3.80604 3.74638 3.95199 2.82803Z" fill="#EEF7E6"/><path d="M3.95199 2.82803C4.06233 2.1337 4.68578 1.6602 5.3886 1.64242C9.90875 1.52805 14.0916 1.52805 18.6117 1.64242C19.3145 1.6602 19.938 2.1337 20.0483 2.82803C20.1942 3.74638 20.1942 4.63809 20.0483 5.55644C19.938 6.25076 19.3145 6.72428 18.6117 6.74205C14.0916 6.85641 9.90875 6.85641 5.3886 6.74205C4.68578 6.72428 4.06233 6.25076 3.95199 5.55644C3.80604 4.63809 3.80604 3.74638 3.95199 2.82803Z" stroke="#192F06" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.94287 14.4745C3.94287 12.8961 3.98517 11.3176 4.06979 9.75695C4.15984 8.09602 5.55479 6.82715 7.21816 6.82715H16.7814C18.4447 6.82715 19.8397 8.09602 19.9297 9.75695C20.0144 11.3176 20.0567 12.8961 20.0567 14.4745C20.0567 16.1318 20.0103 17.7892 19.917 19.4259C19.8282 20.986 18.5826 22.2219 17.0222 22.3061C13.6676 22.4871 10.332 22.4871 6.97737 22.3061C5.41696 22.2219 4.17136 20.986 4.08253 19.4259C3.98937 17.7892 3.94287 16.1318 3.94287 14.4745Z" fill="#A5D37D"/><path d="M3.94287 14.4745C3.94287 12.8961 3.98517 11.3176 4.06979 9.75695C4.15984 8.09602 5.55479 6.82715 7.21816 6.82715H16.7814C18.4447 6.82715 19.8397 8.09602 19.9297 9.75695C20.0144 11.3176 20.0567 12.8961 20.0567 14.4745C20.0567 16.1318 20.0103 17.7892 19.917 19.4259C19.8282 20.986 18.5826 22.2219 17.0222 22.3061C13.6676 22.4871 10.332 22.4871 6.97737 22.3061C5.41696 22.2219 4.17136 20.986 4.08253 19.4259C3.98937 17.7892 3.94287 16.1318 3.94287 14.4745Z" stroke="#192F06" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.85815 1.60693V6.80245" stroke="#192F06" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 1.60693V6.80245" stroke="#192F06" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.2551 1.60693V6.80245" stroke="#192F06" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.124 18.9482C10.5505 18.8881 10.1378 18.3913 10.1197 17.8151C10.1059 17.3733 10.0949 16.936 10.0866 16.5014C9.64711 16.4931 9.20498 16.482 8.75839 16.468C8.18212 16.45 7.68541 16.0372 7.62535 15.4638C7.56271 14.8656 7.56271 14.2846 7.62535 13.6864C7.68541 13.113 8.18212 12.7002 8.75839 12.6822C9.20497 12.6682 9.64709 12.6571 10.0866 12.6488C10.0948 12.2138 10.1059 11.7762 10.1197 11.3343C10.1378 10.758 10.5505 10.2613 11.124 10.2013C11.7222 10.1386 12.3031 10.1386 12.9013 10.2013C13.4747 10.2613 13.8875 10.758 13.9055 11.3343C13.9194 11.7764 13.9304 12.2141 13.9387 12.6493C14.3699 12.6575 14.8038 12.6685 15.2419 12.6822C15.8182 12.7002 16.3149 13.113 16.3749 13.6864C16.4376 14.2846 16.4376 14.8656 16.3749 15.4638C16.3149 16.0372 15.8182 16.45 15.2419 16.468C14.8038 16.4817 14.3699 16.4927 13.9387 16.5009C13.9304 16.9359 13.9194 17.3733 13.9055 17.8151C13.8875 18.3913 13.4747 18.8881 12.9013 18.9482C12.3031 19.0107 11.7222 19.0107 11.124 18.9482Z" fill="#EEF7E6"/><path d="M11.124 18.9482C10.5505 18.8881 10.1378 18.3913 10.1197 17.8151C10.1059 17.3733 10.0949 16.936 10.0866 16.5014C9.64711 16.4931 9.20498 16.482 8.75839 16.468C8.18212 16.45 7.68541 16.0372 7.62535 15.4638C7.56271 14.8656 7.56271 14.2846 7.62535 13.6864C7.68541 13.113 8.18212 12.7002 8.75839 12.6822C9.20497 12.6682 9.64709 12.6571 10.0866 12.6488C10.0948 12.2138 10.1059 11.7762 10.1197 11.3343C10.1378 10.758 10.5505 10.2613 11.124 10.2013C11.7222 10.1386 12.3031 10.1386 12.9013 10.2013C13.4747 10.2613 13.8875 10.758 13.9055 11.3343C13.9194 11.7764 13.9304 12.2141 13.9387 12.6493C14.3699 12.6575 14.8038 12.6685 15.2419 12.6822C15.8182 12.7002 16.3149 13.113 16.3749 13.6864C16.4376 14.2846 16.4376 14.8656 16.3749 15.4638C16.3149 16.0372 15.8182 16.45 15.2419 16.468C14.8038 16.4817 14.3699 16.4927 13.9387 16.5009C13.9304 16.9359 13.9194 17.3733 13.9055 17.8151C13.8875 18.3913 13.4747 18.8881 12.9013 18.9482C12.3031 19.0107 11.7222 19.0107 11.124 18.9482Z" stroke="#192F06" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
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

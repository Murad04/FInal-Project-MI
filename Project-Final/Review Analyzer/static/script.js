// Mock Product Data
const products = [
    {
        id: 1,
        name: "Sony WH-1000XM5",
        price: "$348.00",
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=800",
        description: "Industry-leading noise canceling headphones with Auto NC Optimizer, crystal clear hands-free calling, and up to 30-hour battery life.",
        reviews: [
            "The noise cancellation is absolutely mind-blowing. I can't hear anything!",
            "Battery life is amazing, lasted me a whole week of commuting.",
            "Sound quality is pristine, very balanced bass and treble.",
            "A bit pricey, but worth every penny for the features.",
            "The touch controls are a bit finicky sometimes.",
            "Comfortable to wear for long periods, very lightweight.",
            "The build quality feels premium and durable.",
            "Not as comfortable as I expected for long flights.",
            "The app is a bit clunky and hard to navigate.",
            "Amazing for blocking out office noise.",
            "The bass is too overpowering for my taste.",
            "The ear cups get warm after extended use.",
            "Perfect for gaming and music alike.",
            "The charging cable is too short.",
            "The ANC doesn't work well in windy conditions.",
            "The design is sleek and modern.",
            "The headphones are too bulky to carry around.",
            "The soundstage is incredible for classical music.",
            "The price is too high for the average user.",
            "The voice assistant integration is seamless."
        ]
    },
    {
        id: 2,
        name: "MacBook Air M2",
        price: "$1,199.00",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxjJAzHTFKKdc_EbPgQcMcIKqfosq-sq1xrQ&s",
        description: "Supercharged by M2. Strikingly thin design. 13.6-inch Liquid Retina display. 18 hours of battery life.",
        reviews: [
            "This laptop is incredibly fast, handles video editing with ease.",
            "The screen is gorgeous, colors are so vibrant.",
            "Battery life is insane, I forget to charge it.",
            "The midnight color is a fingerprint magnet, but looks great.",
            "Keyboard feels great to type on.",
            "Best laptop I've ever owned, hands down.",
            "The fan noise is almost non-existent.",
            "The webcam quality is still subpar.",
            "The price is steep for students.",
            "Lightweight and easy to carry around.",
            "The ports are very limited, need a dongle for everything.",
            "The trackpad is the best in the industry.",
            "The speakers are surprisingly loud and clear.",
            "The hinge feels a bit flimsy.",
            "The M2 chip is a game-changer for performance.",
            "The lack of a touchscreen is disappointing.",
            "The battery drains quickly when running intensive apps.",
            "The design is timeless and elegant.",
            "The storage options are too expensive.",
            "The setup process was quick and easy."
        ]
    },
    {
        id: 3,
        name: "Canon EOS R6",
        price: "$2,299.00",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800",
        description: "High-speed continuous shooting, 4K video, and advanced subject tracking for photographers and filmmakers.",
        reviews: [
            "Autofocus is lightning fast, never misses a shot.",
            "Low light performance is stellar.",
            "Video quality is cinematic and smooth.",
            "Menu system is intuitive and easy to navigate.",
            "Battery life could be better when shooting 4K.",
            "A bit heavy, but feels very durable.",
            "The lens options are fantastic for professionals.",
            "The camera overheats during long video shoots.",
            "The price is too high for beginners.",
            "The image stabilization is top-notch.",
            "The touchscreen is responsive and easy to use.",
            "The shutter sound is very satisfying.",
            "The body feels solid and well-built.",
            "The learning curve is steep for new users.",
            "The dynamic range is impressive.",
            "The Wi-Fi connectivity is unreliable.",
            "The color reproduction is very accurate.",
            "The firmware updates are frequent and helpful.",
            "The grip is comfortable for extended use.",
            "The included strap is not very comfortable."
        ]
    },
    {
        id: 4,
        name: "Herman Miller Aeron",
        price: "$1,695.00",
        image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=80&w=800",
        description: "The benchmark for ergonomic seating. Designed to support your body and keep you cool and comfortable.",
        reviews: [
            "My back pain disappeared after a week of using this chair.",
            "Mesh material keeps me cool all day.",
            "Adjustability is fantastic, fits me perfectly.",
            "Very expensive, but it's an investment in health.",
            "Armrests are a bit wobbly on my unit.",
            "Built like a tank, will last forever.",
            "The lumbar support is a game-changer.",
            "The chair is too heavy to move around easily.",
            "The price is outrageous for a chair.",
            "The assembly process was straightforward.",
            "The seat cushion is too firm for my liking.",
            "The design is modern and fits any office.",
            "The wheels don't roll smoothly on carpet.",
            "The chair squeaks after a few months of use.",
            "The headrest is not adjustable.",
            "The build quality justifies the price.",
            "The armrests are not padded enough.",
            "The chair encourages good posture.",
            "The warranty coverage is excellent.",
            "The size options are confusing to choose from."
        ]
    },
    {
        id: 5,
        name: "Dyson V15 Detect",
        price: "$749.99",
        image: "https://images.unsplash.com/photo-1558317374-a35186516d22?auto=format&fit=crop&q=80&w=800",
        description: "Powerful cordless vacuum with laser illumination. Intelligently optimizes suction and run time.",
        reviews: [
            "The laser reveals so much dust I didn't know was there.",
            "Suction power is incredible for a cordless.",
            "Battery lasts enough for my whole apartment.",
            "Bin is easy to empty without touching dirt.",
            "A bit heavy to hold for ceiling cleaning.",
            "Attachments are very useful for different surfaces.",
            "The vacuum is very quiet compared to others.",
            "The battery life is disappointing for larger homes.",
            "The price is too high for what it offers.",
            "The design is sleek and futuristic.",
            "The filter is easy to clean and replace.",
            "The vacuum struggles with pet hair on carpets.",
            "The LED screen is very informative.",
            "The charging dock is bulky and takes up space.",
            "The suction power decreases as the battery drains.",
            "The vacuum is lightweight and easy to maneuver.",
            "The dust bin is too small and fills up quickly.",
            "The build quality feels premium.",
            "The customer service is very responsive.",
            "The vacuum is not suitable for deep cleaning."
        ]
    },
    {
        id: 6,
        name: "Samsung Odyssey G9",
        price: "$1,399.00",
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=800",
        description: "49-inch curved gaming monitor. 240Hz refresh rate. 1ms response time. Immersive gaming experience.",
        reviews: [
            "Gaming on this is a whole new experience, so immersive.",
            "Colors are deep and blacks are true.",
            "Takes up a lot of desk space, make sure you have room.",
            "Productivity is great with multiple windows open.",
            "Had some flickering issues initially but firmware fixed it.",
            "Expensive but unmatched in the market.",
            "The curve is perfect for gaming but awkward for work.",
            "The monitor stand is very sturdy.",
            "The resolution is not ideal for text clarity.",
            "The refresh rate is buttery smooth.",
            "The monitor gets very hot after long use.",
            "The HDR performance is underwhelming.",
            "The build quality is excellent.",
            "The monitor is too large for small desks.",
            "The setup process was a bit complicated.",
            "The bezels are very thin and modern.",
            "The ports are hard to access once set up.",
            "The monitor is great for multitasking.",
            "The price is too high for casual users.",
            "The included cables are too short."
        ]
    },
    {
        id: 7,
        name: "Test Product (Mixed Reviews)",
        price: "$99.00",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800",
        description: "A product specifically designed to test mixed sentiment analysis results.",
        reviews: [
            "Absolutely love this! Best purchase ever.",
            "This is garbage. Do not buy.",
            "Waste of money. It broke immediately.",
            "Horrible customer service and bad quality.",
            "It is what it is. Average.",
            "Not bad, but not great either.",
            "Exceeded my expectations for the price.",
            "The product arrived damaged.",
            "The instructions were clear and easy to follow.",
            "The quality is inconsistent.",
            "The packaging was very secure.",
            "The product stopped working after a month.",
            "The design is very appealing.",
            "The performance is mediocre at best.",
            "The customer support was very helpful.",
            "The product feels cheap and flimsy.",
            "The delivery was delayed by a week.",
            "The product works as advertised.",
            "The warranty process was a hassle.",
            "The product is a great value for the price."
        ]
    }
];

// DOM Elements
const productGrid = document.getElementById('product-grid');
const modal = document.getElementById('product-modal');
const modalBackdrop = document.getElementById('modal-backdrop');
const modalPanel = document.getElementById('modal-panel');
const closeModalBtn = document.getElementById('close-modal');

// Modal Elements
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalPrice = document.getElementById('modal-price');
const modalDescription = document.getElementById('modal-description');
const aiContent = document.getElementById('ai-content');
const aiDecisionBadge = document.getElementById('ai-decision-badge');
const aiLoading = document.getElementById('ai-loading');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    lucide.createIcons();
});

// Render Products
function renderProducts() {
    productGrid.innerHTML = products.map((product, index) => `
        <div class="product-card bg-white rounded-2xl overflow-hidden border border-slate-100 cursor-pointer group" 
             onclick="openProduct(${product.id})"
             style="animation-delay: ${index * 100}ms">
            <div class="h-64 overflow-hidden relative">
                <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                <div class="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
            </div>
            <div class="p-6">
                <div class="flex justify-between items-start mb-2">
                    <h3 class="text-xl font-bold text-slate-900">${product.name}</h3>
                    <span class="text-indigo-600 font-semibold">${product.price}</span>
                </div>
                <p class="text-slate-500 text-sm line-clamp-2">${product.description}</p>
                <div class="mt-4 flex items-center text-sm text-slate-400">
                    <i data-lucide="star" class="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1"></i>
                    <span>4.8 (120 reviews)</span>
                </div>
            </div>
        </div>
    `).join('');

    // Re-initialize icons for new elements
    lucide.createIcons();
}

// Close Modal
function closeModal() {
    modalBackdrop.classList.remove('open');
    modalPanel.classList.remove('open');

    setTimeout(() => {
        modal.classList.add('hidden');
        document.body.classList.remove('modal-open');
    }, 300); // Match transition duration
}

closeModalBtn.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);

// Add Review Logic
const reviewInput = document.getElementById('review-input');
const submitReviewBtn = document.getElementById('submit-review-btn');
const reviewStatus = document.getElementById('review-status');
let currentProductId = null;

submitReviewBtn.addEventListener('click', async () => {
    const text = reviewInput.value.trim();
    if (!text) return;

    // Find product
    const product = products.find(p => p.id === currentProductId);
    if (!product) return;

    // Add review
    product.reviews.push(text);

    // Disable input (One time only)
    reviewInput.disabled = true;
    submitReviewBtn.disabled = true;
    submitReviewBtn.classList.add('opacity-50', 'cursor-not-allowed');

    // Show status
    reviewStatus.textContent = "Review submitted! Re-analyzing...";
    reviewStatus.classList.remove('hidden', 'text-green-600');
    reviewStatus.classList.add('text-indigo-600');

    // Re-analyze
    aiDecisionBadge.textContent = 'Updating...';
    aiLoading.classList.remove('hidden');

    await analyzeReviews(product.reviews);

    // Update status to success
    reviewStatus.textContent = "Analysis updated with your review.";
    reviewStatus.classList.remove('text-indigo-600');
    reviewStatus.classList.add('text-green-600');
});

// Open Modal
async function openProduct(id) {
    currentProductId = id;
    const product = products.find(p => p.id === id);
    if (!product) return;

    // Populate Data
    modalImage.src = product.image;
    modalTitle.textContent = product.name;
    modalPrice.textContent = product.price;
    modalDescription.textContent = product.description;

    // Reset Review Section
    reviewInput.value = '';
    reviewInput.disabled = false;
    submitReviewBtn.disabled = false;
    submitReviewBtn.classList.remove('opacity-50', 'cursor-not-allowed');
    reviewStatus.classList.add('hidden');

    // Reset AI Section
    aiContent.innerHTML = '';
    aiDecisionBadge.className = 'px-3 py-1 rounded-full text-sm font-medium bg-slate-200 text-slate-600';
    aiDecisionBadge.textContent = 'Analyzing...';
    aiLoading.classList.remove('hidden');

    // Show Modal
    modal.classList.remove('hidden');
    document.body.classList.add('modal-open');

    // Animation Frame for transition
    requestAnimationFrame(() => {
        modalBackdrop.classList.add('open');
        modalPanel.classList.add('open');
    });

    // Fetch Analysis
    await analyzeReviews(product.reviews);
}

// Analyze Reviews
async function analyzeReviews(reviews) {
    try {
        const response = await fetch('/analyze', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ reviews })
        });

        const data = await response.json();

        // Update UI
        aiLoading.classList.add('hidden');
        renderAnalysis(data, reviews);

    } catch (error) {
        console.error('Error analyzing reviews:', error);
        aiLoading.classList.add('hidden');
        aiDecisionBadge.textContent = 'Error';
        aiDecisionBadge.className = 'px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-600';
    }
}

function renderAnalysis(data, originalReviews) {
    const decision = data.summary.decision;

    // Update Badge
    let badgeColor = 'bg-slate-200 text-slate-600';
    if (decision === 'Positive') badgeColor = 'bg-green-100 text-green-700';
    if (decision === 'Negative') badgeColor = 'bg-red-100 text-red-700';
    if (decision === 'Neutral') badgeColor = 'bg-yellow-100 text-yellow-700';

    aiDecisionBadge.className = `px-3 py-1 rounded-full text-sm font-medium ${badgeColor}`;
    aiDecisionBadge.textContent = `AI Verdict: ${decision}`;

    // Reset Summary UI
    const summaryText = document.getElementById('ai-summary-text');
    const summarizeBtn = document.getElementById('summarize-btn');
    const summaryLoading = document.getElementById('summary-loading');

    summaryText.classList.add('hidden');
    summaryText.textContent = '';
    summarizeBtn.classList.remove('hidden');
    summaryLoading.classList.add('hidden');

    // Setup Summarize Button
    summarizeBtn.onclick = async () => {
        summarizeBtn.classList.add('hidden');
        summaryLoading.classList.remove('hidden');

        try {
            const response = await fetch('/summarize', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ reviews: originalReviews })
            });
            const data = await response.json();

            summaryLoading.classList.add('hidden');
            if (data.summary) {
                summaryText.textContent = data.summary;
                summaryText.classList.remove('hidden');
            }
        } catch (e) {
            console.error(e);
            summaryLoading.classList.add('hidden');
            summarizeBtn.classList.remove('hidden');
            alert("Failed to summarize reviews.");
        }
    };

    // Render Reviews with Sentiment
    aiContent.innerHTML = data.individual_results.map(item => {
        let icon = 'minus';
        let color = 'text-slate-400';

        if (item.sentiment === 'Positive') {
            icon = 'thumbs-up';
            color = 'text-green-500';
        } else if (item.sentiment === 'Negative') {
            icon = 'thumbs-down';
            color = 'text-red-500';
        }

        return `
            <div class="flex items-start space-x-3 p-3 rounded-lg bg-white border border-slate-100">
                <div class="mt-0.5 ${color}">
                    <i data-lucide="${icon}" class="w-4 h-4"></i>
                </div>
                <p class="text-sm text-slate-600">${item.review}</p>
            </div>
        `;
    }).join('');

    lucide.createIcons();
}

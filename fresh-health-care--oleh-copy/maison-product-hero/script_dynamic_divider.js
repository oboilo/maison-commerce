
// Dynamic divider orientation based on wrap direction
function updateDividerOrientation() {
    const container = document.getElementById('guaranteesContainer');
    const divider = document.getElementById('guaranteeDivider');
    const items = container.querySelectorAll('.maison_commerce_guarantee_item');

    if (!container || !divider || items.length < 2) return;

    // Get the position of the first and second guarantee items
    const firstItemRect = items[0].getBoundingClientRect();
    const secondItemRect = items[1].getBoundingClientRect();

    // Check if items are on the same line (horizontal) or different lines (vertical wrap)
    const isWrapped = Math.abs(firstItemRect.top - secondItemRect.top) > 10; // 10px tolerance

    if (isWrapped) {
        // Items are wrapped to different lines - use horizontal divider
        divider.classList.remove('vertical');
        divider.classList.add('horizontal');
    } else {
        // Items are on the same line - use vertical divider
        divider.classList.remove('horizontal');
        divider.classList.add('vertical');
    }
}

// Run on page load
document.addEventListener('DOMContentLoaded', updateDividerOrientation);

// Run on window resize
window.addEventListener('resize', function () {
    // Debounce the resize event
    clearTimeout(window.dividerResizeTimeout);
    window.dividerResizeTimeout = setTimeout(updateDividerOrientation, 100);
});

// Run when fonts are loaded (in case text affects layout)
document.fonts.ready.then(updateDividerOrientation);
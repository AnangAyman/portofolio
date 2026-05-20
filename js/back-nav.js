/**
 * back-nav.js
 * Reads the ?from= query param set by the referring page and updates
 * the back button's href and label accordingly.
 *
 * Values:
 *   ?from=main    → "Back to Home"    → index.html#work
 *   ?from=archive → "Back to Library" → projects.html
 *   (none/other)  → "Back to Home"    → index.html#work  (safe default)
 */
(function () {
    var params = new URLSearchParams(window.location.search);
    var from = params.get('from');

    var backBtn = document.getElementById('back-btn');
    if (!backBtn) return;

    if (from === 'archive') {
        backBtn.href = 'projects.html';
        backBtn.querySelector('.back-label').textContent = 'Back to Library';
    } else {
        // 'main' or anything else — default to main portfolio
        backBtn.href = 'index.html#work';
        backBtn.querySelector('.back-label').textContent = 'Back to Home';
    }
})();

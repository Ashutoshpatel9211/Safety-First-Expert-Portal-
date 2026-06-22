animateCount(id, target) {
    const element = document.getElementById(id);
    let start = 0;
    const duration = 800;
    const increment = target / (duration / 16);

    function update() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(update);
        } else {
            element.textContent = target;
        }
    }

    update();
}
element.textContent = target + "+";
window.addEventListener("load", () => {
    let reports = localStorage.getItem('reportsCount') || 0;
    document.getElementById('statReports').textContent = reports;
});
const overlay = document.querySelector('.overlay');
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    if (overlay) {
        overlay.style.width = `${100 - scrollPercent}%`;
    }
});
export {};

const textarea = document.getElementById('keylogger');
let isFocused = false;
if (textarea) {
    textarea.addEventListener('focus', () => isFocused = true);
    textarea.addEventListener('blur', () => isFocused = false);
}
document.addEventListener('keydown', (e) => {
    isFocused && e.preventDefault();
    if (textarea && e.key >= 'a' && e.key <= 'z') {
        textarea.value += isFocused ? e.key.repeat(2) : e.key;
    }
});
export {};

const themeButton = document.getElementById("theme-toggle");
const body = document.body;

function setTheme(isDark) {
    body.classList.toggle("dark-mode", isDark);
    themeButton.textContent = isDark ? "☀️ Light mode" : "🌙 Dark mode";
    themeButton.setAttribute("aria-pressed", isDark);
}

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
setTheme(prefersDark);

themeButton.addEventListener("click", () => {
    setTheme(!body.classList.contains("dark-mode"));
});

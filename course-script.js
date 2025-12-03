document.addEventListener("DOMContentLoaded", () => {
    /* THEME TOGGLE WITH MEMORY */
    const body = document.body;
    const themeBtn = document.getElementById("themeToggle");
    const saved = localStorage.getItem("courseTheme");

    if (saved === "light") {
        body.classList.remove("theme-dark");
        body.classList.add("theme-light");
        themeBtn.textContent = "☀️ Light";
    } else {
        body.classList.add("theme-dark");
        themeBtn.textContent = "🌙 Dark";
    }

    themeBtn.addEventListener("click", () => {
        if (body.classList.contains("theme-dark")) {
            body.classList.remove("theme-dark");
            body.classList.add("theme-light");
            themeBtn.textContent = "☀️ Light";
            localStorage.setItem("courseTheme", "light");
        } else {
            body.classList.remove("theme-light");
            body.classList.add("theme-dark");
            themeBtn.textContent = "🌙 Dark";
            localStorage.setItem("courseTheme", "dark");
        }
    });

    /* SIDEBAR SEARCH */
    const searchInput = document.getElementById("navSearch");
    const navLinks = document.querySelectorAll(".chapter-sidebar nav a");

    if (searchInput) {
        searchInput.addEventListener("input", () => {
            const q = searchInput.value.toLowerCase();
            navLinks.forEach(a => {
                const txt = a.textContent.toLowerCase();
                a.classList.toggle("hidden", q && !txt.includes(q));
            });
        });
    }

    /* ACTIVE NAV HIGHLIGHT ON SCROLL */
    const sections = document.querySelectorAll("main .chapter-card[id]");

    const updateActive = () => {
        let currentId = null;

        sections.forEach(sec => {
            const rect = sec.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
                currentId = sec.id;
            }
        });

        navLinks.forEach(a => {
            a.classList.remove("active");
            if (currentId && a.getAttribute("href").includes(currentId)) {
                a.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", updateActive);
    updateActive();

    /* COPY BUTTONS */
    document.querySelectorAll(".code-editor").forEach(editor => {
        const btn = editor.querySelector(".copy-btn");
        const pre = editor.querySelector("pre code");

        if (!btn || !pre) return;

        btn.addEventListener("click", async () => {
            try {
                await navigator.clipboard.writeText(pre.innerText);
                btn.classList.add("copied");
                btn.textContent = "✅ Copied";
                setTimeout(() => {
                    btn.classList.remove("copied");
                    btn.textContent = "Copy";
                }, 1200);
            } catch (e) {
                console.error("Copy failed", e);
            }
        });
    });
});

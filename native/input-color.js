document
    .querySelectorAll('input:not([type="checkbox"]), select')
    .forEach((el) => {
    el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        el.style.setProperty("--x", e.clientX - r.left + "px");
        el.style.setProperty("--y", e.clientY - r.top + "px");
    });
    });
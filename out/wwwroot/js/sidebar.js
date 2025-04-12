document.addEventListener("DOMContentLoaded", () => {
    const btnOpen = document.getElementById("btn-open-sidebar");
    const btnClose = document.getElementById("btn-close-sidebar");
    const sidebar = document.getElementById("mobile-sidebar");
    const overlay = document.getElementById("sidebar-overlay");

    if (btnOpen && btnClose && sidebar && overlay) {
        btnOpen.addEventListener("click", (e) => {
            e.preventDefault();
            sidebar.classList.add("active");
            overlay.classList.remove("d-none");
        });

        btnClose.addEventListener("click", (e) => {
            e.preventDefault();
            sidebar.classList.remove("active");
            overlay.classList.add("d-none");
        });

        overlay.addEventListener("click", () => {
            sidebar.classList.remove("active");
            overlay.classList.add("d-none");
        });
    }
});

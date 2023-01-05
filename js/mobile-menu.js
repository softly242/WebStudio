(() => {
  const mobileMenu = document.querySelector(".mobile-menu");
  const openMenuBtn = document.querySelector(".menu-open");
  const closeMenuBtn = document.querySelector(".menu-close");
  const body = document.querySelector(".page");

  const toggleMenu = () => {
    const isMenuOpen =
      mobileMenu.getAttribute("aria-expanded") === "true" || false;
    mobileMenu.setAttribute("aria-expanded", !isMenuOpen);
    mobileMenu.classList.toggle("is-hidden");
    body.classList.toggle("scroll-block");

    /* const scrollLockMethod = !isMenuOpen
      ? "disableBodyScroll"
      : "enableBodyScroll";
    bodyScrollLock[scrollLockMethod](document.body); */
  };

  openMenuBtn.addEventListener("click", toggleMenu);
  closeMenuBtn.addEventListener("click", toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
    if (!e.matches) return;
    mobileMenu.classList.add("is-hidden");
    mobileMenu.setAttribute("aria-expanded", false);
    body.classList.remove("scroll-block");
    /* bodyScrollLock.enableBodyScroll(document.body); */
  });
})();

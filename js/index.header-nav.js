const navLinks = document.querySelectorAll(".nv__menu-link");
const navSocials = document.querySelectorAll(".nv__social-link");

navLinks.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    link.classList.add("nv__menu-link--hover");
  });
  link.addEventListener("mouseleave", () => {
    link.classList.remove("nv__menu-link--hover");
  });
});

navSocials.forEach((social) => {
  social.addEventListener("mouseenter", () => {
    social.style.color = "var(--copyright-background-color)";
    social.style.backgroundColor = "var(--accent-color)";
  });
  social.addEventListener("mouseleave", () => {
    social.style.color = "var(--accent-color)";
    social.style.backgroundColor = "transparent";
  });
});

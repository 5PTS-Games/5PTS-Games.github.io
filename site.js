// 5PTS Games — shared page behavior (dependency-free)

// Mobile nav toggle
(function () {
  var nav = document.querySelector(".nav");
  var burger = document.querySelector(".nav-burger");
  if (!nav || !burger) return;
  burger.addEventListener("click", function () {
    var open = nav.getAttribute("data-open") === "true";
    nav.setAttribute("data-open", String(!open));
    burger.setAttribute("aria-expanded", String(!open));
  });
})();

// Reveal-on-scroll
(function () {
  var els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    els.forEach(function (el) { el.classList.add("in"); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  els.forEach(function (el) { io.observe(el); });
})();

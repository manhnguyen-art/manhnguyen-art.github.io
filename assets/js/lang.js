<script>
(function () {
  const KEY = "site_lang";
  const root = document.documentElement; // <html>
  const btn = document.getElementById("lang-toggle");

  function apply(lang) {
    root.classList.remove("lang-vi", "lang-en");
    root.classList.add(lang === "en" ? "lang-en" : "lang-vi");
    if (btn) btn.textContent = (lang === "en") ? "EN" : "VI";
    localStorage.setItem(KEY, lang);
  }

  // Khởi tạo từ localStorage hoặc mặc định VI
  const saved = localStorage.getItem(KEY) || "vi";
  apply(saved);

  // Lắng nghe click
  if (btn) {
    btn.addEventListener("click", function () {
      const current = root.classList.contains("lang-en") ? "en" : "vi";
      apply(current === "en" ? "vi" : "en");
    });
  }
})();
</script>

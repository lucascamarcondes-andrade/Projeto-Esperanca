// ========== MENU HAMBÚRGUER ==========
const menuBtn = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Fechar menu ao clicar em um link (modo mobile)
document.querySelectorAll(".nav-menu a").forEach(link =>
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  })
);

// ========== FORMULÁRIO ==========
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputs = form.querySelectorAll("input, textarea, select");
    let valid = true;

    inputs.forEach(input => {
      if (!input.value.trim()) {
        valid = false;
        input.classList.add("invalid");
      } else {
        input.classList.remove("invalid");
      }
    });

    if (valid) {
      alert("Formulário enviado com sucesso!");
      form.reset();
    } else {
      alert("Por favor, preencha todos os campos obrigatórios.");
    }
  });
}

// ========== BOTÕES E INTERAÇÕES ==========
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("mouseover", () => btn.classList.add("hover"));
  btn.addEventListener("mouseout", () => btn.classList.remove("hover"));
});

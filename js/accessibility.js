document.addEventListener("DOMContentLoaded", () => {
  const toggleContrast = document.createElement("button");
  toggleContrast.innerText = "🌓 Alto Contraste";
  toggleContrast.className = "btn-contraste";
  document.body.prepend(toggleContrast);

  toggleContrast.addEventListener("click", () => {
    document.body.classList.toggle("alto-contraste");
  });

  // Acessibilidade por teclado
  const focaveis = document.querySelectorAll("a, button, input, select, textarea");
  focaveis.forEach(el => el.setAttribute("tabindex", "0"));
});

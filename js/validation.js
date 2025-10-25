document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const campos = form.querySelectorAll("input[required]");
    let valido = true;

    campos.forEach(campo => {
      campo.classList.remove("erro");

      if (!campo.value.trim()) {
        valido = false;
        campo.classList.add("erro");
        campo.placeholder = "Campo obrigatório";
      }

      if (campo.type === "email" && !campo.value.includes("@")) {
        valido = false;
        campo.classList.add("erro");
        campo.value = "";
        campo.placeholder = "E-mail inválido";
      }
    });

    if (valido) {
      alert("✅ Formulário enviado com sucesso!");
      form.reset();
    } else {
      alert("⚠️ Por favor, corrija os campos destacados em vermelho.");
    }
  });
});

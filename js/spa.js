document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  const main = document.querySelector("main");

  async function carregarPagina(url) {
    try {
      const resposta = await fetch(url);
      const html = await resposta.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const novoConteudo = doc.querySelector("main").innerHTML;
      main.innerHTML = novoConteudo;
      window.scrollTo(0, 0);
    } catch (erro) {
      main.innerHTML = "<p>Erro ao carregar conteúdo.</p>";
      console.error("Erro no carregamento:", erro);
    }
  }

  links.forEach(link => {
    link.addEventListener("click", evento => {
      evento.preventDefault();
      const url = link.getAttribute("href");

      if (url.endsWith(".html")) {
        carregarPagina(url);
        history.pushState({ url }, "", url);
      }
    });
  });

  window.addEventListener("popstate", e => {
    if (e.state?.url) carregarPagina(e.state.url);
  });
});

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);

    if (section.style.display === 'none') {
        section.style.display = 'block';
    }
    section.scrollIntoView({ behavior: 'smooth' });
}

if (document.querySelector("form")) {
    document.querySelector("form").addEventListener("submit", function (e) {
      e.preventDefault();
  
      const vaga = {
        placa: document.getElementById("placa").value,
        nome: document.getElementById("nome").value,
        apartamento: document.getElementById("apartamento").value,
        bloco: document.getElementById("bloco").value,
        modelo: document.getElementById("modelo").value,
        cor: document.getElementById("cor").value,
        vaga: document.getElementById("vaga").value
      };
  
      let vagas = JSON.parse(localStorage.getItem("vagas")) || [];
      vagas.push(vaga);
      localStorage.setItem("vagas", JSON.stringify(vagas));
  
      alert("Vaga cadastrada com sucesso!");
      this.reset();
    });
  }

  if (document.getElementById("listaVagas")) {
    const lista = document.getElementById("listaVagas");
    const vagas = JSON.parse(localStorage.getItem("vagas")) || [];
  
    if (vagas.length === 0) {
      lista.innerHTML = "<p>Nenhuma vaga cadastrada.</p>";
    } else {
      vagas.forEach(vaga => {
        const li = document.createElement("li");
        li.innerHTML = `
          <strong>Vaga ${vaga.vaga}</strong><br>
          <p>Proprietário: ${vaga.nome} - (${vaga.apartamento}, ${vaga.bloco})</p>
          <p>Veículo: ${vaga.modelo}, Cor: ${vaga.cor}, Placa: ${vaga.placa}</p>
        `;
        lista.appendChild(li);
      });
    }
  }
  

if (document.getElementById("vagasLivres")) {
    const todasAsVagas = Array.from({ length: 50 }, (_, i) => (i + 1).toString());
    const cadastradas = (JSON.parse(localStorage.getItem("vagas")) || []).map(v => v.vaga);
    const livres = todasAsVagas.filter(vaga => !cadastradas.includes(vaga));
  
    const lista = document.getElementById("vagasLivres");
  
    if (livres.length === 0) {
      lista.innerHTML = "<p>Não há vagas disponíveis.</p>";
    } else {
      livres.forEach(vaga => {
        const li = document.createElement("li");
        li.textContent = `Vaga ${vaga}`;
        lista.appendChild(li);
      });
    }
  }
  
if (document.getElementById("vagaContainer")) {
    const totalVagas = 50;
    const vagaContainer = document.getElementById("vagaContainer");
    const vagasCadastradas = JSON.parse(localStorage.getItem("vagas")) || [];
    const vagasOcupadas = vagasCadastradas.map(v => parseInt(v.vaga));
  
    for (let i = 1; i <= totalVagas; i++) {
      const vagaBox = document.createElement("div");
      vagaBox.classList.add("vaga");
  
      if (vagasOcupadas.includes(i)) {
        vagaBox.classList.add("ocupada");
      } else {
        vagaBox.textContent = i;
      }
  
      vagaContainer.appendChild(vagaBox);
    }
  }
  
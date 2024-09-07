function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById('resultados-pesquisa');
    let campoPesquisa = document.getElementById('campo-pesquisa').value;
  
// se campoPesquisa for uma string sem nada
if(campoPesquisa == ''){
    section.innerHTML = '<span style="color: #ec83af; font-size: 12px;">Acho que você esqueceu de digitar o nome da cidade. Tente novamente.</span>';
    return
}
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = '';
  
    // Itera sobre cada item de dados (dd)
    for (let dd of dados) {
        // se titulo includes campoPesquisa
        if(dd.titulo.toLowerCase().includes(campoPesquisa.toLowerCase()) || dd.descricao.toLowerCase().includes(campoPesquisa.toLowerCase()) || dd.tags.toLowerCase().includes(campoPesquisa.toLowerCase())){
            resultados += `
      <div class="item-resultado">
        <h2>
          <a class href='lugares${dd.titulo}.html' target="_blank" onclick="pesquisar()">${dd.titulo}</a>
        </h2>
        <p class="descricao-meta">
          ${dd.descricao}
        </p>
        <a href=${dd.link} target="_blank">Guia da Prefeitura</a>
      </div>
    `;

     }
 }
 
 if(!resultados){
  resultados = '<span style="color: #ec83af; font-size: 12px;">Desculpe, a cidade "' + campoPesquisa + '" AINDA não está cadastrada no nosso site. Por favor, tente outra cidade ou verifique a escrita da palavra pesquisada.</span>';
}

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;

  }

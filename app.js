function pesquisar() {
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo pesquisa").value

  if (!campoPesquisa) {
    section.innerHTML = "<p> Nada foi encontrado. Você digitar precisa digitar o nome de um atleta ou esporte</p>"
    return
  }

  campoPesquisa = campoPesquisa.toLowerCase()

  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

//para cada dado dentro da lista de dados
for (let dado of dados) { 
  titulo = dado.titulo.toLowerCase()
  descricao = dado.descricao.toLowerCase()
  tags = dados.tags.toLowerCase()
  //Se titulo include campoPesquisa
  //Então faça....
  if(dado.titulo.includes (campoPesquisa)|| descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) { 
    resultado += `
    <div class = "item - resultado">
     <h2>
           <a href="#" target="_blank">${dados.titulos}</a>Rayssa Leal
     </h2>
     <p class="Descrição-meta">${dados.descricao}</p>
     <a href="https://pt.wikipedia.org/wiki/Raissa_Leal" target="_blank">Mais informações</a>
    </div>}
       }
    }

    if(!resultdo == "") {
     resultado = "<p>Nada foi encontrado</p>") 
    
    }
       
 section.innerHTML = resultados  
 }


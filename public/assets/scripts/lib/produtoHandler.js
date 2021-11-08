const prenchimentoInterno = (produto) => {

    //Modelo do HTML do Accordeon
    // <li class="accordeon-item active" onclick="handleAccordeonClick(this);">
    //     <h3>Para que serve o teste?</h3>
    //     <div class="accordeon-content">
    //         <p id='LH-teste-desc'></p>
    //     </div>
    // </li>


    const contentContainer = document.getElementById('productInfo')

    //Loop para através de cada propriedade do Objeto recebido montar os accordeons internos
    for (let propriedade in produto) {

        //Usei pra ficar mais fácil que escrever produto[propriedade] toda hora
        let valor = produto[propriedade]

        //Switch pra poder isolar as propriedades que vão ser usadas na página interna
        switch (propriedade) {
            case 'nome':
                document.querySelector('h1.headerTitle').innerHTML = valor;
                break;
            case 'urlLoja':
                const btnLoja = document.getElementById('btnCompra')

                if (btnLoja) {
                    btnLoja.href = valor;
                }
                break;

            //Dois cases um em cima do outro sem break entre eles dão no mesmo caso
            case 'sobre':
            case 'sobreResumido':
                const descricaoDiv = document.getElementById('LHProdutoDesc')

                if (descricaoDiv) {
                    descricaoDiv.innerHTML = valor
                }

                break;
            //Cases focados em COVID
            case 'porqueResumido':
                contentContainer.appendChild(accordeonItem("Quando fazer:", valor));
                break;
            case 'prazo':
                contentContainer.appendChild(accordeonItem("Qual o prazo para o resultado do teste?", valor));
                break;
            case 'periodo':
                contentContainer.appendChild(accordeonItem("Qual o período ideal para realização do exame?", valor));
                break;
            case 'preparacao':
                contentContainer.appendChild(accordeonItem("O que preciso fazer antes de realizar o teste?", valor));
                break;
            case 'coleta':
                contentContainer.appendChild(accordeonItem("Como é feita a coleta?", valor));
                break;
            case 'levar':
                contentContainer.appendChild(accordeonItem("O que preciso levar para a realização do teste?", valor));
                break;
            case 'porque':
                contentContainer.appendChild(accordeonItem("Por que fazer o teste se não apresentei sintomas?", valor));
                break;
            case 'laboratorio':
                if (valor == 'exame') {
                    var divs = document.querySelectorAll('.filialPanvel');
                    for (div of divs) {
                        div.style.display = "none"
                    }
                } else {
                    var divs = document.querySelectorAll('.filialExame');
                    for (div of divs) {
                        div.style.display = "none"
                    }
                }
                break;
            //Cases focados em Vacinas
            case 'prevencao':
                contentContainer.appendChild(accordeonItem("Prevenção: ", valor));
                break;
            case 'posologia':
                contentContainer.appendChild(accordeonItem("Posologia: ", valor));
                break;
            case 'reacoes':
                contentContainer.appendChild(accordeonItem("Reações Adversas:", valor));
                break;
            case 'indicacoes':
                contentContainer.appendChild(accordeonItem("Indicado para:", valor));
                break;
            case 'contraindicacoes':
                contentContainer.appendChild(accordeonItem("Contraindicações", valor));
                break;
            case 'viaaplicacao':
                contentContainer.appendChild(accordeonItem("Via de aplicação:", valor));
                break;
            default:
                break;
        }

    }

    // const accordeonItens = [...document.querySelectorAll('.accordeon-item')];
    // for(let elemento of accordeonItens){

    //     elemento.addEventListener('onclick', handleAccordeonClick(elemento))
    //     elemento.classList.add('active')
    // }
};

function accordeonItem(header, content) {
    //Cria o html do accordeon
    var li = document.createElement("li");
    li.classList.add('accordeon-item', 'active')
    //li.onclick = handleAccordeonClick(this)

    //Recebe nome conforme propriedade
    var h3 = document.createElement("h3");
    h3.innerText = header

    var divInterna = document.createElement("div");
    divInterna.classList.add('accordeon-content')

    var p = document.createElement("p");
    p.innerHTML = content

    divInterna.appendChild(p)
    li.appendChild(h3)
    li.appendChild(divInterna)

    return li
}

function preencherDados(param) {

    if (param.hasOwnProperty('p')) {
        const testeId = produtosTestesCovid.itens.find(teste => teste.id === parseInt(param.p));

        testesDiv(testeId);
    }

}
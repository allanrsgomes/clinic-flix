/* Códigos de busca */
function searchPesquisa() {
    let input = document.getElementById('LHsearchBar').value
    let x = document.querySelectorAll('div.LHThumbSlider li.splide__slide');

    for (div of x) {
        if (div.innerHTML.toLowerCase().includes(input)) {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    }
}

function findMatchesBusca() {

    let input = document.getElementById('LHsearchBar').value

    const resultadosWrapper = document.querySelector('#buscaSlider');

    const containerResultadoBusca = document.querySelector('#buscaSlider1 .splide__list');

    containerResultadoBusca.innerHTML = "";

    if (input != "") {

        const headerBusca = document.querySelector('#buscaSlider #buscaHeader');

        headerBusca.innerHTML = `Resultados relacionados`;

        let resultados = [];

        for (tipo of produtos) {
            //debugger;

            if (tipo.categoria.toLowerCase().indexOf(input) >= 0) {
                resultados.push(tipo.itens);
            } else {
                for (produto of tipo.itens) {
                    if (produto.hasOwnProperty('nome')) {
                        if (produto.nome.toLowerCase().indexOf(input) != -1) {
                            resultados.push(produto)
                        } else {
                            if (produto.hasOwnProperty('tagsPalavras'))
                                for (palavra of produto.tagsPalavras) {
                                    if (palavra.toLowerCase().indexOf(input) != -1) {
                                        resultados.push(produto)
                                    }
                                }

                            if (produto.hasOwnProperty('tagsDoenças'))
                                for (i in produto.tagsDoenças) {
                                    if (produto.tagsDoenças[i].toLowerCase().indexOf(input) != -1) {
                                        resultados.push(produto)
                                    } else {
                                        produto.tagsDoenças.splice(produto.tagsDoenças, i)
                                    }
                                }
                        }
                    }
                }
            }
        }

        if (document.querySelector('#buscaSlider1')) {

            if (resultados != 'undefined') {
                for (const i in resultados) {
                    //debugger;
                    if (Array.isArray(resultados[i])) {
                        for (item of resultados[i])
                            containerResultadoBusca.appendChild(mountSlideButton(item));
                    }
                    else {
                        if (i == 0) {
                            containerResultadoBusca.appendChild(mountSlideButton(resultados[i]));
                        } else if (!(resultados[i].nome == resultados[i - 1].nome)) {
                            containerResultadoBusca.appendChild(mountSlideButton(resultados[i]));
                        }
                    }
                }
            }

            //debugger;
            var buscaSliderPrincipal = montagemSplide('buscaSlider1').mount();
            handleSliderHover(buscaSliderPrincipal, document.querySelector(`#buscaSlider1`));

            initClinicModals();

            resultadosWrapper.classList.add('active');

        }
    } else {
        resultadosWrapper.classList.remove('active');

    }
}
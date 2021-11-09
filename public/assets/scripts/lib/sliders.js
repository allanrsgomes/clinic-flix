const mountSlideButton = (content, categoria, categoriaMobile) => {

    var cardLi = document.createElement('li');
    cardLi.classList.add('splide__slide');

    var innerDiv = document.createElement('div');
    innerDiv.classList.add('thumb-title');


    if (categoria != undefined) {
        var categoryDiv = document.createElement('div')
        categoryDiv.classList.add('thumb-category')

        //Refatorar baseado no nome da imagem (light-default / dark-default)
        if (content.colorType == "light")
            categoryDiv.classList.add('dark-blue')
        else
            categoryDiv.classList.add('light-blue')

        var categoryText = document.createElement('h4')
        categoryText.innerText = categoria.toLowerCase();

        categoryDiv.appendChild(categoryText)

        if (categoriaMobile != undefined) {
            categoryText.classList.add('hide-mob')

            var categoryTextMobile = document.createElement('h4')
            categoryTextMobile.innerText = categoriaMobile.toLowerCase();
            categoryTextMobile.classList.add('hide-desktop')

            categoryDiv.appendChild(categoryTextMobile)
        }

        if (content.nome == "Qual teste devo fazer?") {
            innerDiv.classList.add('bg-left');
        } else {
            innerDiv.appendChild(categoryDiv)

            if (content.nome == "Bem-estar") {
                innerDiv.classList.add('bg-left');
            }
            if (content.nome == "Treino") {

            }
        }

    }


    if (content.hasOwnProperty('opacity')) {
        if (content.opacity == 0)
            innerDiv.classList.remove('custom-opacity');
        else
            innerDiv.classList.add('custom-opacity');
    }

    var innerTitle = document.createElement('h3');
    innerTitle.textContent = content.nome;
    if (content.hasOwnProperty('colorType')) {
        if (content.colorType == "light")
            innerTitle.classList.add('darker-title')
    }

    innerDiv.appendChild(innerTitle);

    if (content.hasOwnProperty('subtitulo')) {
        var spanSubtitulo = document.createElement('span');
        spanSubtitulo.classList.add('slide-subtitle');
        spanSubtitulo.innerText = content.subtitulo;

        innerDiv.appendChild(spanSubtitulo);
    }

    if (content.hasOwnProperty('img')) {
        // var img = document.createElement('img');
        // img.src = `assets/images/${content.img}`;
        // cardLi.appendChild(img);
        innerDiv.style.backgroundImage = `url(https://cdn1.staticpanvel.com.br/cdn_service/landpages/page-clinic/assets/images/${content.img})`;

    } else {
        cardLi.classList.add('slider-cartao-default')
        //Colocar padrão cartão
        // cardLi.style.backgroundColor = "rgba(36, 63, 140, 1)";
        // cardLi.style.width = "240px";
    }

    if (content.hasOwnProperty('url') || content.hasOwnProperty('urlInterna')) {

        var link = document.createElement('a');

        link.setAttribute("onclick", "pushLink('clinicServiços', " + content.nome + ", " + categoria + ", 'linkPosition')");

        link.appendChild(innerDiv);

        if (content.hasOwnProperty('urlInterna')) {
            //if(categoria != undefined){
            if (categoria == produtosExamesRapidos.categoria) {
                link.href = content.urlLoja
            }
            //}
            else
                link.href = `${content.urlInterna}${content.id}`
        } else {
            if (content.url.indexOf('vittude') > 0)
                link.href = `${content.url}`;
            else
                link.href = `${content.url}`;
        }

        cardLi.appendChild(link)

    } else {
        if (content.img.indexOf('atendimento-domiciliar') >= 0) {
            var link = document.createElement('a');

            link.appendChild(innerDiv);

            link.href = `${content.urlLoja}`;

            cardLi.appendChild(link);
        } else
            cardLi.appendChild(innerDiv);
    }

    // if(content.nome == "Psicólogo Online"){
    //     //Monta a div do desconto
    //     var divDesconto = document.createElement('div');
    //     divDesconto.classList.add('divDesconto');

    //     divDesconto.innerText = '-40%';

    //     cardLi.appendChild(divDesconto);
    // }

    if (content.hasOwnProperty('click')) {
        cardLi.classList.add('bt-abrir-assistVirtual');
    }

    return cardLi;

}

const createHomeSliders = () => {

    //Inicialização dos sliders maiores
    if (document.querySelector('#LHMainSliderDesktop')) {

        const mainSliderDesktop = new Splide('#LHMainSliderDesktop', {
            type: 'loop',
            focus: 'center',
            gap: 10,
            autoplay: true,
            interval: 5000,
            autoWidth: true,
            pagination: false,
        }).mount();
    }

    if (document.querySelector('#LHMainSliderMobile')) {

        const mainSliderMobile = new Splide('#LHMainSliderMobile', {
            type: 'loop',
            focus: 'center',
            autoplay: true,
            interval: 5000,
            arrows: false,
            autoWidth: true,
            pagination: false,
        }).mount();
    }

    if (document.querySelector('#LHAdSlider')) {

        const adSlider = new Splide('#LHAdSlider', {
            type: 'loop',
            arrows: true,
            autoplay: true,
            interval: 5000,
            pagination: false,
        }).mount();

    }

    //Inicialização dos gerais de conteúdo
    var slidersGerais = document.querySelectorAll('.splide');

    for (slider of slidersGerais) {
        if (!slider.classList.contains('LHCarousel')) {
            var sliderVacinas = montagemSplide(slider.id);
            handleSliderHover(sliderVacinas, document.querySelector(`#${slider.id}`));
        }
    }
}

const createHomeSlidersItems = () => {

    if (document.querySelector('#vacinas-disponiveis')) {

        const containerVacinas = document.querySelector('#vacinas-disponiveis .splide__list');

        for (vacina of produtosVacinas.itens) {
            containerVacinas.appendChild(mountSlideButton(vacina, produtosVacinas.categoria));
        }

        // const btnShowAll = document.createElement('div');
        // btnShowAll.classList.add('btnShowAll');

        // const linkAll = document.createElement('a')
        // linkAll.innerText = "VER TODAS AS VACINAS →"
        // linkAll.href = "/panvel/vacinas-disponiveis.do"

        // btnShowAll.appendChild(linkAll)

        // const splideTrack = document.querySelector('#vacinas-disponiveis .splide__track');
        // splideTrack.insertAdjacentHTML('beforebegin', `${btnShowAll.outerHTML}`);

    }

    if (document.querySelector('#testes-covid')) {

        const containerCovid = document.querySelector('#testes-covid .splide__list');

        for (categoria of produtosTestesCovid.itens) {
            containerCovid.appendChild(mountSlideButton(categoria, produtosTestesCovid.categoria));
        }

        // const btnShowAll = document.createElement('div');
        //btnShowAll.classList.add('btnShowAll');

        //const linkAll = document.createElement('a')
        // linkAll.innerText = "VER TODOS OS TESTES →"
        //linkAll.href = "/panvel/testes-covid.do"

        // btnShowAll.appendChild(linkAll)

        // const splideTrack = document.querySelector('#testes-covid .splide__track');
        // splideTrack.insertAdjacentHTML('beforebegin', `${btnShowAll.outerHTML}`);
    }

    if (document.querySelector('#testes-dengue')) {

        const containerDengue = document.querySelector('#testes-dengue .splide__list');

        for (teste of produtosTesteDengue.itens) {
            containerDengue.appendChild(mountSlideButton(teste, produtosTesteDengue.categoria));
        }
    }

    if (document.querySelector('#exames-rapidos-container')) {

        const containerTestesRapidos = document.querySelector('#exames-rapidos-container .splide__list');

        // for (teste of produtosTesteDengue.itens) {
        //     containerTestesRapidos.appendChild(mountSlideButton(teste, produtosTesteDengue.categoria));
        // }

        for (teste of produtosExamesRapidos.itens) {
            containerTestesRapidos.appendChild(mountSlideButton(teste, produtosExamesRapidos.categoria));
        }

        // const btnShowAll = document.createElement('div');
        // btnShowAll.classList.add('btnShowAll');

        // const linkAll = document.createElement('a')
        // linkAll.innerText = "VER TODOS OS EXAMES →"
        // linkAll.href = "/panvel/exames-rapidos.do"

        // btnShowAll.appendChild(linkAll)

        // const splideTrack = document.querySelector('#exames-rapidos-container .splide__track');
        // splideTrack.insertAdjacentHTML('afterend', `${btnShowAll.outerHTML}`);

    }

    if (document.querySelector('#atendimentos-farmaceuticos')) {

        const containerAtendimentosFarmaceuticos = document.querySelector('#atendimentos-farmaceuticos .splide__list');

        for (atendimento of produtosAtendimentosFarmaceuticos.itens) {
            containerAtendimentosFarmaceuticos.appendChild(mountSlideButton(atendimento, produtosAtendimentosFarmaceuticos.categoria, produtosAtendimentosFarmaceuticos.categoriaMobile));
        }

    }

    if (document.querySelector('#serviços-farmaceuticos')) {

        const containerServicosFarmaceuticos = document.querySelector('#serviços-farmaceuticos .splide__list');

        for (servico of produtosServicosFarmaceuticos.itens) {
            containerServicosFarmaceuticos.appendChild(mountSlideButton(servico, produtosServicosFarmaceuticos.categoria, produtosServicosFarmaceuticos.categoriaMobile));
        }

        // const btnShowAll = document.createElement('div');
        // btnShowAll.classList.add('btnShowAll');

        // const linkAll = document.createElement('a')
        // linkAll.innerText = "VER TODOS OS SERVIÇOS →"
        // linkAll.href = "pages/servicos-farmaceuticos.html"

        // btnShowAll.appendChild(linkAll)

        // const splideTrack = document.querySelector('#serviços-farmaceuticos .splide__track');
        // splideTrack.insertAdjacentHTML('afterend', `${btnShowAll.outerHTML}`);

    }

    if (document.querySelector('#testes-geneticos')) {


        const containerTestesGeneticos = document.querySelector('#testes-geneticos .splide__list');

        for (teste of produtosTestesGeneticos.itens) {
            containerTestesGeneticos.appendChild(mountSlideButton(teste, produtosTestesGeneticos.categoria));
        }

    }

    if (document.querySelector('#atendimentos-saude')) {


        const containerAtendimentosSaude = document.querySelector('#atendimentos-saude .splide__list');

        for (atendimento of produtosAtendimentosSaude.itens) {
            containerAtendimentosSaude.appendChild(mountSlideButton(atendimento, produtosAtendimentosSaude.categoria, produtosAtendimentosSaude.categoriaMobile))
        }

    }

    if (document.querySelector('#atendimento-domiciliar')) {


        const containerAtendimentoDomiciliar = document.querySelector('#atendimento-domiciliar .splide__list');


        if (window.location.href.indexOf('index-v2') >= 0) {

            for (atendimento of categoriasDomiciliares) {
                containerAtendimentoDomiciliar.appendChild(mountSlideButton(atendimento))
            }

        } else {
            for (atendimento of produtosAtendimentoDomiciliar.itens) {
                containerAtendimentoDomiciliar.appendChild(mountSlideButton(atendimento, produtosAtendimentoDomiciliar.categoria, produtosAtendimentoDomiciliar.categoriaMobile))
            }
        }

        // const btnShowAll = document.createElement('div');
        // btnShowAll.classList.add('btnShowAll');

        // const linkAll = document.createElement('a')
        // linkAll.innerText = "VER TODOS OS ATENDIMENTOS →"
        // linkAll.href = "/panvel/atendimento-domiciliar-servicos.do"

        // btnShowAll.appendChild(linkAll)

        // const splideTrack = document.querySelector('#atendimento-domiciliar .splide__track');
        // splideTrack.insertAdjacentHTML('afterend', `${btnShowAll.outerHTML}`);

    }

    if (document.querySelector('#combos-promocionais')) {

        const containerComboPromocional = document.querySelector('#combos-promocionais .splide__list');

        for (combo of produtosCombosPromocionais.itens) {
            containerComboPromocional.appendChild(mountSlideButton(combo, produtosCombosPromocionais.categoria))
        }

    }
}

function handleSliderHover(slider, container) {
    var repeater;

    var next = container.parentElement.querySelector('.next');

    var previous = container.parentElement.querySelector('.previous');

    var nextClone = next.cloneNode(true);
    var previousClone = previous.cloneNode(true);


    nextClone.addEventListener("mouseover",
        () => {
            repeater = setInterval(() => {
                slider.go('+');
            }, 700);
        }
    )

    previousClone.addEventListener("mouseover",
        () => {
            repeater = setInterval(() => {
                slider.go('-');
            }, 700);
        }
    )

    nextClone.addEventListener("mouseout",
        () => {
            clearInterval(repeater)
        }
    )

    previousClone.addEventListener("mouseout",
        () => {
            clearInterval(repeater)
        }
    )

    //Zerando os event listener
    next.parentNode.replaceChild(nextClone, next);
    previous.parentNode.replaceChild(previousClone, previous);
}


const montagemSplide = (id) => {

    var sliderAtual = new Splide(`#${id}`, {
        height: 135,
        gap: 10,
        autoWidth: true,
        padding: {
            left: 0,
            right: 6,
        },
        pagination: false,
        arrows: false,
    })

    sliderAtual.mount();

    return sliderAtual;
};

function setSlidersMarginLeft() {
    let thumbSlider = document.querySelectorAll(".LHThumbSlider .splide__list")

    for (slider of thumbSlider) {
        slider.style.transform = "translateX(3.5vw)"
    }
}

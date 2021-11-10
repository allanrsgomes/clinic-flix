const mountCards = (array, container, category) => {
    for (content of array) {

        var link = document.createElement("a");

        var div = document.createElement("div");
        if (content.hasOwnProperty('click') && content.click == 'handleTesteCOVID') {
            div.classList.add('bt-abrir-assistVirtual');
        } else {
            if (content.hasOwnProperty('Item'))
                if (content.hasOwnProperty('urlInterna'))
                    link.href = `${content.urlInterna}${content.Item}`;
                else
                    if (content.hasOwnProperty('urlLoja'))
                        link.href = `${content.urlLoja}`;
                    else
                        link.href = `${content.url}`;

            else
                link.href = `${content.urlInterna}${content.id}`;
        }

        if (content.hasOwnProperty('urlInterna') || content.hasOwnProperty('url')) {
            link.href = `${content.urlInterna}`;
            link.href = `${content.url}`;
        }

        div.classList.add('lhDefaultCard');

        var h3 = document.createElement("h3");
        h3.innerText = content.nome;
        h3.classList.add('nomeVacina');

        if (content.hasOwnProperty('imgCard')) {
            div.classList.add('lhCardImage');
            if (content.imgCard == 1) {
                div.style.backgroundImage = `url('https://cdn1.staticpanvel.com.br/cdn_service/landpages/page-clinic-tst/assets/images/atendimento-domiciliar/Cards/${content.Item}-15.jpg')`;
            } else {
                div.style.backgroundImage = `url('https://cdn1.staticpanvel.com.br/cdn_service/landpages/page-clinic-tst/assets/images/${content.imgCard} ')`;
            }
            h3.classList.add('hidden')
        } else {
            div.style.backgroundImage = `url('https://cdn1.staticpanvel.com.br/cdn_service/landpages/page-clinic-tst/assets/images/${content.img} ')`;
        }

        div.appendChild(h3);
        link.appendChild(div);

        container.appendChild(link);
    }
}
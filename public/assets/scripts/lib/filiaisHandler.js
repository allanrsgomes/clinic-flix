function handleFiliais() {
    var btnFiliais = document.querySelectorAll('#btnFiliais');

    for (btnFilial of btnFiliais) {
        btnFilial.onclick = () => {
            mostrarFiliais(btnFilial);
        }
    }

    var btnVoltarFiliais = document.querySelectorAll('.filiaisVoltar');

    for (btnVoltar of btnVoltarFiliais) {
        btnVoltar.onclick = () => {
            esconderFiliais(btnVoltar);
        }
    }

}



const mostrarFiliais = (button) => {
    var divOculta = button.closest('div.default-content');
    divOculta.style.display = 'none';
    var divFiliais = divOculta.nextSibling.nextSibling; //Não sei porque assim pegou mas closest não
    divFiliais.style.display = 'block';
    document.location.hash = '#LHModalHeader';
}

const esconderFiliais = (button) => {
    var divOculta = button.closest('div.content-filiais');
    divOculta.style.display = 'none';
    var divInfo = divOculta.previousSibling.previousSibling; //Não sei porque assim pegou mas closest não
    divInfo.style.display = 'block';
    document.location.hash = '#LHModalHeader';
}
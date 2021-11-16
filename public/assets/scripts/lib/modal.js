/* Detecta e inicializa as modais do Clinic. Verifique as opções de customização em "MODAL CUSTOMIZADA". */
const initClinicModals = () => {

    /* Captura modal de acordo com a nomenclatura padrão. As modais da página serão carregadas nesta modal. */
    const modalOverlay = document.getElementById('LHModalOverlay');

    /* Verifica se há modal na página */
    if (modalOverlay) {

        /* VERIFICADORES: 
        CARREGA OS DADOS DA SUA MODAL SOMENTE EM PÁGINAS EM QUE HOUVER CHAMADAS PARA ELA: */
        // if(document.getElementById('agendarBtn') != null)
        // {
        //     var btnModalAgendamento = document.getElementById('agendarBtn');
        //     btnModalAgendamento.classList.add('bt-abrir-agendamento');
        // }



        var btnQuestionario = document.querySelector('#covid-slide01')

        if (btnQuestionario) {
            btnQuestionario.classList.add('bt-abrir-assistVirtual');
        }

        var btnModalAgendamento = document.getElementById('agendarBtn');

        if (btnModalAgendamento) {
            btnModalAgendamento.classList.add('bt-abrir-agendamento');
        }

        /* Verifica se há um botão para um questionário JSON na página */
        const hasJSONQuestionaire = [...document.getElementsByClassName('bt-abrir-assistVirtual')].length > 0;

        /* Verifica se há um botão para um agendamento */
        const hasModalAgendamento = [...document.getElementsByClassName('bt-abrir-agendamento')].length > 0;

        /* Verifica se há um botão para um agendamento */
        const hasModalVideo = [...document.getElementsByClassName('btnVideo')].length > 0;
        const hasModalVideoHygia = [...document.getElementsByClassName('btnVideoHygia')].length > 0;


        /* EDITE: Adicione seus verificadores aqui */
        const modalContent = document.getElementById('LHModalContent');
        const btCloseModal = document.getElementById('btCloseModal');

        /* Fecha modal caso ocorra clique fora de sua área */
        btCloseModal.onclick = function () {
            closeModal();
        }

        /* Se há botões que abrem a modal do Questionário, ele inicializa a modal Questionário customizada.*/
        if (hasJSONQuestionaire) {
            initModal(modalOverlay, modalContent, 'bt-abrir-assistVirtual', handleOpenAssistVirtual)
        }

        if (hasModalAgendamento) {
            initModal(modalOverlay, modalContent, 'bt-abrir-agendamento', handleOpenAgendamento)
        }

        if (hasModalVideo) {
            if (hasModalVideoHygia)
                initModal(modalOverlay, 'hygia', 'btnVideoHygia', handleOpenVideo)

            console.log('hasAgendamento');
            initModal(modalOverlay, modalContent, 'btnVideo', handleOpenVideo)
        }
        //TODO Put focus back to button
        const closeModal = () => {

            modalOverlay.style.left = "-100%"

            for (modal of modalOverlay.children) {
                modal.style.left = "-100%"
            }

            document.getElementsByTagName('body')[0].style.overflow = 'auto';

            location.reload();
        }

        // When the user clicks anywhere outside of the modal, close it
        window.addEventListener('click', function (event) {
            if (event.target == modalOverlay) {
                closeModal();
            }
        });

        document.addEventListener('keyup', (event) => {
            /* Fecha modal com tecla Esc */
            if (event.code == 'Escape') {
                closeModal();
            }
        })
        69
    }

}

const initModal = (modal, modalContent, activatorClassName, clickHandler) => {
    /* lista de botões com a classe especificada */
    const activatorArray = [...document.getElementsByClassName(activatorClassName)];
    activatorArray.map(btOpenModal => {
        btOpenModal.addEventListener('click', () => clickHandler(modal, modalContent));
    });
}

async function loadJSON(url) {
    try {
        const res = await fetch(url);
        return await res.json();
    } catch (e) {
        throw new Error("Ops! Arquivo JSON não abre localmente.");
    }
}

// Quando o usuário clica em um botão do tipo ".bt-abrir-assistVirtual", handleOpenAssistVirtual é invocada.
const handleOpenAssistVirtual = (modal, modalContent) => {
    let questStart = {};
    let questIndex = 0;
    let stepCounter = 0;

    document.getElementsByTagName('body')[0].style.overflow = 'hidden';

    const modalHeader = document.getElementById('modalHeader');

    const handleClick = (e, nextNode, wrapper) => {
        updateQuestion(nextNode);
        e.target.classList.add('active');
        wrapper.classList.add('completed');
        wrapper.classList.remove('active');

        const movementCompleteListener = (e) => {
            e.target.removeEventListener('transitionend', movementCompleteListener)
            e.target.classList.remove('completed');
            e.target.innerHTML = '';
        }

        wrapper.addEventListener('transitionend', movementCompleteListener)
    }

    const restartTest = (wrapper) => {
        stepCounter = 0;
        updateQuestion(questStart);
        wrapper.classList.add('completed');
        wrapper.classList.remove('active');
        const movementCompleteListener = (e) => {
            e.target.removeEventListener('transitionend', movementCompleteListener)
            e.target.classList.remove('completed');
            e.target.innerHTML = '';
        }
        wrapper.addEventListener('transitionend', movementCompleteListener)
    }

    const clearTest = () => {
        let questWrappers = [document.getElementById('assistVirtual-wrapper-0'), document.getElementById(
            'assistVirtual-wrapper-1')]
        questWrappers.map(questWrapper => {
            questWrapper.innerHTML = '';
            questWrapper.classList.remove('completed');
            questWrapper.classList.remove('active');
        })
    }

    const resetTest = () => {
        clearTest();
        updateQuestion(questStart);
    }

    const handleAssistVirtualModal = data => {
        //console.log(data.questionario);
        questStart = data.questionario;
        updateQuestion(questStart);
    }

    loadJSON(
        'https://cdn1.staticpanvel.com.br/cdn_service/landpages/page-clinic/assets/scripts/assistente-virtual-vacinas.JSON'
    ).then(data => {
        clearTest();
        handleAssistVirtualModal(data);
        modal.style.display = "flex";
    })

    const updateQuestion = node => {
        const question = node.question;
        const questionText = node.text;
        const options = node.data;
        const note = node.note;
        const recommendedExam = node.recommendedExam;
        const questContainer = document.getElementById('assistVirtual-wrapper-' + questIndex % 2);
        console.log(questIndex);
        if (stepCounter == 0) {
            modalHeader.classList.remove('assistantStarted');
        }

        if (stepCounter == 1) {
            modalHeader.classList.add('assistantStarted');
        }

        questContainer.innerHTML = '';

        if (options && question) {
            let nextNodeArray = [];
            questContainer.innerHTML = '<h2 id="question">' + question + '</h2>';

            if (questionText) {
                questContainer.innerHTML += '<p class="questionText">' + questionText + '</p>';
            }

            questContainer.innerHTML += '<hr class="blue-separator">';

            let optionsWrapper = document.createElement('div');
            optionsWrapper.classList.add('options');

            options.map(option => {
                optionsWrapper.innerHTML +=
                    '<button name="questOption" class="questOption buttonQuest">' +
                    option.optionValue + '</button>';
                nextNodeArray.push(option);
            });


            questContainer.appendChild(optionsWrapper);

            [...document.querySelectorAll('#assistVirtual-wrapper-' + questIndex % 2 + ' .questOption')].map
                ((element, index) => {
                    element.onclick = (e) => handleClick(e, nextNodeArray[index], questContainer);
                })
        } else {
            if (recommendedExam) {
                questContainer.innerHTML += '<h3>Resultado:</h3><hr class="blue-separator"/>';
                if (recommendedExam.includes('Teste Rápido ANTÍGENO (Nasal)'))
                    questContainer.innerHTML +=
                        '<p>Baseado nas suas respostas indicamos a realização dos seguintes exames <br> para a verificação de proteínas virais, se esta ou não com o vírus no momento da coleta:</p>';
                else
                    questContainer.innerHTML +=
                        '<p>Baseado nas suas respostas e recomendações medicas,<br>indicamos a realização dos seguintes exames para a detecção do Covid-19:</p>';
                questContainer.innerHTML += '<div class="recommended-exam">' + recommendedExam + '</div>';
            }
            if (note) {
                questContainer.innerHTML += '<p class="note">' + note + '</p>';
            }
            if (note || recommendedExam) {
                questContainer.innerHTML +=
                    '<div class="options"><button id="restart-test-button" class="questOption buttonQuest">Refazer o teste</button>' +
                    /*<button class="questOption bt-agendar-vacina">Agendar exame</button>*/
                    '</div>';
                document.getElementById('restart-test-button').onclick = (e) => restartTest(questContainer);
            }
        }

        questContainer.classList.add('active');
        questIndex++;
        stepCounter++;
    }
}

const handleOpenAgendamento = (modalOverlay, modalContainer) => {//manipula o container da modal

    document.getElementsByTagName('body')[0].style.overflow = 'hidden'; //tira a barra de rolagem

    modalOverlay.style.left = "0";
    modalContainer.style.left = "0";

    document.getElementById('modal').style.left = "0"
    modalContainer.children[0].style.display = "flex";
}

const handleOpenVideo = (modal, modalContent) => {

    document.getElementsByTagName('body')[0].style.overflow = 'hidden';

    if (modalContent == "hygia") {
        modal.style.display = "flex";
        if (document.getElementById('lhModalColetaVideo')) {
            document.getElementById('lhModalColetaVideo').style.display = "none";
        }
        document.getElementById('lhModalHygiaVideo').style.display = "flex";
    } else {
        modal.style.display = "flex";
        if (document.getElementById('lhModalHygiaVideo')) {
            document.getElementById('lhModalHygiaVideo').style.display = "none";
        }
        document.getElementById('lhModalColetaVideo').style.display = "flex";
    }


}
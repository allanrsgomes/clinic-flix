const handleAccordeonClick = (button) => {
    let buttonList = button.parentNode.getElementsByTagName('li');
    [...buttonList].forEach(item => item.classList.remove("active"));
    // ativa somente o clicado
    button.classList.add("active");
}
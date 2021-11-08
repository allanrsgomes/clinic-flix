const menuVacinas = [
    {
        nome: "Gestantes",
        img: "web/vacinas/Thumbs/1756 - 240x135 - Meningite C_GSK.png",
        url: "vacinas-disponiveis.html?g=gestante",
    },
    {
        nome: "Bebe (0 à 12 meses)",
        img: "web/vacinas/Thumbs/1756 - 240x135 - Hepatite A_MSD Ped.png",
        url: "vacinas-disponiveis.html?g=nascimento",
    },
    {
        nome: "Criança (1 a 9 anos)",
        img: "web/vacinas/Thumbs/1756 - 240x135 - Meningite B_GSK.png",
        url: "vacinas-disponiveis.html?g=infantil",
    },
    {
        nome: "Adolescente ( 11 à 19 anos)",
        img: "web/vacinas/Thumbs/1756 - 240x135 - Triplice Viral_MSD.png",
        url: "vacinas-disponiveis.html?g=adolescente",
    },
    {
        nome: "Adulto (20 à 59 anos)",
        img: "web/vacinas/Thumbs/1756 - 240x135 - Hexavalente_GSK.png",
        url: "vacinas-disponiveis.html?g=adulto",
    },
    {
        nome: "Idoso (60+)",
        img: "web/vacinas/Thumbs/1756 - 240x135 - Herpes Zoster_MSD.png",
        url: "vacinas-disponiveis.html?g=idoso",
    },
];

const categoriasDestaque = [
    {
        id: 1,
        nome: "Testes Panvel",
        url: "#",
    },
    {
        id: 2,
        nome: "Testes Laboratório Exame",
        url: "#",
    }
];

const categoriasCovid = [
    {
        id: 0,
        nome: "Quiz COVID",
        click: 'handleTesteCOVID'
    },
    {
        id: 1,
        nome: "Testes Panvel Rápido Antígeno",
        url: "covid.html?c=rapido%antigeno",
    },
    {
        id: 3,
        nome: "Testes Panvel Anticorpos",
        url: "covid.html?c=anticorpos",
    },
    {
        id: 4,
        nome: "Testes Laboratório Exame",
        url: "covid.html?l=exame",
    }
];

const categoriasDomiciliares = [
    {
        id: 1,
        nome: "Aplicação de Medicamentos",
        url: "servicos-domiciliares.html"
    },
    {
        id: 2,
        nome: "Aferições",
        url: "servicos-domiciliares.html"
    },
    {
        id: 3,
        nome: "Banho",
        url: "servicos-domiciliares.html"
    },
    {
        id: 4,
        nome: "Cuidados com sonda",
        url: "servicos-domiciliares.html"
    },
    {
        id: 5,
        nome: "Cuidados de enfermagem",
        url: "servicos-domiciliares.html"
    },
    {
        id: 6,
        nome: "Curativos",
        url: "servicos-domiciliares.html"
    }
];
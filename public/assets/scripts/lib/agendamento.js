//Function Remover o Atributo do input Cidade
function DesativarDisabled() {

  const optionListCity = document.querySelector('#optionsCity')

  optionListCity.removeAttribute("disabled")
}

//Dados das filiais
const cidadesAgendamentos = [
  {
    "UF": "PR",
    "Cidade": "Campo Mourão",
    "CodAgendamento": "31"
  },
  {
    "UF": "PR",
    "Cidade": "Cascavel",
    "CodAgendamento": "21"
  },
  {
    "UF": "PR",
    "Cidade": "Cianorte",
    "CodAgendamento": "25"
  },
  {
    "UF": "PR",
    "Cidade": "Curitiba",
    "CodAgendamento": "24"
  },
  {
    "UF": "PR",
    "Cidade": "Londrina",
    "CodAgendamento": "77"
  },
  {
    "UF": "PR",
    "Cidade": "Maringá",
    "CodAgendamento": "79"
  },
  {
    "UF": "PR",
    "Cidade": "Paranavaí",
    "CodAgendamento": "80"
  },
  {
    "UF": "PR",
    "Cidade": "Paranguá",
    "CodAgendamento": "81"
  },
  {
    "UF": "PR",
    "Cidade": "Ponta Grossa",
    "CodAgendamento": "53"
  },
  {
    "UF": "PR",
    "Cidade": "São José dos Pinhais",
    "CodAgendamento": "91"
  },
  {
    "UF": "PR",
    "Cidade": "Umuarama",
    "CodAgendamento": "94"
  },
  {
    "UF": "RS",
    "Cidade": "Alegrete",
    "CodAgendamento": "11"
  },
  {
    "UF": "RS",
    "Cidade": "Atlântida Sul",
    "CodAgendamento": "12"
  },
  {
    "UF": "RS",
    "Cidade": "Bagé",
    "CodAgendamento": "13"
  },
  {
    "UF": "RS",
    "Cidade": "Bento Gonçalves",
    "CodAgendamento": "14"
  },
  {
    "UF": "RS",
    "Cidade": "Cachoeira do Sul",
    "CodAgendamento": "18"
  },
  {
    "UF": "RS",
    "Cidade": "Cachoeirinha",
    "CodAgendamento": "17"
  },
  {
    "UF": "RS",
    "Cidade": "Camaquã",
    "CodAgendamento": "32"
  },
  {
    "UF": "RS",
    "Cidade": "Campo Bom",
    "CodAgendamento": "26"
  },
  {
    "UF": "RS",
    "Cidade": "Canguçu",
    "CodAgendamento": "66"
  },
  {
    "UF": "RS",
    "Cidade": "Canoas",
    "CodAgendamento": "19"
  },
  {
    "UF": "RS",
    "Cidade": "Capão da Canoa",
    "CodAgendamento": "20"
  },
  {
    "UF": "RS",
    "Cidade": "Caxias do Sul",
    "CodAgendamento": "22"
  },
  {
    "UF": "RS",
    "Cidade": "Charqueadas",
    "CodAgendamento": "65"
  },
  {
    "UF": "RS",
    "Cidade": "Cidreira",
    "CodAgendamento": "33"
  },
  {
    "UF": "RS",
    "Cidade": "Cruz Alta",
    "CodAgendamento": "29"
  },
  {
    "UF": "RS",
    "Cidade": "Dois Irmãos",
    "CodAgendamento": "35"
  },
  {
    "UF": "RS",
    "Cidade": "Dom Pedrito",
    "CodAgendamento": "34"
  },
  {
    "UF": "RS",
    "Cidade": "Eldorado do Sul",
    "CodAgendamento": "36"
  },
  {
    "UF": "RS",
    "Cidade": "Esteio",
    "CodAgendamento": "38"
  },
  {
    "UF": "RS",
    "Cidade": "Farroupilha",
    "CodAgendamento": "39"
  },
  {
    "UF": "RS",
    "Cidade": "Flores da Cunha",
    "CodAgendamento": "40"
  },
  {
    "UF": "SC",
    "Cidade": "Florianópolis",
    "CodAgendamento": "41"
  },
  {
    "UF": "RS",
    "Cidade": "Garibaldi",
    "CodAgendamento": "43"
  },
  {
    "UF": "SC",
    "Cidade": "Garopaba",
    "CodAgendamento": "44"
  },
  {
    "UF": "RS",
    "Cidade": "Gramado",
    "CodAgendamento": "45"
  },
  {
    "UF": "RS",
    "Cidade": "Gravataí",
    "CodAgendamento": "46"
  },
  {
    "UF": "RS",
    "Cidade": "Guaíba",
    "CodAgendamento": "42"
  },
  {
    "UF": "RS",
    "Cidade": "Ibirubá",
    "CodAgendamento": "70"
  },
  {
    "UF": "RS",
    "Cidade": "Ijuí",
    "CodAgendamento": "47"
  },
  {
    "UF": "RS",
    "Cidade": "Imbé",
    "CodAgendamento": "48"
  },
  {
    "UF": "RS",
    "Cidade": "Itaqui",
    "CodAgendamento": "73"
  },
  {
    "UF": "RS",
    "Cidade": "Ivoti",
    "CodAgendamento": "72"
  },
  {
    "UF": "RS",
    "Cidade": "Jaraguá do Sul",
    "CodAgendamento": "84"
  },
  {
    "UF": "RS",
    "Cidade": "Lagoa Vermelha",
    "CodAgendamento": "63"
  },
  {
    "UF": "RS",
    "Cidade": "Montenegro",
    "CodAgendamento": "69"
  },
  {
    "UF": "RS",
    "Cidade": "Novo Hamburgo",
    "CodAgendamento": "27"
  },
  {
    "UF": "RS",
    "Cidade": "Osório",
    "CodAgendamento": "87"
  },
  {
    "UF": "RS",
    "Cidade": "Passo Fundo",
    "CodAgendamento": "50"
  },
  {
    "UF": "RS",
    "Cidade": "Pelotas",
    "CodAgendamento": "52"
  },
  {
    "UF": "RS",
    "Cidade": "Porto Alegre",
    "CodAgendamento": "30"
  },
  {
    "UF": "RS",
    "Cidade": "Rio Grande",
    "CodAgendamento": "74"
  },
  {
    "UF": "RS",
    "Cidade": "Rio Pardo",
    "CodAgendamento": "88"
  },
  {
    "UF": "RS",
    "Cidade": "Santa Cruz do Sul",
    "CodAgendamento": "83"
  },
  {
    "UF": "RS",
    "Cidade": "Santa Maria",
    "CodAgendamento": "67"
  },
  {
    "UF": "RS",
    "Cidade": "Santa Rosa",
    "CodAgendamento": "57"
  },
  {
    "UF": "RS",
    "Cidade": "Santana do Livramento",
    "CodAgendamento": "49"
  },
  {
    "UF": "RS",
    "Cidade": "Santiago",
    "CodAgendamento": "58"
  },
  {
    "UF": "RS",
    "Cidade": "Santo Ângelo",
    "CodAgendamento": "60"
  },
  {
    "UF": "RS",
    "Cidade": "Santo Antônio da Patrulha",
    "CodAgendamento": "71"
  },
  {
    "UF": "RS",
    "Cidade": "São Borja",
    "CodAgendamento": "89"
  },
  {
    "UF": "RS",
    "Cidade": "São Gabriel",
    "CodAgendamento": "90"
  },
  {
    "UF": "RS",
    "Cidade": "São Lourenço do Sul",
    "CodAgendamento": "54"
  },
  {
    "UF": "RS",
    "Cidade": "São Luiz Gonzaga",
    "CodAgendamento": "59"
  },
  {
    "UF": "RS",
    "Cidade": "São Sebastião do Caí",
    "CodAgendamento": "61"
  },
  {
    "UF": "RS",
    "Cidade": "Sapiranga",
    "CodAgendamento": "55"
  },
  {
    "UF": "RS",
    "Cidade": "Sapucaia do Sul",
    "CodAgendamento": "51"
  },
  {
    "UF": "RS",
    "Cidade": "Soledade",
    "CodAgendamento": "82"
  },
  {
    "UF": "RS",
    "Cidade": "Tapes",
    "CodAgendamento": "86"
  },
  {
    "UF": "RS",
    "Cidade": "Taquara",
    "CodAgendamento": "92"
  },
  {
    "UF": "RS",
    "Cidade": "Torres",
    "CodAgendamento": "93"
  },
  {
    "UF": "RS",
    "Cidade": "Tramandaí",
    "CodAgendamento": "62"
  },
  {
    "UF": "RS",
    "Cidade": "Uruguaiana",
    "CodAgendamento": "28"
  },
  {
    "UF": "RS",
    "Cidade": "Venâncio Aires",
    "CodAgendamento": "68"
  },
  {
    "UF": "RS",
    "Cidade": "Viamão",
    "CodAgendamento": "56"
  },
  {
    "UF": "RS",
    "Cidade": "Xangri-Lá",
    "CodAgendamento": "64"
  },
  {
    "UF": "SC",
    "Cidade": "Blumenau",
    "CodAgendamento": "15"
  },
  {
    "UF": "SC",
    "Cidade": "Brusque",
    "CodAgendamento": "16"
  },
  {
    "UF": "SC",
    "Cidade": "Chapecó",
    "CodAgendamento": "23"
  },
  {
    "UF": "SC",
    "Cidade": "Itajaí",
    "CodAgendamento": "37"
  },
  {
    "UF": "SC",
    "Cidade": "Joinville",
    "CodAgendamento": "76"
  },
  {
    "UF": "SC",
    "Cidade": "Lages",
    "CodAgendamento": "78"
  },
  {
    "UF": "SC",
    "Cidade": "Palhoça",
    "CodAgendamento": "75"
  },
  {
    "UF": "SP",
    "Cidade": "São Paulo",
    "CodAgendamento": "85"
  }
]

// Formata os dados da cidade 
const EstadoCidade = (data) => {

  //Separando cada cidade por estado e criando um novo array
  var cidadePorEstado = {
    RS: [],
    SC: [],
    SP: [],
    PR: []
  }

  for (cidade of data) { //data é conhecido como cidadesAgendamento

    //Variável get Dados da Filial em Cidade e CodAgendamento
    var cidadeOption = {
      text: cidade.Cidade,
      value: cidade.CodAgendamento
    }

    // ! -> negação/inverso. Some(): analisa e retorna true or false. Condição que verifica se já existe a cidade x, existindo, ele não deixa repetir por causa do ! que inverte a função .   
    if (!cidadePorEstado[cidade.UF].some(element => element.value == cidadeOption.value)) {
      (cidadePorEstado[cidade.UF].push(cidadeOption))
    }
  }


  return cidadePorEstado
}

const EscolherEstado = (data) => {

  if (data != "") {
    DesativarDisabled() //Chamando a function 
    const optionListCity = document.querySelector('#optionsCity')
    optionListCity.innerHTML = "" //zera tudo

    let arrCidades = EstadoCidade(cidadesAgendamentos) //Pega as cidades da função EstadoCidade

    arrCidades[data].forEach(option => {
      if (!Object.values(optionListCity).includes(option.value)) {
        optionListCity.add(
          new Option(option.text, option.value)
        )
      }
    })

    //   console.log(arrCidades)
  }
}

const Pesquisar = (produto, categoria) => {

  const SelectCity = document.querySelector('#optionsCity').value

  var parametrosSimplyBook = ""

  if (SelectCity) {
    parametrosSimplyBook += `cidade=${SelectCity}`
  }

  if (produto.hasOwnProperty('idAgendamento')) {
    parametrosSimplyBook += `&produto=${produto.idAgendamento}`
  }

  if (catAgendamento.hasOwnProperty('categoria') && catAgendamento.categoria == 'Vacinas') {
    parametrosSimplyBook += `&categoria=${catAgendamento.categoriaAgendamento}`
  }


  document.querySelector('#simplyBookIframe').src = `https://cdn1.staticpanvel.com.br/cdn_service/landpages/page-clinic-tst/pages/simplybook.html?${parametrosSimplyBook}` //Atraves do id, atribuimos a variavel para o elemento

}





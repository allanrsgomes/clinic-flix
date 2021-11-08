# Panvel Clinic

Repositório para desenvolvimento do conjunto de páginas do Clinic no site da Panvel feitas em HTML, CSS e Javascript. 
Páginas acessíveis em <https://www.panvel.com/panvel/panvelClinic.do>

# Conteúdo

* [Branches](#branches)
* [Desenvolvimento](#desenvolvimento)
* [Homologação](#homologação)
* [Produção](#produção)

<hr>

## Branches

A estrutura de branches do repositório segue a divisão proposta pelo padrão [GitFlow](https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow) onde são divididas branches para correções rápidas,desenvolvimento,features e lançamentos.

Também são usadas [tags](https://www.atlassian.com/br/git/tutorials/inspecting-a-repository/git-tag) nesse repositório, tags são marcações que facilitam organizar as versões e manter uma lista de atualizações/implementações/melhorias do projeto de maneira visual e organizada.

### Main
Branch principal, o objetivo dessa branch é se manter atualizada com a relação de arquivos presente no servidor de produção, sempre que algo for enviado para o servidor da Panvel a main deverá conter essa alteração.

### Hotfix
Branch para correções rápidas, essas correções podem ser bugs ou erros de escrita que precisem ser enviadas em pouco tempo.

### Develop
Essa branch é a branch base que vai se ramificar em branches de funcionalidades, as principais atualizações da main tem que ser enviadas para essa branch também para as novas funcionalidades serem feitas em cima da versão atual do sistema, mas claro que cada caso pode variar caso uma funcionalidade tenha um escopo muito diferente das mudanças feitas na main.

### Feature
Branches de funcionalidades devem ser feitas para cada nova funcionalidade proposta, fazendo com que o aprimoramento das páginas seja feito de forma modular e organizada, evitando conflitos e desorganização na hora de implementar melhorias.
Cada funcionalidade deve ter uma branch com o nome descrevendo de maneira breve a funcionalidade.

### Cuidados
Como os testes devem ser feitos no servidor de teste da Panvel (lojavirtualdsv.panvel.com) e posteriormente para o servidor de produção, segue algumas orientações para facilitar esse processo:
- Ao terminar uma funcionalidade, o primeiro passo é a branch de develop receber o merge com a nova funcionalidade, a partir disso, na branch de develop devem ser adequados os caminhos para testagem da funcionalidade no servidor de teste, logo, os caminhos de redirecionamento devem passar a apontar para /panvel/ com seus links específicos e os assets, scripts e CSS devem apontar para o CDN do servidor de teste.
- Ao validar a funcionalidade no ambiente de teste, deve ser utilizada a branch de release para então adequar a funcionalidade aos caminhos e redirecionamentos do servidor de produção. 
- Após correção dos caminhos e envio da funcionalidade terem ocorrido com sucesso no servidor de produção, a main receberá o merge da release. 

##  Desenvolvimento
Para desenvolver as páginas, alguns detalhes devem ser considerados.

Todas páginas serão integradas como conteúdo no ambiente virtual da Panvel. Isso significa que existe algumas restrições na hora de montar o layout

* Não é permitido usar a tag `<body>`
* O design deve ser montado respeitando a folha de estilos do sistema para não haver risco de ter o CSS novo sobreescrito
* Fontes já inclusas no sistema não podem ser inclusas novamente (ex: Foco)
* Scripts/Bibliotecas já inclusas no sistema não podem ser inclusas novamente (ex: PureCSS)

O link para inclusão da folha de estilos padrão aplicada no clinic é `https://cdn1.staticpanvel.com.br/static/site/ecommerce-app.css`, no final do link costuma ser informado uma versão, essa versão pode diferir do ambiente de testagem (lojavirtualdsv.panvel.com) para o ambiente de produção.

Essa folha de estilos padrão define algumas propriedades base para quando a página for inclusa no ambiente da Panvel. Essas propriedades incluem:
* Margem superior antes do conteúdo
* Estilização padrão de texto
* Algumas variáveis de cores
* Versão do PureCSS a ser utilizada

## Homologação

### Demonstração
Atualmente disponibilizamos o acesso ás páginas desenvolvidas através da hospedagem do Firebase.
Pelas páginas serem desenvolvidas em HTML, CSS e Javascript sem banco de dados, pode ser usado só o serviço de hospedagem.

[Referência sobre a instalação do cliente do Firebase](https://firebase.google.com/docs/cli/)

Na pasta do projeto desenvolvido
```
$ firebase init hosting
$ firebase deploy --only hosting 
```

### Testagem

Para testar as páginas desenvolvidas no ambiente de testes da Panvel, as regras de adequação à produção se aplicam.
Pode-se utilizar os links de redirecionamento apontando para `/panvel/paginaExemplo.do` para já deixar adequado para a produção.

Os links do CDN1 precisam ser revisados pois a pasta onde são armazenados o conteúdo muda do ambiente de testes para a produção.
Ex: 
* Ambiente de testes: `https://cdn1.staticpanvel.com.br/cdn_service/landpages/page-clinic-tst` 
* Ambiente de produção: `https://cdn1.staticpanvel.com.br/cdn_service/landpages/page-clinic`

## Produção

O detalhe mais importante ao encaminhar uma página para o servidor da Panvel é revisar todos os links utilizados nas páginas desenvolvidas.

* Não podem ser utilizados links relativos
* Todos assets (scripts/imagens) devem ser inseridos usando o link do servidor como base `https://cdn1.staticpanvel.com.br/cdn_service/landpages/`
* Todo redirecionamento feito nas páginas desenvolvidas devem ter seus links adequados conforme a tabela de acesso definida no servidor da Panvel

Ex:
| Link de acesso| Arquivo       |
| ------------- |:-------------:| 
| /panvel/panvelClinic.do | index.html |
| /panvel/teste-dengue.do     | pages/teste-dengue.html  |

Quando arquivos CSS e scripts forem atualizados, devem ser atualizados também no ambiente da hospedagem através do reset do cache na Azion, esse processo é feito pelo pessoal interno da Panvel, caso isso não seja feito ao enviar um script/estilo novo o sistema não atualizará o arquivo. 
Isso não precisa ser feito pra arquivos HTML.

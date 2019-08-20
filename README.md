# gobarber-api

Curso de node.js da rocketseat.

## MODULO 1

aula 1
instalação do node
instalar nvm para gerenciar versões do node

aula 2
intalação do yarn

aula 3
um pouco de teoria, o que é node

aula 4
o que é REST

aula 5
criando primeiro projeto node.

aula 6
exemplo de rota de query e param

aula 7
instalando insomominia

aula 8
utilizando nodemon

aula 9
criando exempplo de crud em variavel

aula 10
aplicando middlewares

aula 11
dicas debug

## MODULO 2

aula 1
iniciando o projeto e ensinando como fazer uma arquitetura com responsabilidades separadas preparando para testes.

aula 2
sucrase / substitui o babel para interpretar as novas features do ecmascript

aula 3
docker - conceitos gerais

aula 4
instalando o docker
pesquisar por docker ce
docker postgress e instalar
postvird - interface visual para manipular os dados do postgres

garantir que o docker não vai parar de ser executado:

docker stop database => "nome do docker"
docker start database

docker logs database

criar base de dados gobarber
usr: postgres  
pwd: docker

aula 5
explicando o que é ORM
usar Sequelize
migrations não podem ser alteradas!!

    Regras controller:
        apenas 5 metodos
        não pode chamar outro controller

aula 6
instalando eslint, prettier e editorconfig

aula 7
configurando sequelize

aula 8
utilizando migrations
usar o sequielize-cli para criar migrations
yarn sequelize migration:create --name=create-users

    após configurado rodar o comando para gerar as tabelas:
    yarn sequelize db:migrate

    rodar para desfazer:
    yarn sequelize db:migrate:undo

aula 9
criando model de usuario

aula 10
demonstrando conectando com sequelize

aula 11
demontrando como é inserir dado do usuário

aula 12
ensinando a gerar hash da senha
usando plugin 'bcryptjs'

aula 13
conceito de jwt

aula 14
autenticação jwt
gerar texto aleatorio no www.md5online e colocar como parametro de token
usando lib jsonwebtoken. Exemplo no codigo de como utilizar

aula 15
middleware de autenticação

aula 16
desenvolvimento do update de usuário com validação de senha

aula 17
validando dados de entrada
yarn add yup
lib para ajudar na validação de tipos, tamanhos e formatos das entradas

## MODULO 3

aula 1
fazendo upload de arquivos com multer

aula 2
vinculando avatar ao usuário usando o migration para alteração de tabela e incluindo novo campo de foreignKey.

aula 3
criando listagem de servidores
configurando servidor para servir arquivos estaticos
configurando model para retornar objetos de relacionamentos.
(erro ao usar alias "as" pesquisar para resolver)

aula 4
fazendo migration e mapeando tabela de agendamento.

aula 5
criando controller de appintments com validação se o usuario é um provider.

aula 6
desenvolvimento de regras de negócio
trabalhando com datas usando date-fns@next

aula 7
listando agendamento de usuário

aula 8
aplicando paginação na listagem de agendamentos

aula 9
listando agendamento do prestador e mostrando como fazer tratamento de datas para não cair no timezone

aula 10
criando novo docker para conectar no mongo db com o comando:
doker run --name mongobarber -p 27017:27017 -d -t mongo
dinstalar mongoose no projeto
yarn add mongoose

docker ps para mostrar todos os containers que etão rodando e docker ps -a para mostrar todos

aula 11
configurando mongoose na aplicação para realizar as notificações

baixar o mongodb compass comunity para visualizar os dados do mongo

aula 12
listando notifications por usuário listando do mongoose

aula 13
marcando notificação como lida utilizando re.params

aula 14
criando cancelament do agnedamento

aula 15
configurando lib para envio de email
yrn add nodemailer
configurando mailtrap para teste de envio de e-mail em ambiente dev

aula 16
configurando templates de e-mail
usando template engine para criar templates de e-mail
exemplo: handlebars.js

instalar express-handlebars
instalar nodemailer-express-handlebars

aula 17
colocando envio de e-mail assincrono com filas
usando redis

instalar docker do redis
docker run --name redisbarber -p 6379:6379 -d -t redis:alpine

instalar o bee-queue
yarn add bee-queue

aula 18
tratando falhas no processamento da fila
entrar no github da beequeue para olhar eventos

aula 19
validações de data usando date-fns para horários disponíveis

aula 20
adicionando campos virtuais para exibição mais fácil de horários disponíveis

#!/bin/bash

read -p "Informe o usuário do banco de dados: " DBUSER

read -p "Informe a senha desse usuário do banco de dados: " DBPASS

read -p "Informe o banco de dados a ser utilizado: " DBNAME

URL=https://github.com/Alexandr3Donisete/projeto_individual_primeiro_semestre.git

echo "Clonando o repositório web-data-viz"
git clone $URL

echo "Repositório clonado"
echo "Entrando no diretório criado"
cd projeto_individual_primeiro_semestre
cd anipsi

mysql -u $DBUSER -p$DBPASS < src/database/script-tabelas.sql

echo "Editando o conteúdo do arquivo .env"
cat <<EOF > .env
AMBIENTE_PROCESSO=producao

# Configurações de conexão com o banco de dados
DB_HOST='localhost'
DB_DATABASE='$DBNAME'
DB_USER='$DBUSER'
DB_PASSWORD='$DBPASS'
DB_PORT='3306'

# Configurações do servidor de aplicação
APP_PORT=8080
APP_HOST=localhost
EOF

echo "Listando o conteúdo do arquivo .env"
cat .env

echo "Baixando os modulos do Node"
npm i

echo "Inicializando a aplicação"
npm start

# Desafio - Docker
Este desafio tem como objetivo criar uma lista de pessoas.

## Tecnologias

### Aplicação

Para construir a aplicação eu utilizo o NodeJs para manipular o conteúdo HTTP.
A aplicação roda na porta 3000.

### Proxy

Utilizo o Nginx aponta para porta 80 e externamente para 8080.

### Banco de Dados

Utilizei o banco de dados MySQL rodando na porta 3306.

### Container

- Docker;
- Docker Composer.

## Instalação

Faça o clone do projeto para a pasta desejada usando o comando git clone 

````
git clone https://github.com/ander-f-silva/desafio-docker.git
````

Agora suba o programa com o comando

````
docker-compouse up -d
````

### Testar o resultado

Acessar o browser e digitar enderenço http://localhost:8080/

# Entrega: CRUD (TypeORM + PostgreSQL)
####  Serviço de back-end responsável por gerenciar um CRUD de usuário utilizando TypeORM

## Tabela de usuários criada com o TypeORM com os seguintes dados:

* id - Id da categoria, deve um uuidv4;
* name - Nome do usuário, deve ser uma string;
* email - Email do usuário, deve ser uma string;
* password - Senha do usuário, deve ser uma string;
* age - Idade do usuário, deve ser um número;
* created_at - Data que o usuário foi criado;
* updated_at - Data que o usuário foi atualizado a ultima vez;

## Rotas

|Método	|Endpoint	|Responsabilidade|
| --- | --- |--- |
|POST	|/users	|Criação de usuário|
|GET	|/users	|Lista todos os usuários|
|GET	|/users/:id	|Retorna os dados de um usuário|
|PATCH	|/users/:id	|Atualiza os dados de um usuário|
|DELETE	|/users/:id	|Deleta um usuário do banco|


##
Exemplo de dados passados na criação de um usuário:
```
{
		"name": "ana",
		"email": "ana@email.com",
		"password": "senhaForte123",
		"age": 22
}
```
Resposta: STATUS 201 CREATED
```
{
		"id": "ee0d4bc7-402e-4b85-abe1-e56ba46bc4f9",
		"created_at": "2022-08-20T12:38:18.672Z",
		"updated_at": "2022-08-20T12:38:18.672Z",
		"name": "ana",
		"email": "ana@email.com",
		"age": 22
}
```

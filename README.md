# Front-End de Cadastro e Autenticação de Usuários

Este é o front-end de um sistema de **cadastro e autenticação de usuários** desenvolvido com **React**, **Vite** e **Tailwind CSS**. O sistema se comunica com a API do back-end para realizar o **cadastro**, **login** e **gerenciamento de sessões**. O back-end foi implementado com **Node.js**, **Express**, **MongoDB**, **Bcrypt** e **JWT**.

## 🚀 Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Vite**: Ferramenta de build moderna, rápida e otimizada para projetos **React**.
- **Tailwind CSS**: Framework CSS utilitário para estilizar a aplicação.
- **Axios**: Biblioteca para realizar requisições HTTP para o back-end.
- **React Router**: Biblioteca para gerenciar navegação entre páginas.

## 📚 Funcionalidades

- **Cadastro de Usuário**: Usuário pode se registrar com nome, e-mail e senha.
- **Login e Geração de Token JWT**: O sistema valida as credenciais do usuário e retorna um **token JWT**, armazenado no **localStorage** para manter o usuário autenticado.
- **Listagem de Usuários**: Usuário autenticado pode visualizar a lista de usuários cadastrados, com a exibição feita em uma tabela utilizando o **Tailwind CSS**.
- **Validação do Token JWT**: O sistema verifica o **token JWT** antes de permitir o acesso às páginas protegidas.

## 📦 Instalação e Execução


### 1. Clonar o Repositório

```bash
git clone https://github.com/henriquegoncalvessilva/nodejs-express-jwt-front.git
```
### 2. Instale as dependências
```bash
npm install
```
### 3. Iniciar o Servidor de Desenvolvimento
```bash
npm run dev
```
## 🔧 Como Funciona?
O usuário realiza o cadastro ou login na aplicação.
Os dados são enviados ao back-end, que valida as credenciais e gera um token JWT.
O token JWT é armazenado no localStorage e enviado em todas as requisições subsequentes.
O front-end protege as páginas com autenticação, permitindo o acesso às páginas apenas se o token JWT for válido.

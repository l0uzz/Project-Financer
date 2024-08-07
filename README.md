# Financer Project

## Table of Contents

- [Requisitos](#requisitos)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Entregáveis](#entregáveis)
- [Critérios de Avaliação](#critérios-de-avaliação)

## Requisitos

### 1. Formulário de Entrada

- **Campos:** CPF, UF, Data de Nascimento, Valor do Empréstimo, Valor que Deseja Pagar por Mês.
- **Exemplo:** João, que mora em MG, nasceu em 10/10/1986, quer um empréstimo de R$ 60.000,00 e pretende pagar R$ 15.000,00 por mês. Qual será a projeção de parcelas a pagar?

### 2. Regras de Negócio

- **Valor mínimo da parcela mensal:** 1% do valor do empréstimo desejado.
- **Valor mínimo para empréstimo:** R$ 50.000,00.
- **Taxa de juros mensal por estado:**
  - MG: 1,00%
  - SP: 0,80%
  - RJ: 0,90%
  - ES: 1,11%

### 3. Funcionalidades

- Após a simulação, permitir que o usuário efetive o empréstimo.
- Salvar as informações em banco de dados ou JSON. (Na aplicação em localhost utilizei MySQL e no que foi deployado utilizei PostgreSQL)
- Criar um endpoint na API para consumir os empréstimos efetivados.
- Exibir uma mensagem de sucesso após a efetivação do empréstimo (toast da criação e efetivação do empréstimo).

## Tecnologias Utilizadas

- **Backend:** Node.js, Sequelize, Express, CORS
- **Frontend:** React, Tailwind, Axios, Vite, TypeScript

## Entregáveis

1. **Link para a Aplicação Funcionando:**

   - Front-end: [https://financer-front-end.vercel.app](https://financer-front-end.vercel.app)
   - Back-end: [https://financerbackend.onrender.com](https://financerbackend.onrender.com)

2. **Endpoint para Acessar os Empréstimos Efetivados:**

   - [Endpoint para buscar usuários](https://financerbackend.onrender.com/user-list)
   - [Endpoint para buscar os empréstimos](https://financerbackend.onrender.com/lending-list)

3. **Link do Repositório no GitHub:**

   - [Repositório do Front-end](https://github.com/l0uzz/FinancerFrontEnd) - Utilizado para o deploy na Vercel
   - [Repositório do Back-end](https://github.com/l0uzz/FinancerBackEnd) - Utilizado para o deploy no Render
   - [Repositório do Projeto 100% Funcional em Localhost](https://github.com/l0uzz/Project-Financer)

4. **Tempo Gasto na Execução do Teste:**

   - Não informado.

## Critérios de Avaliação

- Qualidade do código.
- Interpretação da lógica.
- Cuidado e capricho na execução das telas.
- Tempo de execução em relação ao resultado entregue (expectativa de 6 a 9 horas).

---

Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para abrir uma issue no repositório do GitHub. Obrigado por conferir o projeto!

# Proffy Agilizei Bootcamp

# Desafio 03 - Agilizei

### Tecnologias Utilizadas:
* Framework para crição dos testes [cypress](https://www.cypress.io/)
* Biblioteca para gerar informações fakes [faker-br](https://www.npmjs.com/package/faker-br)
#### 1. Clone o projeto

```
git clone https://github.com/pedrobrossmann/proffy-agilizei.git
cd proffy-agilizei
```

#### 2. Instale as dependências para a web e para o server

```
  a. acesse o diretório web: `cd web`
  b. instale as dependências: `npm install`
  c. teste o start da aplicação: `npm start`
  d. se ainda estiver no diretório web, volte para o root com `cd ..`
  e. acesse o diretório server: `cd server`
  f. instale as dependências: `npm install`
  g. teste o start da aplicação: `npm sta
```
#### 3. Execute o cypress com redimencionalmento de desktop
```
cy:run:desktop 
```
#### 4. Execute o cypress com redimencionalmento de tablet
```
cy:run:tablet
```
#### 5. Execute os testes e monitore o resultado no dashboard
```
cy:test:dash
```

# Integração com dashboard do cypress

* Após executar os testes usando "cy:test:dash", voce pode acompanhar os resultados [aqui](https://dashboard.cypress.io/projects/6wovq6/runs/2/overview)


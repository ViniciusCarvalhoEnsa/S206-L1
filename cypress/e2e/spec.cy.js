/// <reference = cypress>

describe('Testes da criacao, registro e login', ()=>{
  it('Teste criação de usuário com sucesso', ()=>{
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login') 
    cy.get('.btn-link').click()
    cy.get('#firstName').type("Hello")
    cy.get('#Text1').type("World")
    cy.get('#username').type("teste blablabla")
    cy.get('#password').type("vailogo")
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should("contain.text", "Registration successful")
  })

  it('Teste criação de usuário com falha', ()=>{
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login') 
    cy.get('.btn-link').click()
    cy.get('#firstName').type("Goodbye")
    cy.get('#Text1').type("World")
    cy.get('#username').type("teste 2")
    cy.get('.btn-primary').should("be.disabled")
  })

  it('Teste de login com sucesso', ()=>{
    let listaInfo = criarUser()
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login') 
    cy.get('#username').type(listaInfo[0])
    cy.get('#password').type(listaInfo[1])
    cy.get('.btn-primary').click()
    cy.get('h1.ng-binding').should("contain.text", listaInfo[0])
  })

  it("Delete do user com sucesso", ()=>{
    let listaInfo = criarUser()
    cy.login(listaInfo[0], listaInfo[1])
    cy.get('.ng-binding > a').click()
    cy.get('.btn')
    cy.login(listaInfo[0], listaInfo[1])
    cy.get('.ng-binding').should("have.text", "Username or password is incorrect")
  })
})

function criarUser(){
  let hora = new Date().getHours().toString()
  let minuto = new Date().getMinutes().toString()
  let segundo = new Date().getSeconds().toString()

  let ID = hora + minuto + segundo + "ID"
  let Senha = hora + minuto + segundo + "Senha"

  let listaInfo = [ID, Senha]

  cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login') 
  cy.get('.btn-link').click()
  cy.get('#firstName').type(ID)
  cy.get('#Text1').type(ID)
  cy.get('#username').type(ID)
  cy.get('#password').type(Senha)
  cy.get('.btn-primary').click()
  cy.get('.ng-binding').should("contain.text", "Registration successful")

  return listaInfo
}
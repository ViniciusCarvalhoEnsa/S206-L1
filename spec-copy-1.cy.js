/// <reference = cypress>

describe('Testes da criacao, registro e login', ()=>{
  it.skip('Teste criação de usuário com sucesso', ()=>{
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login') 
    cy.get('.btn-link').click()
    cy.get('#firstName').type("Hello")
    cy.get('#Text1').type("World")
    cy.get('#username').type("teste blablabla")
    cy.get('#password').type("vailogo")
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should("contain.text", "Registration successful")
  })

  it.skip('Teste criação de usuário com falha', ()=>{
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login') 
    cy.get('.btn-link').click()
    cy.get('#firstName').type("Goodbye")
    cy.get('#Text1').type("World")
    cy.get('#username').type("teste 2")
    cy.get('.btn-primary').should("be.disabled")
  })

  it('Teste criação de usuário com sucesso', ()=>{
    let listaInfo = registroUser()
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login') 
    cy.get('.btn-link').click()
    cy.get('#firstName').type(listaInfo[0])
    cy.get('#Text1').type(listaInfo[0])
    cy.get('#username').type(listaInfo[0])
    cy.get('#password').type(listaInfo[0])
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should("contain.text", "Registration successful")
    cy.get('#username').type(listaInfo[0])
    cy.get('#password').type(listaInfo[0])
    cy.get('.btn-primary').click()
    cy.get('h1.ng-binding').should("contain.text", listaInfo[0])
  })
})

function registroUser(){
  let hora = new Date().getHours().toString()
  let minuto = new Date().getMinutes().toString()
  let segundo = new Date().getSeconds().toString()

  let primeiroNome = hora + minuto + segundo + "primeiroNome"
  let segundoNome = hora + minuto + segundo + "segundoNome"
  let ID = hora + minuto + segundo + "ID"
  let Senha = hora + minuto + segundo + "Senha"

  let listaInfo = [primeiroNome, segundoNome, ID, Senha]

  cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login') 
  cy.get('.btn-link').click()
  cy.get('#firstName').type(primeiroNome)
  cy.get('#Text1').type(segundoNome)
  cy.get('#username').type(ID)
  cy.get('#password').type(Senha)
  cy.get('.btn-primary').click()
  cy.get('.ng-binding').should("contain.text", "Registration successful")

  return listaInfo
}
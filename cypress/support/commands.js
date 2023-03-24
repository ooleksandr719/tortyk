// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//import '@testing-library/cypress/add-commands'

Cypress.Commands.add('setLocalStorage',(key,value)  => {
    cy.window().then((window) => {
        window.localStorage.setItem(key,value)
     })
})

Cypress.Commands.add('getLocalStorage',(key)  => {
  cy.window().then((window) => {
   return window.localStorage.getItem(key)
  })
})


Cypress.Commands.add('login', (username, password) => {
    cy.visit('https://regressionshop.dermpro.com/customer/account/login');
    cy.get('#email').type(username);
    cy.get('#pass').type(password);
    cy.get('#send2').click({force: true});
    cy.url().should('include', '/customer/account');
  });
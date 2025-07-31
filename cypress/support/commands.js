// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// Custom command to check accessibility
Cypress.Commands.add('checkAccessibility', () => {
  cy.injectAxe();
  cy.checkA11y();
});

// Custom command to navigate to projects page
Cypress.Commands.add('navigateToProjects', () => {
  cy.visit('/');
  cy.contains('Projetos').click();
  cy.url().should('include', '/projetos');
});

// Custom command to test contact form
Cypress.Commands.add('testContactForm', () => {
  cy.visit('/');
  cy.contains('Contato').click();
  cy.get('form[name="contato"]').should('be.visible');
  cy.get('input[name="nome"]').type('Teste Usuário');
  cy.get('input[name="email"]').type('teste@exemplo.com');
  cy.get('textarea[name="mensagem"]').type('Esta é uma mensagem de teste');
  cy.get('button[type="submit"]').click();
}); 
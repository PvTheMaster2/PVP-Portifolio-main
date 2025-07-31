describe('Navigation and Accessibility', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should load the homepage successfully', () => {
    cy.title().should('not.be.empty');
    cy.get('body').should('be.visible');
  });

  it('should check accessibility on homepage', () => {
    cy.checkAccessibility();
  });

  it('should navigate to projects page and check accessibility', () => {
    cy.navigateToProjects();
    cy.checkAccessibility();
  });

  it('should have working navigation links', () => {
    // Test main navigation links
    cy.get('nav').should('be.visible');
    cy.get('a[href*="/"]').should('have.length.at.least', 1);
  });

  it('should be responsive on different screen sizes', () => {
    // Test mobile viewport
    cy.viewport(375, 667);
    cy.get('body').should('be.visible');
    
    // Test tablet viewport
    cy.viewport(768, 1024);
    cy.get('body').should('be.visible');
    
    // Test desktop viewport
    cy.viewport(1280, 720);
    cy.get('body').should('be.visible');
  });
}); 
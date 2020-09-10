describe('Angular Home Page', () => {
  it('should start at the home page', () => {
    cy.visit('/');
    cy.url().should('include', '/');
  });

  it('should have a header component', () => {
    cy.shadowGet('se-header').should('exist');
  });

  it('should have a primary colored tabbar', () => {
    cy.get('se-tabbar').should('exist');
    cy.get('.tab-primary').should('exist');
  });
});

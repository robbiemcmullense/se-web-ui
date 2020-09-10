describe('React Dashboard Page', () => {
  it('should start at the home page then navigate to docs', () => {
    cy.visit('/');
    cy.get('a[href="/dashboard"]').click();
    cy.url().should('include', '/dashboard');
  });

  it('should include a list component', () => {
    cy.shadowGet('se-list').should('exist');
  });

  it('should have button displayed', () => {
    cy.shadowGet('se-button').should('contain', 'Open Snackbar');
    cy.shadowGet('se-button').should('contain', 'Primary');
  });

  it('should include a se-form-field component', () => {
    cy.shadowGet('se-form-field').should('exist');
  });
});

describe('React Docs Page', () => {
  it('should start at the home page then navigate to docs', () => {
    cy.visit('/');
    cy.get('a[href="/icons"]').click();
    cy.url().should('include', '/icons');
  });

  it('should have an se-block component with the text "Banner Example" in the header', () => {
    cy.get('se-block').get('se-block-header').should('contain', 'Typography');
  });

  it('should have the text a tree view component', () => {
    cy.get('se-block-header').contains('Tree view');
    cy.get('se-list').should('exist');
  });
});

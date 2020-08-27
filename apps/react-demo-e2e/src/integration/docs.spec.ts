describe('React Docs Page', () => {
  it('should start at the home page then navigate to docs', () => {
    cy.visit('/');
    cy.get('.sub-nav a[href="/docs"]').click();
    cy.url().should('include', '/docs');
  });

  it('should have an se-block component with the text "Banner Example" in the header', () => {
    cy.get('se-block')
      .shadowGet('se-block-header')
      .should('contain', 'Banner Example');
  });

  it('should have a se-banner component', () => {
    cy.shadowGet('se-banner').should('exist');
  });

  it('should have the text "Reliable Through the Storm" as the first visible header in the banner component', () => {
    cy.shadowGet('se-block-header')
      .contains('Reliable Through the Storm')
      .should('be.visible');
    cy.shadowGet('se-block-header')
      .contains('Header 2')
      .should('not.be.visible');
    cy.shadowGet('se-block-header')
      .contains('Header 3')
      .should('not.be.visible');
  });

  it('should have the text "Header 2" as the visible header in the banner component after clicking on the right arrow', () => {
    cy.shadowGet('se-banner')
      .shadowFind('se-icon.next.indicator')
      .shadowClick();
    cy.shadowGet('se-block-header')
      .contains('Reliable Through the Storm')
      .should('not.be.visible');
    cy.shadowGet('se-block-header').contains('Header 2').should('be.visible');
    cy.shadowGet('se-block-header')
      .contains('Header 3')
      .should('not.be.visible');
  });

  it('should trigger a snackbar component when clicking on the open snackbar button', () => {
    cy.shadowGet('se-snackbar').should('not.have.class', 'show-snackbar');
    const snackbarButton = cy.shadowGet('se-button').contains('Open Snackbar');
    snackbarButton.click();
    cy.shadowGet('se-snackbar').should('have.class', 'show-snackbar');
  });

  it('should trigger a dialog component when clicking on the dialog simple button', () => {
    cy.get('se-dialog#simple').should('not.have.class', 'show-dialog');
    const dialogButton = cy
      .shadowGet('se-button')
      .contains('Open Dialog Simple');
    dialogButton.click();
    cy.get('se-dialog#simple').should('have.class', 'show-dialog');
  });

  it('should remove the dialog component from the DOM when clicking the Ok button', () => {
    cy.shadowGet('se-button').contains('OK').shadowClick();
    cy.get('se-dialog#simple').should('not.have.class', 'show-dialog');
  });
});

describe('Angular Banner Page', () => {

  it('should start at the home page', () => {
    cy.visit('/')
    cy.get('se-button[option="login"]').click()
    cy.get('a[href="/banner"]').click()
    cy.url().should('include', '/banner')
  })

  it('should have the text "Reliable Through the Storm" as the first visible header in the banner component', () => {
    cy.shadowGet('se-block-header').contains('Reliable Through the Storm').should('be.visible')
    cy.shadowGet('se-block-header').contains('Header 2').should('not.be.visible')
    cy.shadowGet('se-block-header').contains('Header 3').should('not.be.visible')
  })

  it('should have the text "Header 2" as the visible header in the banner component after clicking on the right arrow', () => {
    cy.shadowGet('se-banner').shadowFind('se-icon.next-indicator').shadowClick()
    cy.shadowGet('se-block-header').contains('Reliable Through the Storm').should('not.be.visible')
    cy.shadowGet('se-block-header').contains('Header 2').should('be.visible')
    cy.shadowGet('se-block-header').contains('Header 3').should('not.be.visible')
  })

  it('should log out of the application when clicking the logout button', () => {
    cy.shadowGet('se-list-item[item="Logout"]').shadowClick()
    cy.url().should('include', '/login')
  })
})
describe('Angular Home Page', () => {

  it('should start at the home page', () => {
    cy.visit('/')
    cy.get('se-button[option="login"]').click()
    cy.url().should('include', '/home')
  })

  it('should have a header component', () => {
    cy.shadowGet('se-header').should('exist')
  })

  it('should have a primary colored tabbar', () => {
    cy.get('se-tabbar').should('exist')
    cy.get('.tab-primary').should('exist')
  })

  it('should have various buttons portraying the different options and colors', () => {
    cy.get('se-button[option="flat"]').should('contain', 'standard flat')
    cy.get('se-button[option="raised"]').should('contain', 'standard raised')
    cy.get('se-button[color="primary"]').should('contain', 'primary')
    cy.get('se-button[color="secondary"]').should('contain', 'secondary')
  })

  it('should have 2 checkboxes, one with option switch and one with option onoff', () => {
    cy.get('se-checkbox[option="switch"]').should('exist')
    cy.get('se-checkbox[option="onoff"]').should('exist')
  })

  it('should trigger a snackbar component when clicking on the show snackbar button', () => {
    const snackbarComponent = cy.get('se-snackbar')
    snackbarComponent.should('not.be.visible')
    const snackbarButton = cy.queryByText('Open Snackbar')
    snackbarButton.should('exist')
    snackbarButton.click()
    snackbarComponent.should('be.visible')
  })

  it('should trigger a dialog component when clicking on the dialog simple button', () => {
    const dialogComponent = cy.get('se-dialog')
    dialogComponent.should('not.be.visible')
    const dialogButton = cy.shadowGet('se-button').contains('Open Dialog')
    dialogButton.should('exist')
    dialogButton.click()
    dialogComponent.should('be.visible')
  })

  it('should remove the dialog component from the DOM when clicking the Ok button', () => {
    cy.shadowGet('se-button').contains('Ok').shadowClick()
    cy.get('se-dialog').should('not.exist')
  })

  it('should log out of the application when clicking the logout button', () => {
    cy.shadowGet('se-list-item[item="Logout"]').shadowClick()
    cy.url().should('include', '/login')
  })
})
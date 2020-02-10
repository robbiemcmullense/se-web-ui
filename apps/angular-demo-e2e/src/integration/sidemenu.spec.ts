describe('Angular Sidemenu Component', () => {

  it('should start at the home page', () => {
    cy.visit('/')
    cy.get('se-button[option="login"]').click()
    cy.url().should('include', '/home')
  })

  it('should have a sidemenu component that is not initially visible', () => {
    cy.shadowGet('se-sidemenu').should('not.be.visible')
  })

  it('should become visible when the menu icon in the header is clicked on', () => {
    cy.shadowGet('se-header').shadowFind('se-icon').shadowClick()
    cy.shadowGet('se-sidemenu').should('be.visible')
  })

  it('should have an se-about component within the sidemenu that is not initially visible', () => {
    cy.shadowGet('se-sidemenu').shadowFind('se-about').should('not.be.visible');  
  })

  it('should trigger an se-about page when clicking on the 1st sidemenu item', () => {
    cy.shadowGet('se-sidemenu').shadowFind('se-list-item').shadowClick()
    cy.shadowGet('se-about').should('be.visible')
  })

  it('should close the sidemenu when the close icon is clicked on', () => {
    cy.shadowGet('se-sidemenu').shadowFind('se-icon').shadowClick()
    cy.shadowGet('se-sidemenu').should('not.be.visible')
  })

  it('should log out of the application when clicking the logout button', () => {
    cy.shadowGet('se-list-item[item="Logout"]').shadowClick()
    cy.url().should('include', '/login')
  })
})
describe('Angular Login', () => {
  it('Visits the Login Page', () => {
    cy.visit('/')
    cy.url().should('include', '/login')
  })

  it('should have two form fields, one for username and one for password, and a login button', () => {
    cy.shadowGet('input#username').should('exist')
    cy.shadowGet('input#password').should('exist')
    cy.shadowGet('se-button[option="login"]').should('exist')
  })

  it('should navigate to the home page when the login button is clicked on', () => {
    cy.get('se-button[option="login"]').click()
    cy.url().should('include', '/home')
  })

  it('should log out of the application when clicking the logout button', () => {
    cy.shadowGet('se-list-item[item="Logout"]').shadowClick()
    cy.url().should('include', '/login')
  })
})
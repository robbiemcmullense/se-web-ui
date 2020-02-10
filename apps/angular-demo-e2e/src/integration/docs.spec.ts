describe('Angular Docs Page', () => {

  it('should start at the home page', () => {
    cy.visit('/')
    cy.get('se-button[option="login"]').click()
    cy.get('a[href="/docs"]').click()
    cy.url().should('include', '/docs')
  })

  it('should have a list component in the docs', () => {
    cy.shadowGet('se-list').should('exist')
  })

  it('should have buttons to add and remove list items', () => {
    cy.shadowGet('se-button').contains('Remove Last List Item').should('exist')
    cy.shadowGet('se-button').contains('Add New List Item').should('exist')
  })

  it('should have a stepper component with 3 stepper items', () => {
    cy.shadowGet('se-stepper').should('exist')
    cy.shadowGet('se-stepper-item').should('have.length', 3)
  })

  it('should have a visible form field associated with the first stepper item, asking to enter your name', () => {
    cy.shadowGet('se-stepper-item:first-child').shadowFind('se-form-field[label="Enter your name:"]').should('exist')
  })

  it('should type "My Name" into the form field input then advance to the 2nd stepper item when clicking the next button', () => {
    cy.shadowGet('se-stepper-item:first-child').find('input').type('My Name')
    cy.shadowGet('se-stepper-item:first-child').find('se-button').contains('Next').click()
    cy.shadowGet('se-stepper-item:nth-child(2)').should('have.class', 'active');
  })

  it('should log out of the application when clicking the logout button', () => {
    cy.shadowGet('se-list-item[item="Logout"]').shadowClick()
    cy.url().should('include', '/login')
  })
})
describe('React Dashboard Page', () => {

  it('should start at the home page then navigate to docs', () => {
    cy.visit('/')
    cy.get('a[href="/dashboard"]').click()
    cy.url().should('include', '/dashboard')
  })

  it('should have an se-block component with the text "List classic with expender" in the header', () => {
    cy.get('se-block').shadowGet('se-block-header').should('contain', 'List classic with expender')
  })

  it('should include a list component', () => {
    cy.shadowGet('se-list').should('exist')
  })

  it('should have 2 button elements, one to remove a list item and one to add a list item', () => {
    cy.shadowGet('se-button').should('contain', 'Remove Last List Item')
    cy.shadowGet('se-button').should('contain', 'Add New List Item')
  })

  it('should include a stepper component', () => {
    cy.shadowGet('se-stepper').should('exist')
  })
})
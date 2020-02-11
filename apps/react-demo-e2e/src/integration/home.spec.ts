describe('React Home Page', () => {

  it('should start at the home page', () => {
    cy.visit('/')
    cy.get('se-app').should('exist')
  })

  it('should have a header component', () => {
    cy.shadowGet('se-header').should('exist')
  })

  it('should have a primary colored tabbar', () => {
    cy.get('se-tabbar').should('exist')
    cy.get('.tab-primary').should('exist')
  })

  it('should have a checkbox component in the home page', () => {
    cy.shadowGet('se-checkbox').should('exist')
  })

  it('should have a div element with "my content" as the text', () => {
    const text = cy.shadowGet('div.mycoolstyle')
    text.should('contain', 'my content')
  })
})
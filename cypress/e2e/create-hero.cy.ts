describe('Create hero', () => {
  beforeEach(() => cy.visit('/'))
  it('should go through the refresh flow', () => {
    cy.intercept('GET', 'http://localhost:4000/api/heroes').as('getHeroes')
    cy.visit('/')
    cy.wait('@getHeroes')
    cy.location('pathname').should('eq', '/heroes')

    cy.getByCy('add-button').click()
    cy.location('pathname').should('eq', '/heroes/add-hero')
    cy.getByCy('hero-detail').should('be.visible')
    cy.getByCy('input-detail-id').should('not.exist')

    cy.getByCy('refresh-button').click()
    cy.location('pathname').should('eq', '/heroes')
    cy.getByCy('hero-list').should('be.visible')
  })

  it('should go through the cancel flow and perform direct navigation', () => {
    cy.visit('/heroes/add-hero')

    cy.getByCy('cancel-button').click()
    cy.location('pathname').should('eq', '/heroes')
    cy.getByCy('hero-list').should('be.visible')
  })
})

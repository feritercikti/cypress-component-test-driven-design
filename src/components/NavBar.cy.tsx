import {BrowserRouter} from 'react-router-dom'
import NavBar from './NavBar'
import '../styles.scss'

const routes = ['heroes', 'villains', 'about']

describe('NavBar', () => {
  it('should', () => {
    cy.mount(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    )

    cy.contains('p', 'Menu')
    cy.getByCy('menu-list').children().should('have.length', 3)

    routes.forEach((route: string) => {
      cy.get(`[href="/${route}"]`)
        .contains(route, {matchCase: false})
        .click()
        .should('have.class', 'active-link')
        .siblings()
        .should('not.have.class', 'active-link')

      cy.url().should('contain', route)
    })
  })
})

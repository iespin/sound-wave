describe('home page navigation', () => {
  it('enters the home page', () => {
    cy.visit('/')
  })
  it ('enters the Discover page', () => {
    cy.visit('/Discover')
  })
  it ('enters the Join page', () => {
    cy.visit('/Join')
  })
})

describe('home page content', () => {
  // it.only('should render the navbar', () => {
  //   cy.visit('/')
  //   cy.get('HeaderNav').should('exist')
  // })
  it('the h1 contains the correct text', () => {
    cy.visit('/')
    cy.get('h1').contains('Feel the Music')
  })
  it('the p contains the correct text', () => {
    cy.visit('/')
    cy.get('p').contains('Stream over 20 thousand songs with one click')
  })
  // it('should render the Join Now Button', () => {
  //   cy.visit('/')
  //   cy.get('JoinNow').should('exist')
  // })
})
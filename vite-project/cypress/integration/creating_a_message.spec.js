/* import cy from 'cypress' */
describe('creating a message', ()=> {
  it('displays the message in the list', ()=> {
    cy.visit('http://localhost:3002')

    cy.get('[data-testid="messageText"]')
    .type('New message')

    cy.get('[data-testid="sendButton"]')
    .click()

    cy.get('[data-testid="messageText"]')
    .should('have.value', '')

    cy.contains('New message')
  })
})
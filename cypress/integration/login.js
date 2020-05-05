describe('login tests', () => {
    it('should redirect to feed after correct password', () => {
        cy.visit('/')
        cy.get('[data-cy="password-input"]').click().type(Cypress.env('PASSWORD'));
        cy.get('[data-cy="login-button"]').click();
        cy.url().should('include', '/feed')

        cy.get('[data-cy="logout-button"]').click();
    })
})
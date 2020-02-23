/** 
 * Custom command for currency search
 * params: country - string
 */
Cypress.Commands.add("search", (country) => {
    cy.get('#country').type(country)
    cy.get('#getCurrency').click()
})
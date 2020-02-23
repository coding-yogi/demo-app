/**
 * Tests for Get Currency Scenarios
 */

context("Get Currency Scenarios", ()=> {
    beforeEach(()=>{
        cy.visit(Cypress.config("baseUrl"))
    });

    /**
     * Test that corresponding currency is returned when a valid country is searched
     */
    it('Assert response for valid country', ()=> {
        var country = 'australia'
        var expectedMessage = 'Currency for australia is Australian Dollar'

        cy.search(country)
        cy.get('#message').should('have.text', expectedMessage)

    })

    /**
     * Test that error is handled properly when getCurrency API returns 404
     */
    it('Assert handling of 404 from get currency api', ()=> { 
        //Stub the response from API
        cy.server()
        cy.route({
            method: 'POST',
            url: '/api/currency/**',
            status: 404,
            response: {}
        })

        //Get currency
        var nonExistingCountry = 'wakanda'
        var expectedMessage = 'Oops country with name ' + nonExistingCountry +  ' not found'

        cy.search(nonExistingCountry)
        cy.get('#message').should('have.text', expectedMessage)
    })
})

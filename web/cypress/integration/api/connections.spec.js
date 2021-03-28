/// <reference types="cypress" />
/// <reference types="@bahmutov/cy-api" />

context('Conections', () => {
    it('GET - Obter total de conexões realizadas', () => {

        cy.api({
            method: 'GET',
            url: `${Cypress.config().apiUrl}/connections`
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.duration).lessThan(10)
            expect(response.duration).lt(10) //lt e apenas uma abreviação de lessThan (Abaixo de)

            expect(response.body)
                .to.have.property('total')
                .to.have.a('number')
                .greaterThan(5)

            expect(response.body.total)
                .an('number')
                .satisfy((totalValue) => { return totalValue >= 5 })

            expect(response.headers)
                .to.have.property('content-type')
                .an('string')
                .eq('application/json; charset=utf-8')
        })
    });
});
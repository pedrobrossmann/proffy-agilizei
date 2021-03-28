/// <reference types="cypress" />

context(`Landing page`, () => {

    beforeEach(() => {
        cy.visit('/')
    
    });
    it('Navegar para cadsatro de aulas', () => {
        cy.get('div a.give-classes').click()
        cy.url().should('contain', 'give-classes')
    });

    it('Navegar para pesquisa de professores', () => {
        cy.get('div a.study').click()
        cy.url().should('contain', 'study')
    });
});


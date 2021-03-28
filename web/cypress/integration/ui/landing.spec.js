/// <reference types="cypress" />

const larguras = [1200, 1090]

larguras.forEach(larguras =>{
    context(`Landing page - Largura = ${larguras}px`, () => {

        beforeEach(() => {
            cy.visit('/')
            cy.viewport(larguras, 600)
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
})

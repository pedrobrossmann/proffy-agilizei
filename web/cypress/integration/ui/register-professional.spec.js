/// <reference types="cypress" />
const faker = require('faker-br')

import Routes from '../../support/routes'

context('Professional', () => {
    before(() => {
        Routes.init()
    });
    // Preparação 
    const professional = {
        name: faker.name.findName(),
        phone: '62988887777',
        bio: 'Texto bio'
    }

    const classroom = {
        cost: '785'
    }
    it('Register sucessfuly', () => {
        cy.visit('/give-classes')
        //Ação

        cy.get('#name').should('be.visible').type(professional.name)
        cy.get('#avatar').type('http://google.com/avatarfake')
        cy.get('#whatsapp').type(professional.phone)
        cy.get('#bio').type(professional.bio)

        cy.get('#subject').select('Matemática')
        cy.get('#cost').type(classroom.cost)

        cy.get('#week_day').select('Terça-feira')
        cy.get('#from').type('14:00')
        cy.get('#to').type('16:00')
        //cy.get('[data-cy="add_new_schedule"]').click() 
        //TODO Aplicação esta gerando erro quando ADD horario. 
        cy.get('[data-cy="btn-register-professional"]').click().then(() => {
            cy.get('@POSTProfessional').then(($el) => {
                console.log($el)
                expect($el.response.statusCode).eq(201)
                expect($el.response.statusMessage).eq("Created")
                expect($el.response.body[0].week_day).eq('2')
                expect($el.response.body[0].from).eq(840)
                expect($el.response.body[0].to).eq(960)
                cy.url().should('eq', Cypress.config().baseUrl)
            })
        })
    });
});
/// <reference types="cypress" />
class Routes {

    nameRoute = {
        postProfessional: 'POSTProfessional',
    }

    init() {
        cy.intercept('POST', '**/classes**').as(this.nameRoute.postProfessional)
    }

}

export default new Routes()
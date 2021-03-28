/// <reference types="cypress" />
/// <reference types="@bahmutov/cy-api" />

context('Classe endpoint', () => {
    it('POST - Cadastrar um novo professor', () => {
        cy.api({
            method: 'POST',
            url: `${Cypress.config().apiUrl}/classes`,
            body: {
                "name": "PEDRO BROSSMANN",
                "avatar": "https://www.google.com/imgres?imgurl=https.png",
                "whatsapp": "62999999999",
                "bio": "bora bora bora",
                "subject": "Português",
                "cost": 689,
                "schedule": [
                    {
                        "week_day": 0,
                        "from": "07:00",
                        "to": "12:00"
                    }
                ]
            }
        }).then((response) =>{

            expect(response.status).to.eq(201)
            expect(response.statusText).to.eq('Created')
            expect(response.duration).lessThan(10)

            expect(response.body[0])
                .to.have.property('class_id')
                .to.have.a('number')

            expect(response.body[0])
                .to.have.property('week_day')
                .to.have.a('number')
                .satisfy((totalWeekDay) => { return totalWeekDay < 7})
              
            expect(response.body[0])
                .to.have.property('from')
                .to.have.a('number') 

            expect(response.body[0])
                .to.have.property('to')
                .to.have.a('number')     
                
          
            expect(response.headers)
                .to.have.property('content-type')
                .an('string')
                .eq('application/json; charset=utf-8')
            
            expect(response.headers)
                .to.have.property('content-length')
                .an('string')    
        })
    });
});
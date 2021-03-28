/// <reference types="cypress" />
import React from 'react'
import Select from '../../src/components/Select'
import { mount } from 'cypress-react-unit-test'


context('input Item', () => {
    it('', () => {
        const baseCss = '/__root/src/assets/styles/global.css'
        const indexCss = '/__root/src/components/Select/styles.css'
        const materia = 'Física'

        mount(
            <Select
            name="subject"
            label="Matéria"
            value={materia}
            onChange={(e) => { setSubject(e.target.value) }}
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Ciências', label: 'Ciências' },
              { value: 'Educação Física', label: 'Educação Física' },
              { value: 'Física', label: 'Física' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'Química', label: 'Química' },
              { value: 'História', label: 'História' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Português', label: 'Português' },
              { value: 'Inglês', label: 'Inglês' },
            ]}
          />    
         ,
         {
            stylesheets: [baseCss, indexCss]
            }   
        )
            
        cy.get('#subject').as('subject')
          
        cy.get('@subject').then((element) =>{
         expect(element.css('background-color')).to.equal('rgb(248, 248, 252)')
         expect(element.css('margin-top')).to.equal('8px')
         expect(element.css('border-color')).to.equal('rgb(230, 230, 240)')
        })
    });
});
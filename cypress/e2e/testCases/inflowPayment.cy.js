
import inflowPayment from "../pageObject/inflowPayment"

describe('Inflow payment', ()=>{
    it('Verify that user can make inflow payment', ()=>{
         cy.visit('https://qa.fgntreasury.gov.ng/')
        
         cy.fixture('example').then((data)=>{

         const ln = new inflowPayment();
         ln.RevenueBtn();
         ln.ContainerBtn();
         ln.ClickBtn();
         ln.setTaxation();
         ln.FormBtn();
         ln.setType();
         ln.nextBtn();
         ln.setPayerNames(data.payerNames)
         ln.setPayerEmail(data.payerEmail)
         ln.setPayerConfirmEmail(data.payerConfirmEmail)
         ln.setPayerPhoneNo(data.payerPhoneNo)
         ln.finalNextBtn();


         // cy.get('[href="/revenue"] > .img-div').click({force: true})
        // cy.get('.fs-8__value-container').click({force: true})
        // cy.get('#react-select-3-option-1').click({force: true})
        // cy.get(':nth-child(2) > .form-control > .no-outline').select('Taxation', {force: true})
        // cy.get('.opacity-75 > .form-control').click({force: true})
        // cy.get(':nth-child(4) > .form-control > .no-outline').type('testing', {force: true})
        // cy.wait(20000)
        // cy.contains('Next').click({force: true})
        // cy.get(':nth-child(1) > .form-control > .no-outline').type('Adeola Testsar', {force: true})
        // cy.get(':nth-child(2) > .form-control > .no-outline').type('mirah@mailinator.com', {force: true})
        // cy.get(':nth-child(3) > .form-control > .no-outline').type('mirah@mailinator.com', {force: true})
        // cy.get(':nth-child(4) > .form-control > .no-outline').type('09026583773', {force: true})
        // cy.contains('Next').click({force: true})
  
    })

})

})


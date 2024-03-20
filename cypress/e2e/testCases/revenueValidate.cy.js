

import revenueValidate from "../pageObject/revenueValidate";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

describe('Revenue Payment Validation', ()=>{
    
    it.only('Verify user can verify GRR Payment validity', ()=>{
        
        cy.visit(Cypress.env('url')+'/auth/login')
        
        cy.fixture('example').then((data)=>{
        
        const ln = new revenueValidate();
        
        ln.setUserName(data.username)
        ln.setPassword(data.password)
        ln.loginBtn();
        ln.dropdownCollection();
        ln.verifyPageBtn();
        ln.verifyHelpText();
        ln.inputGRRField(data.paidGRR)
        ln.checkRecordBtn();
        ln.checkDeliveryStatus();
        ln.checkPaymentStatus();
        ln.getPaymentAmount();
        
        })
        

    })

});
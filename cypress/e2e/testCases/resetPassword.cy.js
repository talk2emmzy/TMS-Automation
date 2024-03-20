import resetPassword from "../pageObject/resetPassword"


describe('Reset Password Module', ()=>{
    it.only('Verify that user can request for password reset email - positive test', ()=>{
       
        cy.visit(Cypress.env('url')+'/auth/login')

        cy.fixture('example').then((data)=>{

            const ln = new resetPassword();
            ln.resetPasswordBtn();
            ln.setEmail(data.email)
            ln.passwordResetBtn();
            ln.setWait();
            ln.verifySuccessMessage();
            ln.verifyPasswordResetMessage();
            ln.closeModal();
            
         })

    })

    it('Verify that user cannot request for password reset email with an invalid email format - negative test', ()=>{
        
        cy.visit(Cypress.env('url')+'/auth/login')

        cy.get('.login-forgot-password-text').click()
        cy.get('.no-outline').type('mariam.com')
        cy.get('.login-text.mt-5 > div').click()
    })


    it('Verify that user cannot request for password reset email with empty field - negative test', ()=>{
        
        cy.visit(Cypress.env('url')+'/auth/login')
        
        cy.get('.login-forgot-password-text').click()
        cy.get('.no-outline').click()
        cy.get('.login-text.mt-5 > div').click()
    })
})
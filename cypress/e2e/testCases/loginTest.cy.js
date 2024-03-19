
import login from "../pageObject/login.js";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

describe('Login Test', ()=>{
    it.only('Verify user can login with valid username and password - positive test', ()=>{
        cy.visit(Cypress.env('url')+'/auth/login')
        
        //cy.visit('https://qa.fgntreasury.gov.ng/auth/login')
        
        cy.fixture('example').then((data)=>{const ln = new login();
        ln.setUserName(data.username)
        ln.setPassword(data.password)
        ln.loginBtn();
        ln.verifySuccessMessage();
        ln.verifyAccountName();
        
        })
        
        // cy.get('.nav-logo')
        // cy.get(':nth-child(1) > .form-control > .no-outline').type('OAGF_ADMINN')
        // cy.get(':nth-child(2) > .form-control > .no-outline').type('Simple@123')
        // cy.get('div.login-text > div').click()
        // cy.get('.Toastify__toast-body > :nth-child(2)').should('contain', 'Your request was successful')
        // cy.get('button > span').should('contain', 'FEDERAL MINISTRY OF YOUTH & SPORTS DEV - HQTRS')
    })

    

    it('Verify user cannot login with invalid username and password - negative test', ()=>{
        cy.visit('https://qa.fgntreasury.gov.ng/auth/login')

        cy.fixture('example').then((data)=>{

        const ln = new login();
        ln.setInvalidUsername(data.invalidUsername)
        ln.setInvalidPassword(data.invalidPassword)
        ln.loginBtn();
        ln.verifyErrorMessage();
        
        })

    //     cy.get('.nav-logo')
    //     cy.get(':nth-child(1) > .form-control > .no-outline').type('tester12')
    //     cy.get(':nth-child(2) > .form-control > .no-outline').type('Cookies25@')
    //     cy.get('div.login-text > div').click()
    //     cy.get('.Toastify__toast-body').should('contain', 'An error occurred: User tester12 was not found in the database')
    })

   

    it('Verify user cannot login with empty fields - negative test', ()=>{
        cy.visit('https://qa.fgntreasury.gov.ng/auth/login')

        // cy.fixtures('example').then((data)=>{
        const ln = new login();
        ln.setEmptyUsername()
        ln.setEmptyPassword()
        ln.loginBtn();
        ln.verifyEmptyUsername();
        ln.verifyEmptyPassword();

        // })

    //     cy.get('.nav-logo')
    //     cy.get(':nth-child(1) > .form-control > .no-outline').click()
    //     cy.get(':nth-child(2) > .form-control > .no-outline').click()
    //     cy.get('div.login-text > div').click()
    //     cy.get(':nth-child(1) > .fv-plugins-message-container > .fv-help-block').should('contain', 'Username is required')
    //     cy.get(':nth-child(2) > .fv-plugins-message-container > .fv-help-block').should('contain', 'Password is required')
    })

})
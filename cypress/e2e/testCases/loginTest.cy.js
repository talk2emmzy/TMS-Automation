
import login from "../pageObject/login.js";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

describe('Login Test', ()=>{
    
    it.only('Verify user can login with valid username and password - positive test', ()=>{
        
        cy.visit(Cypress.env('url')+'/auth/login')
        
        cy.fixture('example').then((data)=>{
        
        const ln = new login();
        
        ln.setUserName(data.username)
        ln.setPassword(data.password)
        ln.loginBtn();
        ln.verifySuccessMessage();
        ln.verifyAccountName();
        
        })

    })

    

    it('Verify user cannot login with invalid username and password - negative test', ()=>{
        cy.visit(Cypress.env('url')+'/auth/login')

        cy.fixture('example').then((data)=>{

        const ln = new login();
        ln.setInvalidUsername(data.invalidUsername)
        ln.setInvalidPassword(data.invalidPassword)
        ln.loginBtn();
        ln.verifyErrorMessage();
        
        })

    })

   

    it('Verify user cannot login with empty fields - negative test', ()=>{
        cy.visit(Cypress.env('url')+'/auth/login')

        cy.fixtures('example').then((data)=>{

        const ln = new login();
        ln.setEmptyUsername()
        ln.setEmptyPassword()
        ln.loginBtn();
        ln.verifyEmptyUsername();
        ln.verifyEmptyPassword();

        })

    })

})
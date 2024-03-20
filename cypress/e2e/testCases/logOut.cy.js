import logout from "../pageObject/logout.js";


Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

describe('Logout', ()=>{
    it('Verify user can logout', ()=>{

        cy.visit(Cypress.env('url')+'/auth/login')
       
        cy.fixture('example').then((data)=>{const ln = new logout();
            ln.setUserName(data.username)
            ln.setPassword(data.password)
            ln.loginBtn();
            ln.verifySuccessMessage();
            cy.wait(5000)
            ln.dropdownBtn();
            ln.logoutBtn();
        
        })

    })

})
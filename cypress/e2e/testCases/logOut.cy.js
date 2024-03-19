import logout from "../pageObject/logout.js";


Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

describe('Logout', ()=>{
    it('Verify user can logout', ()=>{

        cy.visit('https://qa.fgntreasury.gov.ng/auth/login')
       
        cy.fixture('example').then((data)=>{const ln = new logout();
            ln.setUserName(data.username)
            ln.setPassword(data.password)
            ln.loginBtn();
            ln.verifySuccessMessage();
            cy.wait(5000)
            ln.dropdownBtn();
            ln.logoutBtn();
        
        })


        // cy.get('.nav-logo')
        // cy.get(':nth-child(1) > .form-control > .no-outline').type('OAGF_ADMINN')
        // cy.get(':nth-child(2) > .form-control > .no-outline').type('Simple@123')
        // cy.get('div.login-text > div').click()
        // cy.get('.Toastify__toast-body > :nth-child(2)').should('contain', 'Your request was successful')
        // cy.get('.ant-dropdown-trigger').click({force: true})
        // cy.get('.ant-dropdown-menu-title-content > div').click({force: true})
    })
    
  
      
        

    })
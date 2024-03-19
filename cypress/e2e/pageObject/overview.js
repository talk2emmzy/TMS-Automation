class overview
{
    verifyLogo()
    {
        cy.get('.nav-logo')
    }

    setUsername(oagfUsername)
    {
        cy.get(':nth-child(1) > .form-control > .no-outline').type(oagfUsername)
    }

    setPassword(password)
    {
        cy.get(':nth-child(2) > .form-control > .no-outline').type(password)
    }

    loginBtn()
    {
        cy.get('div.login-text > div').click()
    }

    wait()
    {
        cy.wait(5000)
    }

    verifySuccessMessage()
    {
        cy.get('.Toastify__toast-body > :nth-child(2)').should('contain', 'Your request was successful')
    }

    verifyHeading()
    {
        cy.get('.sidebarHeading > button').should('contain', 'OAGF ADMIN')
    }

    wait()
    {
        cy.wait(2000)
    }
}
    
export default overview;
    

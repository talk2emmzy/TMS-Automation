
class logout
{

    setUserName(username)
    {
        cy.get(':nth-child(1) > .form-control > .no-outline').type(username)
    }

    setPassword(password)
    {
        cy.get(':nth-child(2) > .form-control > .no-outline').type(password)
    }

    loginBtn()
    {
        cy.get('div.login-text > div').click()  
    }

    verifySuccessMessage()
    {
        cy.get('.Toastify__toast-body > :nth-child(2)').should('contain', 'Your request was successful')   
    }

    dropdownBtn()
   {
    cy.get('.ant-dropdown-trigger').click({force: true})
   }

   logoutBtn()
   {
    cy.get('.ant-dropdown-menu-title-content > div').click({force: true})
   }

    
}

export default logout;

class login
{

    setUserName(username)
    {
        cy.get(':nth-child(1) > .form-control > .no-outline').type(username)
    }

    setPassword(password)
    {
        cy.get(':nth-child(2) > .form-control > .no-outline').type(password)
    }

    setInvalidUsername(invalidUsername)
    {
        cy.get(':nth-child(1) > .form-control > .no-outline').type(invalidUsername) 
    }

    setInvalidPassword(invalidPassword)
    {
        cy.get(':nth-child(2) > .form-control > .no-outline').type(invalidPassword)
    }

    setEmptyUsername()
    {
        cy.get(':nth-child(1) > .form-control > .no-outline').click()
    
    }

    setEmptyPassword()
    {
        cy.get(':nth-child(2) > .form-control > .no-outline').click()
    }

    loginBtn()
    {
        cy.get('div.login-text > div').click()  
    }

    verifySuccessMessage()
    {
        cy.get('.Toastify__toast-body > :nth-child(2)').should('contain', 'Your request was successful')   
    }

    verifyErrorMessage()
    {
        cy.get('.Toastify__toast-body').should('contain', 'An error occurred: User tester12 was not found in the database')
    }

   
    verifyAccountName()
    {
        cy.get('button > span').should('contain', 'FEDERAL MINISTRY OF YOUTH & SPORTS DEV - HQTRS')
    }

    verifyEmptyUsername()
    {
        cy.get(':nth-child(1) > .fv-plugins-message-container > .fv-help-block').should('contain', 'Username is required')
    }

    verifyEmptyPassword()
    {
        cy.get(':nth-child(2) > .fv-plugins-message-container > .fv-help-block').should('contain', 'Password is required')
    }

    
}

export default login;

class resetPassword
{
    resetPasswordBtn()
    {
        cy.get('.login-forgot-password-text').click()
    }

    setEmail(email)
    {
        cy.get('.no-outline').eq(0).type(email) 
    }
    
    passwordResetBtn()
    {
        cy.contains('Submit').click({force: true})
    }

    setWait()
    {
        cy.wait(5000)
    }

    verifySuccessMessage()
    {
        cy.get('.Toastify__toast-body').should('contain', 'Your request was successful')
    }
    

    verifyPasswordResetMessage()
    {
        cy.get('.modal-text').should('contain', 'A password reset link has been sent to your e-mail. Please click on the link and proceed to change your password')

    }

    
}

export default resetPassword;
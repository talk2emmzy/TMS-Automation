
class revenueValidate
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

    dropdownCollection()
    {
        cy.get(':nth-child(7) > .ant-menu-submenu-title > .ant-menu-title-content').click()
    }

    verifyPageBtn()
    {
        cy.contains('Verify Receipt').click()
    }

    verifyHelpText()
    {
        cy.get('.fv-help-block').should('contain', 'Government Revenue Reference (GRR) is required')
    }

    inputGRRField(GRR)
    {
        cy.get('.no-outline').type(GRR)
    }

    checkRecordBtn()
    {
        cy.get('.indicator-label').click()
    }

    checkDeliveryStatus()
    {
        cy.get('.text-danger').should('contain', 'Not Delivered')
    }

    checkPaymentStatus()
    {
        cy.get(':nth-child(5) > .text-success').should('contain', 'Paid')
    }

    getPaymentAmount()
    {

        cy.get('.mt-3 > .text-dark').invoke('text').then((text) => {
                
                console.log('text');

        })
        
    }

}

export default revenueValidate;
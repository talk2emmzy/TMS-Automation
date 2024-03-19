class outflowPayments
{

    getLogo()
    {
        cy.get('.nav-logo')
    }

    setUsername(username)
    {
        cy.get(':nth-child(1) > .form-control > .no-outline').type(username)
    }

    setinitiatorUsername(initiatorUsername)
    {
        cy.get(':nth-child(1) > .form-control > .no-outline').type(initiatorUsername)
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
        cy.get('.Toastify__toast-body > :nth-child(2)').should('have.text', 'Your request was successful')
    }

    verifyHeading()
    {
        cy.get('.sidebarHeading > button').should('contain', 'FEDERAL MINISTRY OF YOUTH & SPORTS DEV - HQTRS')
    }
    
    reportsBtn()
    {
        cy.contains('Reports').click()
    }
    
    outflowBtn()
    {
        cy.contains('Outflow').click()
    }

    selectorBtn()
    {
        cy.get('[style="min-width: 190px;"] > .ant-select-selector').click({ multiple: true })
    }

//    setOrgName(orgName)
//     {
//         // cy.get('.sidebarHeading > button').should('contain', orgName) 
//         cy.get('.sidebarHeading > button > span').should('ha', orgName)
        
//     } 

    optionsBtn()
    {
        cy.get('.ciSelectOptions > button').click({force: true})
    }

    cursorBtn()
    {
        cy.get('.cursor-pointer > .fs-9').click()
    }
}

export default outflowPayments;
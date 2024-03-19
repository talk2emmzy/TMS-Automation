class inflowPayment
{

RevenueBtn()
{
    cy.get('[href="/revenue"] > .img-div').click({force: true})  
}

ContainerBtn()
{
    cy.get('.fs-8__value-container').click({force: true})
}

ClickBtn()
{
    cy.get('#react-select-3-option-1').click({force: true})
}

setTaxation()
{
    cy.get(':nth-child(2) > .form-control > .no-outline').select('Taxation', {force: true})
}

FormBtn()
{
    cy.get('.opacity-75 > .form-control').click({force: true})
}

setType()
{
    cy.get(':nth-child(4) > .form-control > .no-outline').type('testing', {force: true})
}

nextBtn()
{
    cy.contains('Next').click({force: true})
}

setPayerNames(payerNames)
{
    cy.get(':nth-child(1) > .form-control > .no-outline').type(payerNames, {force: true})
}

setPayerEmail(payerEmail)
{
    cy.get(':nth-child(2) > .form-control > .no-outline').type(payerEmail, {force: true})
}

setPayerConfirmEmail(payerConfirmEmail)
{
    cy.get(':nth-child(3) > .form-control > .no-outline').type(payerConfirmEmail, {force: true})
}

setPayerPhoneNo(payerPhoneNo)
{
    cy.get(':nth-child(4) > .form-control > .no-outline').type(payerPhoneNo, {force: true})
}


finalNextBtn()
{
    cy.contains('Next').click({force: true})
}


}

export default inflowPayment;


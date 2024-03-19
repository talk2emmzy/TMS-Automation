import outflowPayments from "../pageObject/outflowPayment"

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
import 'cypress-file-upload';

describe('Outflow Payment Module', () => {
    it('verify that the user can filter by child organization', () => {
      cy.visit('https://qa.fgntreasury.gov.ng/auth/login');
      
      cy.fixture('example').then((data)=>{

      const ln = new outflowPayments();
      
      ln.getLogo();
      ln.setUsername(data.username)
      ln.setPassword(data.password)
      ln.loginBtn();
      ln.verifySuccessMessage()
      ln.verifyHeading()
      ln.reportsBtn()
      ln.outflowBtn()
      cy.wait(5000)
      ln.selectorBtn()
      cy.wait(5000)
      // ln.setOrgName(data.OrgName)
      ln.optionsBtn()
      ln.cursorBtn

    


      // // Visit your application's page where the action triggering the success modal occurs
      
      // cy.get('.nav-logo')
      // cy.get(':nth-child(1) > .form-control > .no-outline').type('FEDMYSHQ')
      // cy.get(':nth-child(2) > .form-control > .no-outline').type('Simple@123')
      // cy.get('div.login-text > div').click()
      // cy.wait(10000)
      // cy.get('.Toastify__toast-body > :nth-child(2)').should('have.text', 'Your request was successful')
      // cy.get('.sidebarHeading > button').should('contain', 'FEDERAL MINISTRY OF YOUTH & SPORTS DEV - HQTRS')
      // cy.contains('Reports').click()
      // cy.contains('Outflow').click()
      // cy.wait(10000)
      // cy.get('[style="min-width: 190px;"] > .ant-select-selector').click()
      // cy.get("span[title='Organisation Child']").type('NIGERIA FOOTBALL FEDERATION')
      // cy.get('.ciSelectOptions > button').click()
      // cy.wait(10000)
      // cy.get('.cursor-pointer > .fs-9').click()

    });
    });

    it.only('verify that the user can filter by child organization', () => {
      cy.visit('https://qa.fgntreasury.gov.ng/auth/login');


      
      cy.fixture('example').then((data)=>{

      const ln = new outflowPayments();
      //RetailPayment.csv
      ln.getLogo();
      ln.setinitiatorUsername(data.initiatorUsername)
      ln.setPassword(data.password)
      ln.loginBtn();
      ln.verifySuccessMessage()
      cy.contains('Payments').click()
      cy.contains('Retail/Vendor Payments').click()
      cy.contains('Pay multiple beneficiaries').click()
      cy.contains('Proceed').click()
      cy.fixture('RetailPayment.csv').then((fileContent) => {
      cy.get('#uploadArea').attachFile({
          fileContent: fileContent,
          fileName: 'RetailPayment.csv',
          mimeType: 'CSV',
        });
      })
      //cy.get('#uploadArea').click({force:true}) //.attachFile('RetailPayment.csv');
      // ln.verifyHeading()
      // ln.reportsBtn()
      // ln.outflowBtn()
      // ln.selectorBtn()
      // ln.setOrgName()
      // ln.optionsBtn()
      // ln.cursorBtn

    });
    });
  });
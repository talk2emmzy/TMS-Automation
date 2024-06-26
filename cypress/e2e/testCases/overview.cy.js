import overview from "../pageObject/overview.js"

describe('Overview', ()=>{
    beforeEach(function(){
        
        cy.visit(Cypress.env('url')+'/auth/login')
        
        })

    it('Verify that user can view the dashboard', ()=>{
       
        cy.fixture('example').then((data)=>{

        const ln = new overview();

            ln.verifyLogo();
            ln.setUsername(data.oagfUsername)
            ln.setPassword(data.password)
            ln.loginBtn();
            ln.wait();
            ln.verifySuccessMessage();
            ln.verifyHeading();
            ln.wait();
        
        })


    })




    it.skip('View Dashbord', ()=>{
        cy.get('.mainHeader').click()
        cy.get('.role')
        cy.get('.headerUsernameRole > :nth-child(1)').should("contain", "Hi, Emmanuel Okoye")
        cy.get('.headerLogo')
        cy.get('.sidebarHeading > button').should("contain", "OAGF ADMIN")
        cy.get('.opRow3 > :nth-child(1)').should("contain", "Number of Registered MDAs")
        cy.get(':nth-child(1) > :nth-child(3) > button').click()
        cy.wait(20000)
        cy.get('[style="padding-left: 24px; background: rgb(251, 203, 56); border-radius: 4px; gap: 10px; font-family: Poppins; font-style: normal; font-weight: 500; font-size: 14px; color: rgb(6, 27, 1);"] > .ant-menu-title-content > .ps-0').click()
        cy.get('.opRow3 > :nth-child(2)').should("contain", "List of MDAs Services")
        cy.get(':nth-child(2) > :nth-child(3) > button').click()
        cy.wait(10000)
        cy.get('[style="padding-left: 24px; background: rgb(251, 203, 56); border-radius: 4px; gap: 10px; font-family: Poppins; font-style: normal; font-weight: 500; font-size: 14px; color: rgb(6, 27, 1);"] > .ant-menu-title-content > .ps-0').click()
        cy.get('.opRow4 > :nth-child(1)')
        cy.get('.opRow4CardDiv1 > :nth-child(2)').should("contain", "Total Inflow")
        cy.get('.opRow4CardDiv2 > :nth-child(2)').should("contain", "Total Outflow")
        cy.get('.opRow4CardDiv3 > :nth-child(2)').should("contain", "Total Closing Balance")
        cy.get('.opRow4CardDiv4 > :nth-child(2)').should("contain", "Total Opening balance")
        cy.get('.opRow5 > :nth-child(1)').should("contain", "Insights")
        cy.get('.opRow5Card1 > :nth-child(1) > :nth-child(1)').should("contain", "Top 10 performing MDAs by revenue collected")
        cy.get('.opRow5SectorCard > :nth-child(1) > :nth-child(1)').should("contain", "Top 5 performing MDA sectors")
        cy.get('.opRow5RegionCard > :nth-child(1) > :nth-child(1)').should("contain", "Top 5 performing service")
        cy.contains("Requests Awaiting Action")
        cy.get('.actv-fixed')


    }) 
})



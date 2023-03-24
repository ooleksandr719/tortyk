describe('Regressionshoptests2', () => {
    beforeEach(() => {
      cy.fixture('example').then(function(data) {
        this.data = data 
        cy.log('THIS:', this.data)
        })
      })
     beforeEach(() => {
      cy.login('or.pixelmatic.test.2066@getnada.com', 'Ape4clam!')
   })

   it('Checkout',() => {
    cy.visit('https://regressionshop.dermpro.com/checkout')
       cy.request('/rest/regressionshop/V1/checkout/saveInsertedInfo/')
         .should((response) => {
            expect(response.status).to.eq(400)
  }, { failOnStatusCode: false })







    //    .wait(8000)
    //    cy.get('button[data-role="proceed-to-checkout"]').click({force: true})
    //    .wait(25000)

    cy.fixture('checkout.json').then((data) =>{
      const {
      ccnumber,
      expirationdate_mon,
      expirationdate_year,
      CVV,
    } = data.checkout_data
    cy.get('#bluepay_payment_cc_number').type(ccnumber)
    cy.get('#bluepay_payment_expiration').type(expirationdate_mon)
    cy.get('#bluepay_payment_expiration_yr').type(expirationdate_year)
    cy.get('#bluepay_payment_cc_cid').type(CVV)
    
  })
    
  })

})
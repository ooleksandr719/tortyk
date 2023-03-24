describe('Regressionshoptests', () => {
  beforeEach(() => {
    cy.fixture('example').then(function(data) {
      this.data = data 
      cy.log('THIS:', this.data)
      })
    })
   beforeEach(() => {
    cy.login('or.pixelmatic.test.2066@getnada.com', 'Ape4clam!')
 })

it('Check search',() => {
   cy.get('#search').type('Dermablend Loose Setting Powder')
   cy.get('.amsearch-wrapper-content').should('contain','Dermablend Loose Setting Povder')
})






//  it('EGift card',() => {
//     cy.visit('https://regressionshop.dermpro.com/gift-card-004').wait(8000)
//     cy.fixture('egift.json').then((data) =>{
//       const {
//       amount,
//       email,
//       sentfrom,
//       sentto,
//       message,
//     } = data.egift_data
//     cy.get('input.giftcard-design-open-amount').type(amount)
//     cy.get('#email').type(email)
//     cy.get('#from').type(sentfrom)
//     cy.get('#to').type(sentto)
//     cy.get('#delivery-message').type(message)
//     cy.contains('Add to Cart').click({force: true}).wait(10000)
//     cy.url().should('include','/checkout/cart/') 
//     cy.get('button[title="Go to Checkout"]').first().click({force: true})
//       .wait(25000)

  
//   })

//   it('Checkout',() => {
//     cy.visit('https://regressionshop.dermpro.com/checkout/')
//     cy.fixture('checkout.json').then((data) =>{
//       const {
//       ccnumber,
//       expirationdate_mon,
//       expirationdate_year,
//       CVV,
//     } = data.checkout_data
//     cy.get('#bluepay_payment_cc_number').type(ccnumber)
//     cy.get('#bluepay_payment_expiration').type(expirationdate_mon)
//     cy.get('#bluepay_payment_expiration_yr').type(expirationdate_year)
//     cy.get('#bluepay_payment_cc_cid').type(CVV)
    
//   })
    
//   })

//     })
//  })


//  it('Add new address', () => {
//   cy.visit('https://regressionshop.dermpro.com/payment/customer/storedacct/')
//   cy.fixture('newfixtures.json').then((data) => {
//     const {
//       ccnumber,
//       company,
//       phone,
//       address,
//       city,
//       state,
//       zip,
//     } = data.user_data;

//     cy.get('input[name="CC_NUM"]').type(ccnumber)
//     cy.get('select[name="CC_EXPIRES_MONTH"]').select("02 - February")
//     cy.get('select[name="CC_EXPIRES_YEAR"]').select("2024")
//     cy.get('select[name="usefor_subscription"]').select("Yes")
//     cy.get('input[name="company"]').type(company)
//     cy.get('input[name="telephone"]').type(phone)
//     cy.get('input[name="street[]"]').first().type(address)
//     cy.get('input[name="city"]').type(city)
//     cy.get('select[name="region_id"]').select(state)
//     cy.get('input[name="postcode"]').type(zip)
    
//     cy.contains('Submit').click({force:true})
//     cy.contains('Card Added Successfully')
//   });

    // it('Add new address', () => {
    //   cy.visit('https://regressionshop.dermpro.com/customer/address/new/')
    //   cy.contains('Add New Address').click({force: true})
    //   cy.fixture('newfixtures.json').then((data) => {
    //     const {
    //       company,
    //       phone,
    //       address,
    //       city,
    //       state,
    //       zip,
    //     } = data.user_data;

    //     cy.get('input[name="company"]').type(company);
    //     cy.get('input[name="telephone"]').type(phone);
    //     cy.get('input[name="street[]"]').first().type(address);
    //     cy.get('input[name="city"]').type(city);
    //     cy.get('select[name="region_id"]').select(state);
    //     cy.get('input[name="postcode"]').type(zip);
        
    //     cy.contains('Save Address').click({force:true});
    //   });


    // })





 //it('Login with invalid credentials', () => {
  //cy.visit('https://regressionshop.dermpro.com/customer/account/login')
  ///.get('#email')
   // .type('fake@email.com').should('have.value', 'fake@email.com')
   // cy.get('#pass')
    //  .type('fake@email.com').should('have.value', 'fake@email.com')
        // cy.get('#send2')
              //.click({force: true})
                  //cy.contains('You did not sign in correctly - the email or password you entered is incorrect.')
               // })
//it('Login with valid credentials and SIGN OUT', () => {
 // cy.url().should('include','/customer/account') 
 // cy.get('.authorization-link a[title="Sign Out"]').first().click({force: true})
 // cy.contains('You are signed out')

//})
//  it('Verify that subscription product can be added to Shopping Cart', () => {
//    cy.url().should('include','/customer/account') //check that login is successful
//    cy.get('a.level-top[title="Products"]') //go to Products category page
//     .click({force: true})    
//    cy.wait('#cart-totals')
//   cy.contains('Add to Cart').first().click({force: true}) //open first product details page
//   cy.get('#subscription_option').select('Every 2 months') //select subscription option value
//    cy.contains('Add to Cart').click({force: true}) //click on Add to cart button
//    cy.wait('.grand totals')
//   cy.contains('Go to Checkout')//.click({force: true}) //check that product is added to Shopping cart         
// })  
//it('Verify if user can add product to Wishlist ', () => {
 // cy.url().should('include','/customer/account') //check that login is successful
 // cy.get('a.level-top[title="Products"]') //go to Products category page
 //   .click({force: true})    
//   cy.contains('Add to Cart').first().click({force: true}) //open first product details page
//   cy.contains('Add to Wishlist').click({force: true})
//   cy.contains('added to your Wish List')
// })
  // it('Verify if user can remove product from Wishlist ', () => {
  // cy.contains('Go to Wish List').click({force: true})
  // cy.contains('Remove item').first().click({force: true})
  // cy.contains('You have no items in your wish list.')
  // cy.get('li.link.wishlist').first().click({force: true})


  //cy.contains('Add to Cart').first().click({force: true}) //open first product details page
  //cy.contains('Add to Wishlist').click({force: true})
  //cy.contains('added to your Wish List')
})
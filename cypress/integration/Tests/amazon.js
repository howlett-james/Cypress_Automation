describe('Amazon Sign In functionality', () => {    
    it('validate Sign In functionality with valid email and password', () => {
        cy.visit("https://amazon.in");
        cy.title().should('eq','Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in');
        cy.get('#nav-link-accountList-nav-line-1').click();
        cy.get('#ap_email').type("kuttyyokesh1221@gmail.com");
        cy.get('#continue').click();
        cy.get('#ap_password').type("Yokesh@210899");
        cy.get('#signInSubmit').click();
        cy.get('#nav-link-accountList-nav-line-1').should('have.text','Hello, Yokeshwarara');      
    });
    it('validate Sign In functionality with valid Mobile number and password', () => {
        cy.visit("https://amazon.in");
        cy.title().should('eq','Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in');
        cy.get('#nav-link-accountList-nav-line-1').click();
        cy.get('#ap_email').type("8220574137");
        cy.get('#continue').click();
        cy.get('#ap_password').type("Yokesh@210899");
        cy.get('#signInSubmit').click();
        cy.get('#nav-link-accountList-nav-line-1').should('have.text','Hello, Yokeshwarara');      
    });
    it('validate sign in functionality with valid email and invalid password', () => {
        cy.visit('https://amazon.in');
        cy.title().should('eq','Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in');
        cy.get('#nav-link-accountList-nav-line-1').click();
        cy.get('#ap_email').type("kuttyyokesh1221@gmail.com");
        cy.get('#continue').click();
        cy.get('#ap_password').type("Yokesh2899");
        cy.get('#signInSubmit').click();
        cy.get('#auth-warning-message-box').within(($autherrormessagebox) =>{
            cy.get($autherrormessagebox).children().should('have.text',"Important Message!\n      \n        \n          \n            To better protect your account, please re-enter your password and then enter the characters as they are shown in the image below.\n          \n        \n      \n    ");
        })
    });
    it('validate sign in functionality with valid mobile number and invalid password', () => {
        cy.visit('https://amazon.in');
        cy.title().should('eq','Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in');
        cy.get('#nav-link-accountList-nav-line-1').click();
        cy.get('#ap_email').type("8220574137");
        cy.get('#continue').click();
        cy.get('#ap_password').type("Yokesh2899");
        cy.get('#signInSubmit').click();
        cy.get('#auth-error-message-box').within(($autherrormessagebox) =>{
            cy.get($autherrormessagebox).children().should('have.text',"There was a problem\n      \n        \n          \n        \n        \n      \n      \n        \n          \n            Your password is incorrect\n          \n        \n      \n    ");
        })
    });
    it('validate Sign In functionality with invalid email', () => {
        cy.visit("https://amazon.in");
        cy.title().should('eq','Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in');
        cy.get('#nav-link-accountList-nav-line-1').click();
        cy.get('#ap_email').type("kuttyyokesh1221gmail.com");
        cy.get('#continue').click();
        cy.get('#auth-error-message-box').within(($autherrormessagebox) =>{
            cy.get($autherrormessagebox).children().should('have.text',"There was a problem\n      \n        \n          \n        \n        \n      \n      \n        \n          \n            We cannot find an account with that email address\n          \n        \n      \n    ");            
        })
    });
    it('validate Sign In functionality with invalid mobile number', () => {
        cy.visit("https://amazon.in");
        cy.title().should('eq','Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in');
        cy.get('#nav-link-accountList-nav-line-1').click();
        cy.get('#ap_email').type("123456");
        cy.get('#continue').click();
        cy.get('#auth-error-message-box').within(($autherrormessagebox) =>{
            cy.get($autherrormessagebox).children().should('have.text',"Incorrect phone number\n      \n        \n          \n        \n        \n      \n      \n        \n          \n            We cannot find an account with that mobile number\n          \n        \n      \n    ");
        })
    });
});

// HomePage.FillAddressForm(data.fullname,data.newmobilenumber,data.pincode,data.flatno,data.area,data.addresstype);
        /* cy.get(elements.deliveryname).then(($el)=>{
            if(Cypress.dom.isVisible($el)==true){
                HomePage.DeliverToThisAddress();
            }else{
                HomePage.FillAddressForm(data.fullname,data.newmobilenumber,data.pincode,data.flatno,data.area,data.town,data.state,data.addresstype);
            }
        }) */
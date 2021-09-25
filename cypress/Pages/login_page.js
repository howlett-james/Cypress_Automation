import elements from '../fixtures/elements.json'
import data from '../fixtures/data.json'
class LoginPage{ 
    get LaunchURl(){
        cy.visit(elements.URL);
    }
    get navigateToSignPage(){
        cy.get(elements.accountprofile).click();
    }
    get LoginWithValidEmailCredentials(){
        cy.get(elements.email).type(data.email);
        cy.get(elements.continuebtn).click();
        cy.get(elements.password).type(data.password);
        cy.get(elements.signinbtn).click();
        cy.get(elements.accountprofile).should('have.text',data.accountName);
    }
    get LoginWithValidMobileCredentials(){
        cy.get(elements.email).type(data.mobilenumber);
        cy.get(elements.continuebtn).click();
        cy.get(elements.password).type(data.password);
        cy.get(elements.signinbtn).click();
        cy.get(elements.accountprofile).should('have.text',data.accountName);
    }
    get LoginWithValidEmailAndInvalidPassword(){
        cy.get(elements.email).type(data.email);
        cy.get(elements.continuebtn).click();
        cy.get(elements.password).type(data.invalidpassword);
        cy.get(elements.signinbtn).click();
        cy.get(elements.alert).should('have.text',data.warningmsg);
    }
    get LoginWithValidMobilenumberAndInvalidPassword(){
        cy.get(elements.email).type(data.mobilenumber);
        cy.get(elements.continuebtn).click();
        cy.get(elements.password).type(data.invalidpassword);
        cy.get(elements.signinbtn).click();
        cy.get(elements.alert).should('have.text',data.errormsg);
    }
    get LoginWithInvalidEmail(){
        cy.get(elements.email).type(data.invalidemail);
        cy.get(elements.continuebtn).click();
        cy.get(elements.alert).should('have.text',data.errormsg);
    }
    get LoginWithInvalidMobilenumber(){
        cy.get(elements.email).type(data.invalidmobilenumber);
        cy.get(elements.continuebtn).click();
        cy.get(elements.alert).should('have.text',data.phnumerrmsg);
    }
}
export default new LoginPage();
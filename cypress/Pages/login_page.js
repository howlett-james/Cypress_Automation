import elements from '../fixtures/elements.json'
import data from '../fixtures/data.json'
class LoginPage{  
    get LaunchURl(){
        cy.visit(elements.URL);
    }
    get navigateToSignPage(){
        cy.get(elements.accountprofile).click();
    }
    get EnterEmailID(){
        cy.get(elements.email).type(data.email);
    }
    get EnterMobileNumber(){
        cy.get(elements.email).type(data.mobilenumber);
    }
    get EnterInvalidEmail(){
        cy.get(elements.email).type(data.invalidemail);
    }
    get EnterInvalidMobileNumber(){
        cy.get(elements.email).type(data.invalidmobilenumber);
    }
    get EnterInvalidPassword(){
        cy.get(elements.password).type(data.invalidpassword);
    }
    get ClickContinueButton(){
        cy.get(elements.continuebtn).click();
    }
    get EnterPassword(){
        cy.get(elements.password).type(data.password);
    }
    get ClickSignInButton(){
        cy.get(elements.signinbtn).click();
    }
    get VerifyAccountProfile(){
        cy.get(elements.accountprofile).should('have.text',data.accountName)
    }
    get VerifyWarningMessage(){
        cy.get(elements.alert).should('have.text',data.warningmsg);
    }
    get VerifyErrorMessage(){
        cy.get(elements.alert).should('have.text',data.errormsg);
    }
    get VerifyPhoneNumberErrorMessage(){
        cy.get(elements.alert).should('have.text',data.phnumerrmsg);
    }
}
export default new LoginPage();
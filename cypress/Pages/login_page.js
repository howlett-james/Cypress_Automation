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

}
export default new LoginPage();
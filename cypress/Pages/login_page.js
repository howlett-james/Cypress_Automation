import elements from '../fixtures/elements.json'
import data from '../fixtures/data.json'
class LoginPage{
    LaunchURl(){
        cy.visit(elements.URL);
    }
    navigateToSignPage(){
        cy.get(elements.accountprofile).click();
    }
    validateLogin(){
        cy.get(elements.accountprofile).should('have.text',data.accountName);
    }
    enterEmail(email){
        cy.get(elements.email).type(email);
        cy.get(elements.continuebtn).click();
    }
    login(email,password){
        this.enterEmail(email)
        cy.get(elements.password).type(password);
        cy.get(elements.signinbtn).click();   
    }
    validateWarning(){
        cy.get(elements.alert).should('have.text',data.warningmsg);
    }
    validateError(){
        cy.get(elements.alert).should('have.text',data.errormsg);
    }
    validateMobileError(){
        cy.get(elements.alert).should('have.text',data.phnumerrmsg);
    }
}
export default new LoginPage();
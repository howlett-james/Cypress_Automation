import LoginPage from '../../Pages/login_page'
import data from '../../fixtures/data.json'

describe('Amazon login functionality', () => {//test suite
    beforeEach(()=>{
        LoginPage.LaunchURl();
        LoginPage.navigateToSignPage();
    });
    it.only('validate login functionality with valid email & Password', () => {//test case
        LoginPage.login(data.email,data.password);
        LoginPage.validateLogin();
    });
    it('validate login functionality with valid mobile number & Password', () => {
        LoginPage.login(data.mobilenumber,data.password);
        LoginPage.validateLogin();
    });
    it('validate login functionality with valid email & invalid password', () => {
        LoginPage.login(data.email,data.invalidpassword);
        LoginPage.validateWarning();
    });
    it('validate sign in functionality with valid mobile number and invalid password', () => {
        LoginPage.login(data.mobilenumber,data.invalidpassword);
        LoginPage.validateError();
    });
    it('validate sign in functionality with invalid email', () => {
        LoginPage.enterEmail(data.invalidemail);
        LoginPage.validateError();
    });
    it('validate sign in functionality with invalid mobile number', () => {
        LoginPage.enterEmail(data.invalidmobilenumber);
        LoginPage.validateMobileError();
    });
});
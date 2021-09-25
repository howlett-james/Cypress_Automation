import LoginPage from '../../Pages/login_page'

describe('Amazon login functionality', () => {    
    beforeEach(()=>{
        LoginPage.LaunchURl();
        LoginPage.navigateToSignPage();
    })
    it('validate login functionality with valid email & Password', () => {
        LoginPage.LoginWithValidEmailCredentials();
    });
    it('validate login functionality with valid mobile number & Password', () => {
        LoginPage.LoginWithValidMobileCredentials;
    });
    it('validate login functionality with valid email & invalid password', () => {
        LoginPage.LoginWithValidEmailAndInvalidPassword;
    });
    it('validate sign in functionality with valid mobile number and invalid password', () => {
        LoginPage.LoginWithValidMobilenumberAndInvalidPassword
    });
    it('validate sign in functionality with invalid email', () => {
        LoginPage.LoginWithInvalidEmail;
    });
    it('validate sign in functionality with invalid mobile number', () => {
        LoginPage.LoginWithInvalidMobilenumber;
    });
});
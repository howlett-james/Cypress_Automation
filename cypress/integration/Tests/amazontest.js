import LoginPage from '../../Pages/login_page'

describe('Amazon login functionality', () => {    
    beforeEach(()=>{
        LoginPage.LaunchURl;
        LoginPage.navigateToSignPage;
    })
    it('validate login functionality with valid email & Password', () => {
        LoginPage.EnterEmailID;
        LoginPage.ClickContinueButton;
        LoginPage.EnterPassword;
        LoginPage.ClickSignInButton;
        LoginPage.VerifyAccountProfile;
    });
    it('validate login functionality with valid mobile number & Password', () => {
        LoginPage.EnterMobileNumber;
        LoginPage.ClickContinueButton;
        LoginPage.EnterPassword;
        LoginPage.ClickSignInButton;
        LoginPage.VerifyAccountProfile;
    });
    it('validate login functionality with valid email & invalid password', () => {
        LoginPage.EnterEmailID;
        LoginPage.ClickContinueButton;
        LoginPage.EnterInvalidPassword;
        LoginPage.ClickSignInButton;
        LoginPage.VerifyWarningMessage;
    });
    it('validate sign in functionality with valid mobile number and invalid password', () => {
        LoginPage.EnterMobileNumber;
        LoginPage.ClickContinueButton;
        LoginPage.EnterInvalidPassword;
        LoginPage.ClickSignInButton;
        LoginPage.VerifyErrorMessage;
    });
    it('validate sign in functionality with invalid email', () => {
        LoginPage.EnterInvalidEmail;
        LoginPage.ClickContinueButton;
        LoginPage.VerifyErrorMessage;
    });
    it('validate sign in functionality with invalid mobile number', () => {
        LoginPage.EnterInvalidMobileNumber;
        LoginPage.ClickContinueButton
        LoginPage.VerifyPhoneNumberErrorMessage;
    });
});
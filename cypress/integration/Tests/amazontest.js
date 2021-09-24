import LoginPage from '../../Pages/login_page'
describe('Amazon login functionality', () => {
    it('validate login functionality with valid email & Password', () => {
        LoginPage.LaunchURl;
        LoginPage.navigateToSignPage;
        LoginPage.EnterEmailID;
        LoginPage.ClickContinueButton;
        LoginPage.EnterPassword;
        LoginPage.ClickSignInButton;
        LoginPage.VerifyAccountProfile;
    });
    it('validate login functionality with valid mobile number & Password', () => {
        LoginPage.LaunchURl;
        LoginPage.navigateToSignPage;
        LoginPage.EnterMobileNumber;
        LoginPage.ClickContinueButton;
        LoginPage.EnterPassword;
        LoginPage.ClickSignInButton;
        LoginPage.VerifyAccountProfile;
    });
    it('validate login functionality with valid email & invalid password', () => {
        LoginPage.LaunchURl;
        LoginPage.navigateToSignPage;
        LoginPage.EnterEmailID;
        LoginPage.ClickContinueButton;
        LoginPage.EnterInvalidPassword;
        LoginPage.ClickSignInButton;
        LoginPage.VerifyWarningMessage;
    });
    it('validate sign in functionality with valid mobile number and invalid password', () => {
        LoginPage.LaunchURl;
        LoginPage.navigateToSignPage;
        LoginPage.EnterMobileNumber;
        LoginPage.ClickContinueButton;
        LoginPage.EnterInvalidPassword;
        LoginPage.ClickSignInButton;
        LoginPage.VerifyErrorMessage;
    });
    it('validate sign in functionality with invalid email', () => {
        LoginPage.LaunchURl;
        LoginPage.navigateToSignPage;
        LoginPage.EnterInvalidEmail;
        LoginPage.ClickContinueButton;
        LoginPage.VerifyErrorMessage;
    });
    it('validate sign in functionality with invalid mobile number', () => {
        LoginPage.LaunchURl;
        LoginPage.navigateToSignPage;
        LoginPage.EnterInvalidMobileNumber;
        LoginPage.ClickContinueButton
        LoginPage.VerifyPhoneNumberErrorMessage;
    });
    it.only('Valid Login', () => {
        LoginPage.ValidLogin;
    });
});
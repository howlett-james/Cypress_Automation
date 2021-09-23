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
    it.only('validate login functionality with valid mobile number & Password', () => {
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
    });

});
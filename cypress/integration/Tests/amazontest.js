import LoginPage from '../../Pages/login_page'
describe('Amazon login functionality', () => {
    it('login', () => {
        LoginPage.LaunchURl;
        LoginPage.navigateToSignPage
        LoginPage.EnterEmailID;
        LoginPage.ClickContinueButton;
        LoginPage.EnterPassword;
        LoginPage.ClickSignInButton;
        LoginPage.VerifyAccountProfile;
    });
});
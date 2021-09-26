import HomePage from '../../Pages/home_page';
import LoginPage from '../../Pages/login_page'

describe('Amazon Product Search Functionaltiy', () => {
    beforeEach(()=>{
        LoginPage.LaunchURl();
        LoginPage.navigateToSignPage();
        LoginPage.LoginWithValidEmailCredentials();
    });
    it('Search a Product', () => {
        HomePage.SearchProduct();
    });
});
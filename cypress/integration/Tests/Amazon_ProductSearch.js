import HomePage from '../../Pages/home_page';
import LoginPage from '../../Pages/login_page'
import data from '../../fixtures/data.json'

describe('Amazon Product Search Functionaltiy', () => {
    beforeEach(()=>{
        LoginPage.LaunchURl();
        LoginPage.navigateToSignPage();
        LoginPage.login(data.email,data.password);
    });
    it('Search a Product', () => {
        HomePage.SearchProduct(data.productname);
        HomePage.SelectMyProduct();
    });
});
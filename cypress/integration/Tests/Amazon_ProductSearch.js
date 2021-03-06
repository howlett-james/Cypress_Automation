import HomePage from '../../Pages/home_page';
import LoginPage from '../../Pages/login_page'
import data from '../../fixtures/data.json'

describe.skip('Amazon Product Search Functionaltiy', () => {
    beforeEach(()=>{
        LoginPage.LaunchURl();
        LoginPage.navigateToSignPage();
        LoginPage.login(data.email,data.password);
        LoginPage.validateLogin();
    });
    it('Validate Add to Cart a Product functionality', () => {
        HomePage.SearchProduct(data.productname);
        HomePage.SelectMyProduct();
        HomePage.AddtoCart();
        HomePage.ValidateAddToCart();   
    });
    it('Validate Buy Now functionaltiy', () => {
        HomePage.SearchProduct(data.productname);
        HomePage.SelectMyProduct();
        HomePage.BuyNow();
        HomePage.SelectPaymentMethod();
    });
});
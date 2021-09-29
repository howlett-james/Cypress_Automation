import HomePage from '../../Pages/home_page';
import LoginPage from '../../Pages/login_page'
import elements from '../../fixtures/elements.json'
import data from '../../fixtures/data.json'

describe('Amazon Product Search Functionaltiy', () => {
    before(()=>{
        LoginPage.LaunchURl();
        LoginPage.navigateToSignPage();
        LoginPage.login(data.email,data.password);
    });
    it('Validate Search a Product functionality', () => {
        HomePage.SearchProduct(data.productname);
        HomePage.SelectMyProduct();
        cy.get(elements.deliveryname).then(($el)=>{
            if(Cypress.dom.isVisible($el)==true){
                HomePage.DeliverToThisAddress();
            }else{
                HomePage.FillAddressForm(data.fullname,data.newmobilenumber,data.pincode,data.flatno,data.area,data.town,data.state,data.addresstype);
            }
        })
    });
});
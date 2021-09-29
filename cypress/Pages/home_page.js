import elements from '../fixtures/elements.json'
import data from '../fixtures/data.json'
class HomePage{
    SearchProduct(productname){
        cy.get(elements.searchbar).type(productname).type('{enter}')
    }
    SelectMyProduct(){
        cy.get(elements.productselector).invoke('removeAttr','target').click();
    }
    AddtoCart(){
        cy.get(elements.addtocart).click();
    }
    BuyNow(){
        cy.get(elements.buynow).click();
    }
    ValidateAddToCart(){
        cy.get(elements.cart,{timeout:10000}).should('have.text',data.cartmsg);        
    }
    FillAddressForm(name,mobilenumber,pincode,flatno,area,town,state,addresstype){
        cy.get(elements.fullname).type(name);
        cy.get(elements.mobilenumber).type(mobilenumber)
        cy.get(elements.pincode).type(pincode);
        cy.get(elements.flatno).type(flatno);
        cy.get(elements.area).type(area);
        // cy.get(elements.town).type(town);
        // cy.get(elements.state).should('have.t')
        // cy.get(elements.addresstype).select(addresstype);
        cy.get(elements.defaultaddress).check();
        cy.get(elements.addaddress).click();
    }
    DeliverToThisAddress(){
        cy.get(elements.delivertothisaddress).click();
    }
    SelectPaymentMethod(){
        cy.get(elements.cod).click();
    }
}
export default new HomePage();
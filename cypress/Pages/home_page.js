import elements from '../fixtures/elements.json'

class HomePage{
    SearchProduct(productname){
        cy.get(elements.searchbar).type(productname).type('{enter}')
    }
    SelectMyProduct(){
        cy.get(elements.productselector).invoke('removeAttr','target').click();
        cy.get(elements.buynow).click();
    }
    FillAddressForm(name,mobilenumber,pincode,flatno,area,town,state,addresstype){
        cy.get(elements.fullname).type(name);
        cy.get(elements.mobilenumber).type(mobilenumber)
        cy.get(elements.pincode).type(pincode);
        cy.get(elements.flatno).type(flatno);
        cy.get(elements.area).type(area);
        cy.get(elements.town).type(town);
        cy.get(elements.state).select(state);
        cy.get(elements.addresstype).select(addresstype);
    }
    DeliverToThisAddress(){
        cy.get(elements.delivertothisaddress).click();
    }
}
export default new HomePage();
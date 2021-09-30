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
    SelectPaymentMethod(){
        cy.get(elements.cod).check();
        cy.get(elements.continue_div).then(()=>{
            cy.get(elements.continue).click()
        })
    }
}
export default new HomePage();
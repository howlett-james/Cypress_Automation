import elements from '../fixtures/elements.json'

class HomePage{
    SearchProduct(productname){
        cy.get(elements.searchbar).type(productname).type('{enter}')
    }
    SelectMyProduct(){
        cy.get(elements.productselector).invoke('removeAttr','target').click();
    }
}
export default new HomePage();
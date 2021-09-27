import elements from '../fixtures/elements.json'

class HomePage{
    SearchProduct(productname,key){
        cy.get(elements.searchbar).type(productname).type(key)
    }
    SelectProduct(productname){
        cy.get(elements.productselector).then($productname=>{
            cy.get($productname).contains(productname).click()
        })
    }
}
export default new HomePage();
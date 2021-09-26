import elements from '../fixtures/elements.json'
import data from '../fixtures/data.json'

class HomePage{
    SearchProduct(){
        cy.get(elements.searchbar).type(data.productname).type('{enter}');
    }
}
export default new HomePage();
import { Selector } from 'testcafe';

class ProductDetailsPage{
    constructor() {
        //this.addToCartPre = Selector("button.button-2 product-box-add-to-cart-button")
        this.productPrice = Selector("span[id='price-value-4']").withText('$1,800.00')
        this.prductQuantity = Selector('input#product_enteredQuantity_4.qty-input')
        this.addToCart = Selector("button[id='add-to-cart-button-4']")
        this.successMessage = Selector('div.bar-notification.success');
      }
    }
export default new ProductDetailsPage();
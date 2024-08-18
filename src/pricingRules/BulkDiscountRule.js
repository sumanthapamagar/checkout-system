import PricingRule from "./PricingRule.js";

class BulkDiscountRule extends PricingRule {

    constructor({
        productSKU,
        minimum = 0,
        newPrice, 
        description = ""
    }) {
        super();
        this.productSKU = productSKU;
        this.minimum = minimum;
        this.newPrice = newPrice;
        this.description = description;
    }

    /**
     * Applies the "Bulk Price" rule to the given products.
     * Returns the dicount amount if the minimum is reached
     * dicount is the difference between the actual price and the new price
     */
    apply(cart) {
        const productCount = cart.filter(product => product.sku === this.productSKU).length;

        if(productCount === 0 || productCount < this.minimum){
            // product count is less than the minimum required for discount
            return  0
        }

        const productPrice = cart.find(product => product.sku === this.productSKU).price;

        // calculate the discount per product
        const discoutPerProduct = productPrice - this.newPrice;

        // apply discount to all products
        const discountAmount = discoutPerProduct * productCount;

        return  discountAmount
    }
}
export default BulkDiscountRule
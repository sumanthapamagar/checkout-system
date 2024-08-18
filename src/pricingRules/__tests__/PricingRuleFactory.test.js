import BulkDiscountRule from "../BulkDiscountRule.js";
import FreeProductRule from "../FreeProductRule.js";
import PricingRuleFactory from "../PricingRuleFactory.js";
import ThreeForTwoRule from "../ThreeForTwoRule.js";

describe("PricingRuleFactory", () => {
    let pricingRuleFactory;

    beforeEach(() => {
        pricingRuleFactory = new PricingRuleFactory();
    });
    
    // Test case 1: Create ThreeForTwoRule
    test("should create ThreeForTwoRule instance", () => {
        const ruleType = "ThreeForTwoRule";
        const ruleParams = {
            productSKU: "atv",
            description: "Buy 3 Apple TVs for the price of 2",
        };
        const rule = pricingRuleFactory.createPricingRule(ruleType, ruleParams);
        expect(rule).toBeInstanceOf(ThreeForTwoRule);
        expect(rule.productSKU).toBe("atv");
        expect(rule.description).toBe("Buy 3 Apple TVs for the price of 2");
    });

    // Test case 2: Create BulkDiscountRule
    test("should create BulkDiscountRule instance", () => {
        const ruleType = "BulkDiscountRule";
        const ruleParams = {
            productSKU: "ipd",
            minimum: 5,
            newPrice: 499.99,
            description: "Bulk discount for 5 or more Super iPads",
        };
        const rule = pricingRuleFactory.createPricingRule(ruleType, ruleParams);
        expect(rule).toBeInstanceOf(BulkDiscountRule);
        expect(rule.productSKU).toBe("ipd");
        expect(rule.minimum).toBe(5);
        expect(rule.newPrice).toBe(499.99);
        expect(rule.description).toBe("Bulk discount for 5 or more Super iPads");
    });

    // Test case 3: Create FreeProductRule
    test("should create FreeProductRule instance", () => {
        const ruleType = "FreeProductRule";
        const ruleParams = {
            productSKU: "mbp",
            freeProductSKU: "vga",
            description: "Free VGA adapter with every MacBook Pro",
        };
        const rule = pricingRuleFactory.createPricingRule(ruleType, ruleParams);
        expect(rule).toBeInstanceOf(FreeProductRule);
        expect(rule.productSKU).toBe("mbp");
        expect(rule.freeProductSKU).toBe("vga");
        expect(rule.description).toBe("Free VGA adapter with every MacBook Pro");
    });

    // Test case 4: Invalid pricing rule type
    test("should throw an error for invalid pricing rule type", () => {
        const ruleType = "InvalidRuleType";
        const ruleParams = {
            productSKU: "InvalidRule",
            description: "Invalid rule",
        };
        expect(() => {
            pricingRuleFactory.createPricingRule(ruleType, ruleParams);
        }).toThrowError("Invalid pricing rule: InvalidRuleType");
    });
});
# Shopping Cart - Checkout System

This repository contains a JavaScript implementation of a checkout system for a Computer Store. The system handles the purchase of products with special pricing rules and promotions as described below.



## Product Catalogue

The store offers the following products:

| SKU | Name          | Price   |
|-----|---------------|---------|
| ipd | Super iPad    | $549.99 |
| mbp | MacBook Pro   | $1399.99|
| atv | Apple TV      | $109.50 |
| vga | VGA adapter   | $30.00  |

## Promotions

1. **3 for 2 on Apple TVs:** Buy 3 Apple TVs and pay the price of 2.
2. **Bulk Discount on Super iPad:** Price drops to $499.99 each when more than 4 Super iPads are purchased.
3. **Free VGA Adapter with MacBook Pro:** Receive a free VGA adapter with every MacBook Pro purchased.

## Getting Started

Follow these instructions to set up and run the checkout system.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (Node package manager)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/sumanthapamagar/checkout-system
   ```

2. **Navigate to Project Folder:**
    ```sh
    cd checkout-system
    ```

3. **Install Dependedncies:**
    ```sh
    npm install
    ```

### Running the Shopping cart - checkout system: example scenarios

1. **Run the tests to verify your implementation:**
    ```sh
    npm run test
    ```

### Running the Shopping cart - checkout system: custom scenarios

1. **Modify product offers:**
Products are stored statically in src/data/prodcuts.js. Add, edit or remove product arry to modify the products 

2. **Modify Pricing rules:**
Pricing rules are stored statically in src/data/pricatingRules.js. Add, edit or remove product arry to modify the pricing rules here. 

3. **Modify Sacnned Items:**
Open index.js and modify checkout scans between line 11 and line 23

4. **Run the app:**
    ```sh
    npm run start
    ```

## Naming Conventions

To maintain consistency and clarity in the codebase, these naming conventions are applied:


### Variable Names

- **Camel Case for Variables:** 
  - Example: `totalDiscount`, `totalPrice`

### Function Names

- **Camel Case for Functions:** 
  - Example: `total()`, `createPricingRule()`

### Class Names

- **Pascal Case for Classes:** 
  - Example: `Checkout`, `PriceRule`

### File and Directory Names

- **Match File Name with Class Name(PascalCase):** 
  - Example: `PricingRuleFactory.js` for the `PricingRuleFactory` class.
- **Camel Case for Files and Directories:** 
  - Example: `products.js`, `activePricingRules.js`, `pricingRules/`

import { products } from "./data/products.js";
import { pricingRules } from "./data/activePricingRules.js";
import Checkout from "./Checkout.js";

const ipd = products.find((product) => product.sku === "ipd");
const mbp = products.find((product) => product.sku === "mbp");
const atv = products.find((product) => product.sku === "atv");
const vga = products.find((product) => product.sku === "vga");

const checkout = new Checkout(pricingRules);

checkout.scan(ipd);
checkout.scan(ipd);
checkout.scan(ipd);
checkout.scan(ipd);
checkout.scan(ipd);
checkout.scan(mbp);
checkout.scan(atv);
checkout.scan(atv);
checkout.scan(atv);
checkout.scan(atv);
checkout.scan(vga);

const totalAmount = checkout.total();

console.info(`The total price of the scanned items is: ${totalAmount}`);

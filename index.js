import { products } from "./src/data/products.js";
import { pricingRules } from "./src/data/activePricingRules.js";
import Checkout from "./src/Checkout.js";

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

const totalAount = checkout.total();

console.info(totalAount);

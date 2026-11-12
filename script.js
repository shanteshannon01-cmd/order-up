console.log("hello world");

const tags = [
    "vegan", "spicy", "bold"
];

const prices = [4.99, 10, 14, 8];

console.log(tags, prices);

const tagText = document.querySelector("#tags");

tagText.textContent="";

for (let i=0; i < tags.length; i++) {
    tagText.textContent = tagText.textContent + tags[i] + " . ";
}

 let total = 0;

 for (let i =0; i < prices.length; i++){
    total = total + prices[i];
 }

document.querySelector("#total").textContent = "$" + total;

const tax = total * 0.08;
 const totalWithTax = total + tax;

document.querySelector("#tax").textContent= "Tax: $" + tax.toFixed(2);
document.querySelector("#total-with-tax").textContent = "Total with tax: $" + totalWithTax.toFixed(2);

let cheapCount = 0;
for (i =0; i < prices.length; i++){
    if (prices[i]< 10){
        cheapCount= cheapCount + 1;
    }
}
document.querySelector("#cheap").textContent= cheapCount + " items under $10";
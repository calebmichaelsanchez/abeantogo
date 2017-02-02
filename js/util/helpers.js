export function strip(html) {
   let tmp = document.createElement("DIV");
   tmp.innerHTML = html;
   return tmp.textContent || tmp.innerText || "";
}
export function toDollars(x) {
  if (x === 0) { return '0.00' }
  let price = x.toString();
  let dollars = price.slice(0, price.length - 2);
  let cents = price.slice(price.length - 2);
  return `${dollars}.${cents}`
}

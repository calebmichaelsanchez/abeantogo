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

// ------------------------------------
// http://stackoverflow.com/questions/136617/how-do-i-programatically-force-an-onchange-event-on-an-input
// ------------------------------------
export function procEvent(element, eventType) {
  // function to fire event on an element
  var event = new Event(eventType);
  element.dispatchEvent(event);
}

export function getBody(string) {
  let div = document.createElement("div");
  div.innerHTML = string;
  return div.firstChild;
}

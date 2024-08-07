import React from "react";
import { createRoot } from "react-dom/client";
import GetProducts from "../components/GetProducts";

let SubReg = document.getElementById("subscription__regular");
if (SubReg) {
  const subRegPage = createRoot(SubReg);
  subRegPage.render(<GetProducts title="Regular Coffee" category="Subscription" tag="Regular Coffee" starred={false} />);
}

let SubFlavored = document.getElementById("subscription__flavored");
if (SubFlavored) {
  const subFlavoredPage = createRoot(SubFlavored);
  subFlavoredPage.render(<GetProducts title="Flavored Coffee" category="Subscription" tag="Flavored Coffee" starred={false} />);
}

let SubDecaf = document.getElementById("subscription__decaf--regular");
if (SubDecaf) {
  const subDecafPage = createRoot(SubDecaf);
  subDecafPage.render(<GetProducts title="Decaf Coffee" category="Subscription" tag="Decaf Coffee" starred={false} />);
}

let SubDecafFlavored = document.getElementById("subscription__decaf--flavored");
if (SubDecafFlavored) {
  const subDecafFlavoredPage = createRoot(SubDecafFlavored);
  subDecafFlavoredPage.render(<GetProducts title="Flavored Decaf Coffee" category="Subscription" tag="Decaf Flavored" starred={false} />);
}
const updateProductNumber = (product, price, isIncrease) => {
  const productInput = document.getElementById(product + "-number");
  let productNumber = productInput.value;
  if (isIncrease) {
    productNumber = parseInt(productNumber) + 1;
  } else if (productNumber > 0) {
    productNumber = parseInt(productNumber) - 1;
  }
  productInput.value = productNumber;
  //   update case Value total
  const caseTotal = document.getElementById(product + "-total");
  caseTotal.innerText = productNumber * price;
};

// handle phone increase decrease event

document.getElementById("phone-plus").addEventListener("click", () => {
  updateProductNumber("phone", 1219, true);
});

document.getElementById("phone-minus").addEventListener("click", () => {
  updateProductNumber("phone", 1219, false);
});

// case event handler

document.getElementById("case-plus").addEventListener("click", () => {
  updateProductNumber("case", 59, true);
});

document.getElementById("case-minus").addEventListener("click", () => {
  updateProductNumber("case", 59, false);
});

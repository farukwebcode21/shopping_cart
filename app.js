const updateProductNumber = (isIncrease) => {
  const productInput = document.getElementById("case-number");
  let productNumber = productInput.value;
  if (isIncrease) {
    productNumber = parseInt(productNumber) + 1;
  } else if (productNumber > 0) {
    productNumber = parseInt(productNumber) - 1;
  }
  productInput.value = productNumber;
  //   update case Value total
  const caseTotal = document.getElementById("case-total");
  caseTotal.innerText = productNumber * 59;
};

// handle phone increase decrease event

document.getElementById("phone-plus").addEventListener("click", () => {
  console.log("plus click phone");
});

document.getElementById("phone-minus").addEventListener("click", () => {
  console.log("minus click phone");
});

// case event handler

document.getElementById("case-plus").addEventListener("click", () => {
  updateProductNumber(true);
});

document.getElementById("case-minus").addEventListener("click", () => {
  updateProductNumber(false);
});

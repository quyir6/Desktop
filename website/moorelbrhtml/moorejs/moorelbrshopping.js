//These are the different products, update it to add or remove products
const products = [
  {
    image: "/moorelbrhtml/mooreimg/2x4.jpeg",
    title: "Dimensional Lumber 2 x 4",
    basePrice: 4.65,
    lengths: {
      "8ft": {
        Regular: 4.65,
        Treated: 7.76,
      },
      "92 5/8in": {
        Regular: 6.07,
      },
      "104 5/8in": {
        Regular: 6.04,
      },
      "10ft": {
        Regular: 7.28,
      },
      "12ft": {
        Regular: 8.74,
        Treated: 13.35,
      },
      "14ft": {
        Regular: 10.19,
      },
      "16ft": {
        Regular: 11.82,
        Treated: 18.87,
      },
      "20ft": {
        Regular: 17.64,
      },
    },
    treatments: {
      Regular: 0,
      Treated: 0,
    },
  },
  {
    image: "/moorelbrhtml/mooreimg/2x6.webp",
    title: "Dimensional Lumber 2 x 6",
    basePrice: 7.85,
    lengths: {
      "8ft": {
        Regular: 7.85,
        Treated: 9.07,
      },
      "92 5/8in": {
        Regular: 8.12,
        Treated: 9.07,
      },
      "104 5/8in": {
        Regular: 9.61,
      },
      "10ft": {
        Regular: 9.82,
      },
      "12ft": {
        Regular: 11.78,
        Treated: 15.35,
      },
      "14ft": {
        Regular: 13.74,
      },
      "16ft": {
        Regular: 15.95,
        Treated: 19.64,
      },
      "20ft": {
        Regular: 21.78,
      },
    },
    treatments: {
      Regular: 0,
      Treated: 0,
    },
  },
  {
    image: "/moorelbrhtml/mooreimg/2x8.jpeg",
    title: "Dimensional Lumber 2 x 8",
    basePrice: 12.7,
    lengths: {
      "8ft": {
        Regular: 12.7,
        Treated: 14.07,
      },
      "10ft": {
        Regular: 15.88,
      },
      "12ft": {
        Regular: 19.35,
        Treated: 21.56,
      },
      "16ft": {
        Regular: 26.27,
        Treated: 32.83,
      },
      "20ft": {
        Regular: 35.02,
        Treated: 77.37,
      },
    },
  },
  {
    image: "/moorelbrhtml/mooreimg/2x10.jpeg",
    title: "Dimensional Lumber 2 x 10",
    basePrice: 15.94,
    lengths: {
      "8ft": {
        Regular: 15.94,
        Treated: 19.92,
      },
      "10ft": {
        Regular: 19.92,
        Treated: 33.22,
      },
      "12ft": {
        Regular: 23.91,
        Treated: 28.31,
      },
      "14ft": {
        Regular: 27.89,
      },
      "16ft": {
        Regular: 33.95,
        Treated: 44.38,
      },
      "20ft": {
        Regular: 49.84,
      },
    },
  },
  {
    image: "/moorelbrhtml/mooreimg/2x12.jpeg",
    title: "Dimensional Lumber 2 x 12",
    basePrice: 20.16,
    lengths: {
      "8ft": {
        Regular: 20.16,
        Treated: 43.79,
      },
      "10ft": {
        Regular: 25.97,
        Treated: 57.29,
      },
      "12ft": {
        Regular: 31.53,
        Treated: 59.2,
      },
      "14ft": {
        Treated: 79.29,
      },
      "16ft": {
        Regular: 43.27,
        Treated: 76.65,
      },
      "18ft": {
        Regular: 51.04,
      },
      "20ft": {
        Regular: 64.77,
        Treated: 132.0,
      },
    },
  },
  {
    image: "/moorelbrhtml/mooreimg/1x4.jpeg",
    title: "Dimensional Lumber 1 x 4",
    basePrice: 3.13,
    lengths: {
      "8ft": {
        "#3 Grade": 3.13,
        "#2 Grade": 7.03,
        Cedar: 7.9,
      },
      "10ft": {
        "#3 Grade": 3.91,
        "#2 Grade": 8.79,
        Cedar: 9.87,
      },
      "12ft": {
        "#3 Grade": 4.69,
        "#2 Grade": 10.54,
        Cedar: 11.84,
      },
      "14ft": {
        "#3 Grade": 5.48,
        "#2 Grade": 12.3,
        Cedar: 13.82,
      },
      "16ft": {
        "#3 Grade": 7.17,
        "#2 Grade": 14.5,
        Cedar: 15.79,
      },
    },
  },
  {
    image: "/moorelbrhtml/mooreimg/OSB.jpeg",
    title: "Oriented Strand Board (OSB)",
    basePrice: 19.99,
    lengths: {
      "7/16": {
        "Square Edge": 19.99,
      },
      "15/32 (1/2)": {
        "Square Edge": 20.99,
      },
      "19/32 (5/8)": {
        "Square Edge": 26.99,
      },
      "23/32 (3/4)": {
        "Square Edge": 33.99,
        "Tounge & Groove": 33.99,
      },
    },
  },
  {
    image: "/moorelbrhtml/mooreimg/CDX.jpeg",
    title: "CDX Plywood",
    basePrice: 28.65,
    lengths: {
      "3/8": {
        CDX: 28.65,
      },
      "1/2": {
        CDX: 29.12,
        "Treated CDX": 85.37,
      },
      "5/8": {
        CDX: 51.03,
      },
      "3/4": {
        CDX: 47.84,
        "Treated CDX": 101.69,
      },
    },
  },
  {
    image: "/moorelbrhtml/mooreimg/ACX.jpeg",
    title: "ACX Plywood",
    basePrice: 44.56,
    lengths: {
      "1/4": {
        ACX: 44.56,
      },
      "3/8": {
        ACX: 41.56,
      },
      "1/2": {
        ACX: 72.96,
      },
      "5/8": {
        ACX: 75.29,
      },
      "3/4": {
        ACX: 85.29,
      },
    },
  },
];

let productsHTML = "";

products.forEach((product) => {
  let lengthOptions = "";
  for (const length in product.lengths) {
    lengthOptions += `<option value="${length}">${length}</option>`;
  }

  function generateTreatmentOptions(product, selectedLength) {
    const lengthPrices = product.lengths[selectedLength];
    let treatmentOptions = "";

    for (const treatment in lengthPrices) {
      treatmentOptions += `<option value="${treatment}">${treatment}</option>`;
    }

    return treatmentOptions;
  }

  productsHTML += `
    <div class="product-container">
      <div class="product-image-wrap">
        <img src="${product.image}" alt="2 x 4's" class="product-image">
      </div>
      <div class="product-info">
        <h3 class="product-title">${product.title}</h3>
        <h4 class="product-price">$${product.basePrice.toFixed(2)}</h4>
          
        <div class="inline-buttons">
          <div class="dropdown">
            <select class="length-dropdown">
              ${lengthOptions}
            </select>
          </div>
          <div class="dropdown">
            <select class="treatment-dropdown">
              ${generateTreatmentOptions(
                product,
                Object.keys(product.lengths)[0]
              )}
            </select>
          </div>
        </div>
         
        <div class="addtocartwrapper">
          <button class="addtocart">Add To Cart</button>
        </div>
      </div>
    </div>`;
});

document.querySelector(".js-products").innerHTML = productsHTML;

const lengthDropdowns = document.querySelectorAll(".length-dropdown");
const treatmentDropdowns = document.querySelectorAll(".treatment-dropdown");

lengthDropdowns.forEach((dropdown, index) => {
  dropdown.addEventListener("change", function () {
    updateTreatmentOptions(index);
    updatePrice(index);
  });
});

treatmentDropdowns.forEach((dropdown, index) => {
  dropdown.addEventListener("change", function () {
    updatePrice(index);
  });
});

function updateTreatmentOptions(productIndex) {
  const selectedLength = lengthDropdowns[productIndex].value;
  const treatmentDropdown = treatmentDropdowns[productIndex];
  treatmentDropdown.innerHTML = generateTreatmentOptions(
    products[productIndex],
    selectedLength
  );
}

function generateTreatmentOptions(product, selectedLength) {
  const lengthPrices = product.lengths[selectedLength];
  let treatmentOptions = "";

  for (const treatment in lengthPrices) {
    treatmentOptions += `<option value="${treatment}">${treatment}</option>`;
  }

  return treatmentOptions;
}

function updatePrice(productIndex) {
  const selectedLength = lengthDropdowns[productIndex].value;
  const selectedTreatment = treatmentDropdowns[productIndex].value;
  const product = products[productIndex];

  const lengthPrices = product.lengths[selectedLength];
  const price = lengthPrices[selectedTreatment];

  if (price !== undefined) {
    const totalPrice = price.toFixed(2);
    const priceElement =
      document.querySelectorAll(".product-price")[productIndex];
    priceElement.textContent = `$${totalPrice}`;
  } else {
    console.error("No Price Available for selected length and treatment.");
  }
}

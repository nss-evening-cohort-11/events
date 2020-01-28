const pies = [
  {
    name: "Dutch Apple Pie",
    price: 1000,
    isWarm: true,
    isOrganic: true,
    crust: "extra flakey",
    iceCream: "Vanilla Bean",
    isAvailable: true,
    imageUrl: "https://www.cookingclassy.com/wp-content/uploads/2019/11/dutch-apple-pie-4-500x500.jpg",
    drinkPairing: "whiskey",
    instructor: "Zoe"
  },
  {
    name: "Regular Apple Pie",
    price: 5000,
    isWarm: true,
    isOrganic: true,
    crust: "under baked",
    iceCream: "Vegan chocolate",
    isAvailable: false,
    imageUrl: "https://thumbs.dreamstime.com/z/apple-pie-caramel-chocolate-ice-cream-9465176.jpg",
    drinkPairing: "All Wines",
    instructor: "Mary"
  },
  {
    name: "Pizza Pie",
    price: 2.5,
    isWarm: true,
    isOrganic: false,
    crust: "yeah!",
    iceCream: "nope",
    isAvailable: true,
    imageUrl: "https://www.meals.com/imagesrecipes/144032lrg.jpg",
    drinkPairing: "High Life",
    instructor: "Luke"
  },
  {
    name: "Berry Pie",
    price: 1,
    isWarm: false,
    isOrganic: false,
    crust: "Oreo",
    iceCream: "Peanut Butter",
    isAvailable: true,
    imageUrl: "",
    drinkPairing: "Water",
    instructor: "Zoe"
  },
  {
    name: "Chocolate",
    price: 1,
    isWarm: false,
    isOrganic: true,
    crust: "graham",
    iceCream: "Mint",
    isAvailable: true,
    imageUrl: "https://www.kingarthurflour.com/sites/default/files/styles/featured_image/public/recipe_legacy/4105-3-large.jpg?itok=tYDq8G4b",
    drinkPairing: "Gin",
    instructor: "Mary"
  },
  {
    name: "Pi",
    price: 3.14,
    isWarm: false,
    isOrganic: true,
    crust: "Crumb",
    iceCream: "Moose Tracks",
    isAvailable: true,
    imageUrl: "https://live.staticflickr.com/1255/5110009533_3e505c7dca_b.jpg",
    drinkPairing: "Milk",
    instructor: "Luke"
  },
  {
    name: "Pumpkin",
    price: 300,
    isWarm: false,
    isOrganic: true,
    crust: "Regular",
    iceCream: "Pumpkin",
    isAvailable: true,
    imageUrl: "https://www.skinnytaste.com/wp-content/uploads/2015/10/PumpkinPie.jpg",
    drinkPairing: "Oil",
    instructor: "Greg"
  },
  {
    name: "Pecan",
    price: 3,
    isWarm: true,
    isOrganic: false,
    crust: "Filo",
    iceCream: "Melted Chocolate",
    isAvailable: false,
    imageUrl: "https://cookiesandcups.com/wp-content/uploads/2018/10/pecanpie-3.jpg",
    drinkPairing: "Almond Milk",
    instructor: "Greg"
  }
];

// Make printToDom
const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

// 3 cards to a row
// nice big images
// display all information in the pie objects
const pieBuilder = (monkeybuttArray) => {
  // define domString
  let domString = '';
  // loop over pies array
  for(let i = 0; i < monkeybuttArray.length; i++){
    // add to domString
    domString += '<div class="card">';
    domString += `<h2>${monkeybuttArray[i].name}</h2>`;
    domString += `<img src=${monkeybuttArray[i].imageUrl} />`;
    domString += `<p>Ice Cream Flavor: ${monkeybuttArray[i].iceCream}</p>`;
    domString += '</div>';
  }
  // call printToDom
  printToDom('pie-place', domString);
};

const findMyPies = (e) => {
  const buttonId = e.target.id;
  const myPies = [];
  for(let i = 0; i < pies.length; i++){
    if( pies[i].instructor === buttonId ) {
      myPies.push(pies[i]);
    }
  }
  pieBuilder(myPies);
};

pieBuilder(pies);
document.getElementById('Zoe').addEventListener('click', findMyPies);
document.getElementById('Mary').addEventListener('click', findMyPies);
document.getElementById('Luke').addEventListener('click', findMyPies);
document.getElementById('Greg').addEventListener('click', findMyPies);
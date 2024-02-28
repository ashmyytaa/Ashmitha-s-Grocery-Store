
//Category
function Category(id, name, description) {
    this.categoryId = id;
    this.categoryName = names;
    this.categoryDesc = description;
  }

//Item
 function Item (idd, title, descriptionn, brand, unit, quantity, make, thumbnail, category){
     this.itemId = idd;
     this.itemTitle = title;
     this.itemDesc = descriptionn;
     this.itemBrand = brand;
     this.itemUnit = unit;
     this.itemQuantity = quantity;
     this.itemMake = make;
     this.itemThumbnail = thumbnail;
     this.itemCategory = category;
 }



//Arrays of category
const categories = [];
//Arrays of items
const catalog =[];
//Arrays of item for shopping cart
const cart = [];


//Functions
function initializeCategories(){

 const fruits = new Category(111,"Fruits", "red");
 const vegetable = new Category(222,"Vegetable", "yellow");
 const meat = new Category(333,"Meat", "pink");
 const dairy = new Category(444,"Dairy", " purple");
 const wholeGrain = new Category(555,"Whole Grains", "blue");
 const drink = new Category(666,"Drinks", "dark purple");
 const sweets = new Category(777,"Sweets", "orange");
 const seafood = new Category(888,"Seafood", "brown");
 const condiments = new Category(999,"Condiments", "magenta" )


 //adding to categories array
categories [0]= fruits;
categories [1]= vegetable;
categories [2]= meat;
categories [3]= dairy;
categories [4]= wholeGrain;
categories [5]= drink;
categories [6]= sweets;
categories [7]= seafood;
categories [8] = condiments;

}

function initialzeItems(){
const apple = new Item (001, "Apple", "small", "Costco", 5, 100, "Canada", "", fruits);
const milk = new Item (002, "Milk", "liquid", "Walmart", 3, 100, "France", "", dairy);
const rice = new Item (003, "Rice", "grains", "Costco", 2, 100, "Mexico", "", wholeGrains);
const cake = new Item (004, "Cake", "fluffy", "Costco", 2, 100, "Italy", "", sweets);
const lobster = new Item (005, "Lobster", "big", "Maxi", 5, 100, "Japan", "", seafood);
const water = new Item (006, "Water", "liquid", "IGA", 8, 100, "Florida", "", drink);
const carrot = new Item (007, "Carrot", "long", "Super C", 4, 100, "Canada", "", vegetable);
const shrimp = new Item (080,  "Shrimp", "small", "Maxi", 50, 100, "India", "", seafood);
const bread = new Item (090, "Bread", "flat", "Walmart", 7, 100, "Nigeria", "", wholeGrains);
const cucumber = new Item (010, "Cucumber", "big", "Maxi", 1, 100, "Canada", "", vegetable);
const celery = new Item (011, "Celery", "long", "IGA", 90, 100, "Canada", "", vegetable);
const pie = new Item (012, "Pie", "round", "Adonis", 8, 100, "Spain", "", sweets);
const chicken = new Item (013, "Chicken", "small", "Super C", 30, 100, "England", "", meat);
const strawberry = new Item (014, "Strawberry", "pink", "Canadawide", 75, 100, "Jamaica", "", fruits);
const coffee = new Item (015, "Coffee", "brown", "Tim Hortons", 8, 100, "Canada", "", drink);
const lamb = new Item (016, "Lamb", "grounded", "Maxi", 4, 100, "Portugal", "", meat);
const beef = new Item (017, "Beef", "big", "Super C", 70, 100, "Thailand", "", meat);
const tomato = new Item (800, "Tomato", "circle", "IGA", 5, 100, "Lebanon", "", vegetable);
const iceCream = new Item (900, "Ice Cream", "sugary", "Adonis", 6, 100, "Germany", "", sweets);
const mango = new Item (020, "Manog", "round", "Canadawide", 3, 100, "Sri Lanka", "", fruits);

catalog [0]= apple;
catalog [1]= milk;
catalog [2]= rice;
catalog [3]= cake;
catalog [4]= lobster;
catalog [5]= water;
catalog [6]= carrot;
catalog [7]= shrimp;
catalog [8]= bread;
catalog [9]= cucumber;
catalog [10]= celery;
catalog [11]= pie;
catalog [12]= chicken;
catalog [13]= strawberry;
catalog [14]= coffee;
catalog [15]= lamb;
catalog [16]= beef;
catalog [17]= tomato;
catalog [18]= iceCream;
catalog [19]= mango;
}

function setUpCart () {

}

function showStatusMessage(){

}

function showListOfItems(){

}

function viewCart(){

}

function findItemById(itemId){

}

function showItemDetails(itemId){

}

function addToCart(){

}

function removeFromCart(){

}

function searchByKeyword(searchKeyword){

}
 
function searchByKeyword(){
  let searchBar = document.getElementById("carSearchBar");
  const keyword = searchBar.value;
  if (keyword){
      let completedSearch = findShoeWithProperty(keyword, "category") || findShoeWithProperty(keyword, "description") || findShoeWithProperty(keyword, "title");
      if (!completedSearch){
          showStatusMessage("alert alert-info", `There are no items with a category, name or description matching \"${keyword}\".`);
          showListOfItems();
      }
  }
  else{
      viewArrayAsTable(catalog);
  }
  searchBar.value = "";
}





//to search smtg in keyboard
{ String } keyword 

function searchByKeyword(keyword) {
   keyword = document.getElementById("textbox").value;

   document.getElementById("itemsCards").innerHTML = "";
   let itemDetails = "";

   itemDetails += 
   `<table class="table">
   <thead class="thead-dark">
       <tr>
           <th>Items Id</th>
           <th>Item Title</th>
           <th>Price</th>
           <th>Make</th>
           <th>Image</th>
           <th>Category</th>
           <th></th>
           <th></th>
       </tr>
   </thead>
   <tbody>`
       for (var i = 0; i < catalog.length; i++) {
       if (keyword === catalog[i].itemTitle || keyword === catalog[i].itemDetails ||
            keyword === catalog[i].brand || keyword === catalog[i].make || 
            keyword === catalog[i].category.catName || keyword === catalog[i].category.catDesc) {
               itemDetails += `<tr>
               <td>${catalog[i].itemId}</td>
               <td>${catalog[i].itemTitle}</td>
               <td>${catalog[i].unitPrice}</td>
               <td>${catalog[i].make}</td>
               <td><img src="${catalog[i].thumbnail}" width="30%" height="30%"></td>
               <td>${catalog[i].category.catName}</td>
               <td><button class="btn btn-success" onclick="addToCart(${catalog[i].itemId}); viewCart()"> Add to Cart </button></td>
               <td><button class="btn btn-dark" onclick="showItemDetails(${catalog[i].itemId})"> Details </button></td>
               </tr>`
           }
   }
   `</tbody>
   </table>`;
   document.getElementById("itemsCards").innerHTML = itemDetails;
}


//add item to cart
function addToCart(itemId) {
    if (itemId < catalog.length) {
        cart.push(catalog[itemId]);
        showStatusMessage("alert-success", "Successfully added item to cart");
    } else {
        console.log("somehow here we are, an item that doesn't exist in the catalog is somehow added?????????????????");
        showStatusMessage("alert-danger", "Somehow you tried to add an item that doesn't exist so congrats");
    }
}



//form exeption handling
function validateForm() {
    
}

function changeLabelColor() {

}

function resetLabelColor() {

}

function showErrors() {

}

function showSuccess() {

}
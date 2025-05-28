// getting the products which returns a NodeList of all item with that class and it contents.
const productList = document.querySelectorAll(".product");
// globally accessing the total element
const total = document.querySelector(".total");

// converting the total to a number after removing non numeric characters eg ($), to ensure arithmetic operations.
let totalAmount = Number(total.innerHTML.replace(/[^0-9.]/g, ''));
console.log(totalAmount);

console.log(productList);

// using the forEach array method to access each element of the returned NodeList.
productList.forEach((product) => {
    // accessing each element of the product to ensure independent behaviour of the click events for each product.
    const increaseBtn = product.querySelector(".fa-plus-circle");
    const reduceBtn = product.querySelector(".fa-minus-circle");
    const quantity = product.querySelector(".quantity");
    const unitPrice = product.querySelector(".unit-price");
    const trash = product.querySelector(".fa-trash-alt");
    const like = product.querySelector(".fa-heart");
    console.log(like);
    
    // converting the quantity to a number to allow for arithemtic operations
    let  currQuantity = Number(quantity.innerHTML);

    // converting the unit price to a number after removing non numeric characters eg ($), to ensure arithmetic operations.
    let unitPriceValue = Number(unitPrice.innerHTML.replace(/[^0-9.]/g, ''));

    console.log(unitPriceValue);

    // function to increase item quantity on the click of the plus (+)
    function increaseQuantity() {
        // gets the initial value of quantity and increments it by 1 with each click.
        currQuantity += 1;
        console.log(currQuantity);
        // gets the current total amount and increments it by the unit price of clicked product.
        totalAmount += unitPriceValue;

        // update the dom with the new values of quantity and total
        quantity.innerHTML = currQuantity;
        total.innerHTML = `${totalAmount} $`;
    }

    // function to reduces item quantity on the click of the minus (-)
    function reduceQuantity() {

        // check if the current quantity is zero then clicks won't do anything.
        if (currQuantity === 0) {
            return;
        } 
        
        // gets the initial value of quantity and decrements it by 1 with each click.   
        currQuantity -= 1;
        console.log(currQuantity);

         // gets the current total amount and decrements it by the unit price of clicked product.
        totalAmount -= unitPriceValue;

        // update the dom with the new values of quantity and total
        quantity.innerHTML = currQuantity;
        total.innerHTML = `${totalAmount} $`;
    }

    // delete an item
    function deleteCartItem() {
        if (currQuantity === 0) {
            alert("Item not in the cart!");
            return;
        }
        // gets the totalAmount of the item deleted by multiplying its quantity by its unit price.
        let totalOfRemovedItem = unitPriceValue * currQuantity;
        
        // this line of code ensures the total amount never becomes a negative value.
        totalAmount = Math.max(0, totalAmount - totalOfRemovedItem);

        // resets the quantity of that particular item to zero
        currQuantity = 0;
        
        // updates the dom with the new values for item quantity and total.
        quantity.innerHTML = currQuantity;
        total.innerHTML = `${totalAmount} $`;
        alert("item successfully removed!");
    }

    // connecting each element that activates the call back function based on an event using the addEventlistener() method.
    increaseBtn.addEventListener("click", increaseQuantity);
    reduceBtn.addEventListener("click", reduceQuantity);
    trash.addEventListener("click", deleteCartItem);
    
    // toggles the heart color based a class in our css. first click adds the defined color and second click changes color to the default.
    like.addEventListener("click", function() {
        like.classList.toggle("heart-color");
    })
})


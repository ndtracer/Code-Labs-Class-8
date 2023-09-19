// const btn = document.querySelector('button');

// console.log(btn);

// function changeBg () { document.addEventListener ('click', change);
// function change() {
//     document.body.style.backgroundColor = 'red'
// }
// }

// // function change() {
// //     document.body.style.backgroundColor = 'red'
// // }
// changeBg()

// Exercise 2

// OBJECTIVE: This application will multiply price by quantity to get result
// * ===== SELECTORS ===== * \\
// What do I need access to in the HTML?
const priceInput = document.querySelector('#price');
const quantityInput = document.querySelector('#quantity');
const totalPrice = document.querySelector('.total-price');
const quantityLabel = document.querySelector('.quantity-label');


// * ===== EVENTS ===== * \\
// WHAT: When the Price Changes -> Update the Total
priceInput.addEventListener('input', updateTotal);

// WHAT: When the Quantity Changes -> Update the Total
quantityInput.addEventListener('input', updateTotal);
// WHAT: When the Quantity Changes -> Update the Quantity Label
quantityInput.addEventListener('input', updateQuantityLabel);
// * ===== FUNCTIONS ===== * \\
// OUTPUT: Update the Total
function updateTotal () {
    const total = priceInput.value * quantityInput.value;
    
    totalPrice.innerText = (`$${total.toFixed(2)}`);

}

updateTotal;

// OUTPUT: Update the quantity label
function updateQuantityLabel () {
    const quantityChange = quantityInput.value;
    console.log(quantityChange)
    quantityLabel.innerText = (quantityChange)
}

updateQuantityLabel;
// * ===== APPLICATION START ===== * \\
updateTotal();
updateQuantityLabel();
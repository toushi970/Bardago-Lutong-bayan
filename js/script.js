const prices = {
    adobo: 100,
    tinola: 120,
    pancit: 110,
    lumpia: 80,
    sisig: 150,
    "kare-kare": 200,
    lechon: 220
}

function showMessage(form, text) {
    let msg = form.querySelector(".form-message");
    if (!msg) {
        msg = document.createElement("p");
        msg.className = "form-message";
        form.appendChild(msg);
    }
    msg.textContent = text;
}

const orderForm = document.getElementById("order-form");

orderForm.addEventListener("submit", function (e) {
    e.preventDefault(); 
    const name = document.getElementById("customer-name").value.trim();
    const dishSelect = document.getElementById("food-order");
    const quantity = Number(document.getElementById("quantity").value);
    const dishName = dishSelect.options[dishSelect.selectedIndex].text;
    const total = prices[dishSelect.value] * quantity;
    showMessage(
        orderForm,
        `Thank you, ${name}! Your order of ${quantity} * ${dishName} is received. Total: Php ${total.toFixed(2)}`
    );
    orderForm.reset();
});

const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    showMessage(contactForm, `Thank you, ${name}! We got your message and will reply soon. `);
    contactForm.reset();
})
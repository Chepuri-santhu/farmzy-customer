document.querySelectorAll('input[type="checkbox"]').forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        const selectElement = this.parentElement.querySelector('select');
        if (this.checked) {
            selectElement.disabled = false;
        } else {
            selectElement.disabled = true;
            selectElement.value = ""; // Reset the quantity selection
        }
    });
});

function placeOrder() {
    const selectedItems = [];

    document.querySelectorAll('input[type="checkbox"]:checked').forEach(function(checkbox) {
        const item = checkbox.parentElement.querySelector('h3').innerText;
        const quantity = checkbox.parentElement.querySelector('select').value;
        selectedItems.push(`${item} - ${quantity} kg`);
    });

    if (selectedItems.length > 0) {
        alert("Your order has been placed successfully for:\n" + selectedItems.join('\n'));
    } else {
        alert("No items selected.");
    }
}
function searchItems() {
    const query = document.getElementById('search-box').value.toLowerCase();
    const items = document.querySelectorAll('.item');

    items.forEach(function(item) {
        const itemName = item.querySelector('h3').innerText.toLowerCase();
        if (itemName.includes(query)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}
function placeOrder() {
    const selectedItems = [];
    const location = document.getElementById('delivery-location').value;
    let totalPrice = 0;

    document.querySelectorAll('input[type="checkbox"]:checked').forEach(function(checkbox) {
        const item = checkbox.parentElement.querySelector('h3').innerText;
        const quantity = parseInt(checkbox.parentElement.querySelector('select').value);
        const pricePerKg = parseFloat(checkbox.getAttribute('data-price'));
        const itemTotalPrice = quantity * pricePerKg;
        totalPrice += itemTotalPrice;
        selectedItems.push(`${item} - ${quantity} kg (₹${itemTotalPrice})`);
    });

    if (selectedItems.length > 0 && location) {
        alert(`Your order has been placed successfully for:\n${selectedItems.join('\n')}\n\nDelivery Location: ${location}\nTotal Price: ₹${totalPrice}`);
    } else if (!location) {
        alert("Please enter a delivery location.");
    } else {
        alert("No items selected.");
    }
}

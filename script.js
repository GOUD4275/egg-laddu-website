function calculateTotal() {

    let egg = document.getElementById("eggQty").value;
    let laddu = document.getElementById("ladduQty").value;
    let karjuram = document.getElementById("karjuramQty").value;

    let total = (egg * 10) + (laddu * 10) + (karjuram * 10);

    document.getElementById("total").innerText = total;
}

function confirmOrder() {

    let total = document.getElementById("total").innerText;

    if (total == 0) {
        alert("Please select at least one item");
        return;
    }

    if (confirm("Your total is ₹" + total + ". Confirm order?")) {
        sendOrder();    
    }

    if (total < 50) {
    alert("Minimum order is ₹50");
    return;
    }	
}

function confirmOrder() {

    let total = document.getElementById("total").innerText;
    let center = document.getElementById("center").value;

    if (total == 0) {
        alert("Please select at least one item");
        return;
    }

    if (total < 50) {
        alert("Minimum order is ₹50");
        return;
    }

    if (center == "") {
        alert("Please select delivery center (Main Road only)");
        return;
    }

    if (confirm("Your total is ₹" + total + ". Confirm order?")) {
        sendOrder();
    }
}

function sendOrder() {

    let egg = document.getElementById("eggQty").value;
    let laddu = document.getElementById("ladduQty").value;
    let karjuram = document.getElementById("karjuramQty").value;
    let name = document.getElementById("customerName").value;
    let location = document.getElementById("location").value;
    let total = document.getElementById("total").innerText;

    let message = "New Order:%0A";
    message += "Name: " + name + "%0A";
    message += "Address: " + location + "%0A";
    message += "Boiled Egg: " + egg + "%0A";
    message += "Nuvvula Laddu: " + laddu + "%0A";
    message += "Karjuram Laddu: " + karjuram + "%0A";
    message += "Total: ₹" + total;

    let whatsappURL = "https://wa.me/919966927212?text=" + message;

    window.open(whatsappURL, "_blank");

    alert("Order Sent Successfully!");
}

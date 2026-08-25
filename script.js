document.addEventListener("DOMContentLoaded", function () {

    /* LOGIN */

    const loginForm = document.getElementById("loginForm");

    if (loginForm) {

        loginForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const address = document.getElementById("address").value.trim();

            if (!name || !phone || !address) {
                alert("Please enter all your details.");
                return;
            }

            localStorage.setItem("agroName", name);
            localStorage.setItem("agroPhone", phone);
            localStorage.setItem("agroAddress", address);

            window.location.href = "overview.html";
        });
    }


    /* LOAD CUSTOMER DETAILS INTO ORDER FORM */

    const orderName = document.getElementById("orderName");
    const orderPhone = document.getElementById("orderPhone");
    const orderAddress = document.getElementById("orderAddress");

    if (orderName) {
        orderName.value = localStorage.getItem("agroName") || "";
    }

    if (orderPhone) {
        orderPhone.value = localStorage.getItem("agroPhone") || "";
    }

    if (orderAddress) {
        orderAddress.value = localStorage.getItem("agroAddress") || "";
    }

});

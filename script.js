/* =====================================================
   AGROSENSE DYNAMICS
   MAIN JAVASCRIPT
===================================================== */


/* =====================================================
   LOGIN PAGE
   Save customer details and open overview
===================================================== */

const loginForm =
    document.getElementById("loginForm");


if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const address =
            document.getElementById("address").value.trim();


        if (!name || !phone || !address) {

            alert("Please fill in all the details.");

            return;

        }


        /*
           Save the information in the browser.
        */

        localStorage.setItem(
            "agroName",
            name
        );

        localStorage.setItem(
            "agroPhone",
            phone
        );

        localStorage.setItem(
            "agroAddress",
            address
        );


        /*
           Move to Overview.
        */

        window.location.href =
            "overview.html";

    });

}


/* =====================================================
   ORDER PAGE
   Automatically fill customer details
===================================================== */

const orderName =
    document.getElementById("orderName");

const orderPhone =
    document.getElementById("orderPhone");

const orderAddress =
    document.getElementById("orderAddress");


if (orderName) {

    const savedName =
        localStorage.getItem("agroName");

    const savedPhone =
        localStorage.getItem("agroPhone");

    const savedAddress =
        localStorage.getItem("agroAddress");


    if (savedName) {

        orderName.value =
            savedName;

    }


    if (savedPhone) {

        orderPhone.value =
            savedPhone;

    }


    if (savedAddress) {

        orderAddress.value =
            savedAddress;

    }

}


/* =====================================================
   FEEDBACK STAR RATING
===================================================== */

const stars =
    document.querySelectorAll(".star");

const rating =
    document.getElementById("rating");


if (stars.length > 0) {

    stars.forEach(function(star) {

        star.addEventListener(
            "click",
            function() {

                const selected =
                    Number(
                        this.dataset.rating
                    );


                if (rating) {

                    rating.value =
                        selected + " / 5";

                }


                stars.forEach(
                    function(item) {

                        const itemValue =
                            Number(
                                item.dataset.rating
                            );


                        if (
                            itemValue <= selected
                        ) {

                            item.classList.add(
                                "active"
                            );

                        } else {

                            item.classList.remove(
                                "active"
                            );

                        }

                    }
                );

            }
        );

    });

}


/* =====================================================
   FEEDBACK RESET
===================================================== */

const resetButton =
    document.getElementById(
        "resetFeedback"
    );


if (resetButton) {

    resetButton.addEventListener(
        "click",
        function() {

            setTimeout(
                function() {

                    if (rating) {

                        rating.value = "";

                    }


                    stars.forEach(
                        function(star) {

                            star.classList.remove(
                                "active"
                            );

                        }
                    );

                },
                50
            );

        }
    );

}


/* =====================================================
   PAGE LOAD ANIMATION
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const elements =
            document.querySelectorAll(
                ".reveal"
            );


        elements.forEach(
            function(element, index) {

                element.style.animationDelay =
                    (index * 0.06) + "s";

            }
        );

    }
);

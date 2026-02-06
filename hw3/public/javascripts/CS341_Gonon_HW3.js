/* Eduardo Gonon
 * CS341
 *
 * 
 * 
 */


/**
 * orderHandler()
 * 
 * Method handles the cheesecake orders from the customer
 * Checks to see if customer inputs the word "vegan" & alerts them
 * Otherwise, sends them a congrats
 * 
*/
orderHandler = function (event) {
    // https://www.w3schools.com/jquery/jquery_selectors.asp

    const quantity = $("#cake_option").val();
    const topping = $("input[name='fav_topping']:checked").val();
    const notes = $("#comments").val();

    // If the Notes contains the word “vegan” than the page should show an alert that warns the user that 
    // the cheesecakes contain dairy.
    if (notes.includes("vegan")) {
        alert("Warning: Our cheesecakes contain dairy!");
    }

    // Otherwise, the page should be edited to remove the form section of the page
    //(i.e., the quantity dropdown, topping selector, notes text and Order button)
    // and replace it with text
    else {

        const successHtml = `
                <h2>Thank you! Your order has been placed <br> 
                    Here are the details of your order:</h2>
                <p><strong>Your topping:</strong> ${topping}</p>
                <p><strong>Quantity:</strong> ${quantity}</p>
                <p><strong>Your notes:</strong> ${notes}</p>`;


        $("#order-form-container").html(successHtml);
    }
};


/**
 * monthOptionHandler()
 * 
 * Handles the dropdown menu for month selection
 * & updates the yellow widget to the correct month, chosen by the user
 */
monthOptionHandler = function (event) {
    event.preventDefault();

    const selectedMonth = $(this).text();

    $("#month-display").text(selectedMonth);

};



// Source: https://www.w3schools.com/jquery/jquery_syntax.asp
// Prevents any jQuery code from running before the document is finished 
$(function () {

    // Order button click
    $('#order-button').click(orderHandler);

    // Month display click
$(".month-option").click(monthOptionHandler);
});
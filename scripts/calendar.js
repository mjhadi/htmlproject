/*
   Author: MJ Hadi
   Date:   June 06 2017
*/

function calendar() {
    var date = new Date();
    //document.write("<table id='calendar_table'>");
    writeCalTitle(date);
    //document.write("</table>");
}

function writeCalTitle(calendarDay) {
    var months = new Array("January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December");
    var day = calendarDay.getDay();
    var month = calendarDay.getMonth();
    var year = calendarDay.getFullYear();
    //document.write("<tr>" + "<th id='calendar_head' colspan='7'>" + months[month] + " " + year + "</th></tr>");
    document.write(months[month] + " " + year);

    /*var objToday = new Date();
    weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
    dayOfWeek = weekday[objToday.getDay()];
	domEnder = function () { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }(),
	dayOfMonth = today + (objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
	months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
	curMonth = months[objToday.getMonth()],
	curYear = objToday.getFullYear(),
	curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
	curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
	curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(),
	curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
    var today = curHour + ":" + curMinute + "." + curSeconds + curMeridiem + " " + dayOfWeek + " " + dayOfMonth + " of " + curMonth + ", " + curYear;

    document.getElementsByTagName('h1')[0].textContent = today; */
}

function showDate() {
    // create an object date
    var today = new Date();
    // extract from the today object the date, month and the currrnt year

    var thisDate = today.getDate();
    var thisMonth = today.getMonth() + 1;
    var thisYear = today.getFullYear();

    // return the full date
    var currentDate = thisMonth + "/" + thisDate + "/" + thisYear;
    return currentDate;

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }
    today = mm + '-' + dd + '-' + yyyy;
    console.log(today);
    today = mm + '/' + dd + '/' + yyyy;
    console.log(today);
    today = dd + '-' + mm + '-' + yyyy;
    console.log(today);
    today = dd + '/' + mm + '/' + yyyy;
    console.log(today);
}

// create function startForm()
function startForm() {
    //display the current date in the txtToday field
    document.forms[0].txtToday.value = showDate();

    // set the focus on the product list
    document.form1.prod.focus();
}

// calculates the subtotal of product price and quantity
function calculatePrice() {
    // declare variables 
    var product = document.form1.prod;
    var pIndex = product.selectedIndex;

    // return the product value of the selected index
    var productPrice = product.options[pIndex].value;
    //alert(productPrice);

    var quantity = document.form1.qty;
    var qIndex = quantity.selectedIndex;

    // return the product value of the selected index
    var quantityOrdered = quantity.options[qIndex].value;

    // display the calculated subtotal in the textPrice field
    document.form1.txtPrice.value = (productPrice * quantityOrdered).toFixed(2);

    // call function calcualteTotal()
    calcualteTotal();
}

// returns the shipping cost
function calculateShipping(shipOption) {
    document.form1.txtShip.value = shipOption.value;
    //alert(shipOption.value);
    // call function calcualteTotal()
    calcualteTotal();
}

// calculates the total of the order 
function calcualteTotal() {
    var priceVal = parseFloat(document.form1.txtPrice.value);
    var shipVal = parseFloat(document.form1.txtShip.value);
    var taxRate = 0.05;
    var taxVal = (priceVal + shipVal) * taxRate;

    // display the subtotal
    document.form1.txtSubtotal.value = (priceVal + shipVal).toFixed(2);

    // display the tax value
    document.form1.txtTax.value = (taxVal).toFixed(2);

    // dispaly the total value 
    document.form1.txtTotal.value = (priceVal + shipVal + taxVal).toFixed(2);

}

// validates data entry before submitted to te server-side
function validateForm() {

    if (document.form1.prod.selectedIndex == 0) {
        window.alert("You must enter a GPS-Ware product");
        document.form1.prod.focus();
        return false;
    }
    else if (document.form1.qty.selectedIndex == 0) {
        window.alert("You must selct a quantity to order");
        document.form1.qty.focus();
        return false;
    }
    else if (document.form1.txtShip.value == "0.00") {
        window.alert("You must selct a shipping option");
        document.form1.txtShip.focus();
        return false;
    }
}


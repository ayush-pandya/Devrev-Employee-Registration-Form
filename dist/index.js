"use strict";
const form = document.getElementById("reg-form");
const errorElement = document.getElementById('error');
console.log(form, errorElement);
form === null || form === void 0 ? void 0 : form.addEventListener('submit', formSubmitHandler);
function formSubmitHandler(event) {
    var messages = [];
    function getInputUsingID(id) {
        var inputElement = document.getElementById(id);
        if (inputElement == null) {
            inputElement = document.createElement("div");
        }
        return inputElement.value.trim();
    }
    function validAccountNumber(acNumber) {
        const patt = /^([0-9]{11})|([0-9]{2}-[0-9]{3}-[0-9]{6})$/;
        return patt.test(acNumber);
    }
    function validPinCode(pinCode) {
        const pinFormat = /^([0-9](6,6)+)$/;
        return pinFormat.test(pinCode);
    }
    const name = getInputUsingID("name");
    const email = getInputUsingID("email");
    const password = getInputUsingID("password");
    const cpassword = getInputUsingID("cpassword");
    const phoneNumber = getInputUsingID("phoneNumber");
    const gender = getInputUsingID("female-gender");
    const aadharCard = getInputUsingID("adhaar-number");
    const accountNumber = getInputUsingID("account-number");
    const panCard = getInputUsingID("pan-card-number");
    const address = getInputUsingID("address");
    const pinCode = getInputUsingID("pincode");
    const about = getInputUsingID("about");
    const rows = document.getElementsByClassName("form-row");
    console.log(rows);
    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!validName(name) || name == "") {
        console.log(name);
        messages.push("<span class='wrong' id='wrong-name'>&#10539</span> Invalid Name");
    }
    else {
        messages.push("<span class='right' id='right-name'>&#10003</span>");
    }
    console.log("Email");
    if (!email.match(emailFormat)) {
        messages.push("<span class='wrong' id='wrong-email'>&#10539</span> Invalid Email");
    }
    else {
        messages.push("<span class='right' id='right-email'>&#10003</span>");
    }
    if (password != "") {
        messages.push("<span class='right' id='right-password'>&#10003</span>");
    }
    else {
        messages.push("<span class='wrong' id='wrong-password'>&#10539</span> Empty");
    }
    if (cpassword != "") {
        messages.push("<span class='right' id='right-cpassword'>&#10003</span>");
    }
    else {
        messages.push("<span class='wrong' id='wrong-cpassword'>&#10539</span> Empty");
    }
    if (!validPhoneNumber(phoneNumber)) {
        messages.push("<span class='wrong' id='wrong-phoneNumber'>&#10539</span> Invalid");
    }
    else {
        messages.push("<span class='right' id='right-phoneNumber'>&#10003</span>");
    }
    if (gender != "") {
        messages.push("<span  class='right'>&#10003</span>");
    }
    else {
        messages.push("<span class='wrong'>&#10539</span>Enter your gender");
    }
    if (!validAadharId(aadharCard)) {
        messages.push("<span class='wrong' id='wrong-adhaar'>&#10539</span> Invalid Aadhar Number");
    }
    else {
        messages.push("<span class='right' id='right-adhaar'>&#10003</span>");
    }
    if (!validAccountNumber(accountNumber)) {
        messages.push("<span class='wrong' id='wrong-accountNumber'>&#10539</span> Invalid Account Number");
    }
    else {
        messages.push("<span class='right' id='right-accountNumber'>&#10003</span>");
    }
    if (!validPanCard(panCard)) {
        messages.push("<span class='wrong' id='wrong-panCard'>&#10539</span> Invalid Pan Card");
    }
    else {
        messages.push("<span class='right' id='right-panCard'>&#10003</span>");
    }
    if (address != "") {
        messages.push("<span class='right' id='right-address'>&#10003</span>");
    }
    else {
        messages.push("<span class='wrong' id='wrong-address'>&#10539</span> Empty");
    }
    if (!validPinCode(pinCode)) {
        messages.push("<span class='wrong' id='wrong-pincode'>&#10539</span> Invalid pin code ");
    }
    else {
        messages.push("<span class='right' id='right-pincode'>&#10003</span>");
    }
    if (about != "") {
        messages.push("<span class='right' id='right-about'>&#10003</span>");
    }
    else {
        messages.push("<span class='wrong' id='wrong-about'> Empty");
    }
    if (messages.length > 0) {
        event.preventDefault();
        var messagesTag = "";
        for (let i = 0; i < 12; i++) {
            const tds = document.createElement("td");
            tds.className = "message";
            tds.innerHTML = messages[i];
            rows[i].appendChild(tds);
            console.log(rows);
        }
        errorElement.innerHTML = messagesTag;
    }
    else {
        console.log(name, aadharCard, panCard, phoneNumber, email, gender);
        console.log(name, aadharCard, panCard, phoneNumber, email, gender);
    }
    function validPhoneNumber(phoneNumber) {
        const NUMBER_OF_DIGITS = 10;
        if (phoneNumber.length != NUMBER_OF_DIGITS ||
            parseInt(phoneNumber) < Math.pow(10, 9)) {
            return false;
        }
        return true;
    }
    function validName(name) {
        for (let c of name) {
            if (!((c >= "a" && c <= "z") || (c >= "A" && c <= "Z"))) {
                return false;
            }
        }
        return true;
    }
    function validAadharId(adhaar) {
        const AADHAR_ID_LENGTH = 12;
        if (adhaar.length != AADHAR_ID_LENGTH ||
            parseInt(adhaar) < Math.pow(10, AADHAR_ID_LENGTH - 1))
            return false;
        return true;
    }
    function validPanCard(pan) {
        const PAN_ID_LENGTH = 10;
        if (pan.length != PAN_ID_LENGTH)
            return false;
        for (let i = 0; i < PAN_ID_LENGTH; ++i) {
            const c = pan.charAt(i);
            if (i < 5) {
                if (!(c >= "A" && c <= "Z"))
                    return false;
            }
            else if (i < 9) {
                if (!(c >= "0" && c <= "9"))
                    return false;
            }
            else if (!(c >= "A" && c <= "Z")) {
                return false;
            }
        }
        return true;
    }
}
form === null || form === void 0 ? void 0 : form.addEventListener("submit", formSubmitHandler);

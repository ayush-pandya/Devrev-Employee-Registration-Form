"use strict";
const form = document.querySelector(".reg-form");
function formSubmitHandler(event) {
    function getInputUsingID(id) {
        const inputElement = document.getElementById(id);
        return inputElement.value.trim();
    }
    event.preventDefault();
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
    function validAccountNumber(acNumber) {
        const patt = /^([0-9]{11})|([0-9]{2}-[0-9]{3}-[0-9]{6})$/;
        return patt.test(acNumber);
    }
    function validPinCode(pinCode) {
        const pinFormat = /^([0-9](6,6)+$/;
        return pinFormat.test(pinCode);
    }
    const name = getInputUsingID("name");
    const email = getInputUsingID("email");
    const aadharCard = getInputUsingID("adhaar-number");
    const panCard = getInputUsingID("pan-card-number");
    const phoneNumber = getInputUsingID("phoneNumber");
    const accountNumber = getInputUsingID("account-number");
    const pinCode = getInputUsingID("pincode");
    const gender = getInputUsingID("gender");
    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!validName(name)) {
        alert(`${name} Invalid first. Should contain only aplhabet.)`);
        return;
    }
    if (!email.match(emailFormat)) {
        alert(`${email} Invalid Email.`);
        return;
    }
    if (!validAadharId(aadharCard)) {
        alert(`${aadharCard} Invalid Aadhar Numeber.`);
        return;
    }
    if (!validPanCard(panCard)) {
        alert(`${panCard} Invalid Pan Card.`);
        return;
    }
    if (!validAccountNumber(accountNumber)) {
        alert(`${accountNumber} Invalid Account Number`);
    }
    if (!validPhoneNumber(phoneNumber)) {
        alert(`${phoneNumber} Invalid phone number(Not 10 digit numebr)`);
        return;
    }
    if (!validPinCode(pinCode)) {
        alert(`${pinCode} Invalid phone number(Not 10 digit numebr)`);
        return;
    }
    alert("Success");
    console.log(name, aadharCard, panCard, phoneNumber, email, gender);
}
form === null || form === void 0 ? void 0 : form.addEventListener("submit", formSubmitHandler);

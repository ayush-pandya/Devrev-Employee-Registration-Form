const form = document.querySelector(".reg-form");

function formSubmitHandler(event : any) {
  function getInputUsingID(id: string): string {
    const inputElement = <HTMLInputElement>document.getElementById(id);
    return inputElement.value.trim();
  }

  event.preventDefault();

  const name = getInputUsingID("name");
  const email = getInputUsingID("email");
  const aadharCard = getInputUsingID("adhaar-number");
  const panCard = getInputUsingID("pan-card-number");
  const phoneNumber = getInputUsingID("phoneNumber");
  const accountNumber = getInputUsingID("account-number");
  const pinCode = getInputUsingID("pincode");
  const about = getInputUsingID("about");
  const gender = getInputUsingID("gender");
  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!validName(name)) {
    alert(`${name} Invalid first. Should contain only aplhabet.)`);
    return;
  }


  if (!email.match(emailFormat)) {
    alert(`${email} Invalid Email id`);
    return;
  }

  if (!validAadharId(aadharCard)) {
    alert(
      `${aadharCard} Invalid Aadhar id.`
    );
    return;
  }
  if (!validPanId(panCard)) {
    alert(
      `${panCard} Invalid Pan id.`
    );
    return;
  }


  if (!validPhoneNumber(phoneNumber)) {
    alert(
      `${phoneNumber} Invalid phone number(Not 10 digit numebr)`
    );
    return;
  }

  alert("Success");

  console.log(
    name,
    aadharCard,
    panCard,
    phoneNumber,
    email,
    gender,
  );
}
function validPhoneNumber(phoneNumber: string): boolean {
  const NUMBER_OF_DIGITS = 10;

  if (
    phoneNumber.length != NUMBER_OF_DIGITS ||
    parseInt(phoneNumber) < Math.pow(10, 9)
  ) {
    return false;
  }

  return true;
}
function validName(name: string): boolean {
  for (let c of name) {
    if (!((c >= "a" && c <= "z") || (c >= "A" && c <= "Z"))) {
      return false;
    }
  }

  return true;
}
function validAadharId(id: string): boolean {
  const AADHAR_ID_LENGTH: number = 12;
  if (
    id.length != AADHAR_ID_LENGTH ||
    parseInt(id) < Math.pow(10, AADHAR_ID_LENGTH - 1)
  )
    return false;
  return true;
}

function validPanId(id: string): boolean {
  const PAN_ID_LENGTH: number = 10;

  if (id.length != PAN_ID_LENGTH) return false;

  for (let i = 0; i < PAN_ID_LENGTH; ++i) {
    const c = id.charAt(i);
    if (i < 5) {
      if (!(c >= "A" && c <= "Z")) return false;
    } else if (i < 9) {
      if (!(c >= "0" && c <= "9")) return false;
    } else if (!(c >= "A" && c <= "Z")) {
      return false;
    }
  }

  return true;
}

form?.addEventListener("submit", formSubmitHandler);
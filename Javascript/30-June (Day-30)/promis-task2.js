function verifyOTP(enteredOTP) {
  const correctOTP = "1234";

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (enteredOTP === correctOTP) {
        resolve("Login successful! ");
      } else {
        reject("Invalid OTP.");
      }
    }, 2000);
  });
}

verifyOTP("1234")
  .then((msgg) => {
    console.log(msgg);
  })
  .catch((error) => {
    console.log(error);
  });

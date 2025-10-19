function sms_confirmation() {
  const status = document.getElementById("status");

  const paymentSuccess = true;

  if (paymentSuccess) {
    status.textContent = "Payment Status: Confirmed ✅";
  } else {
    status.textContent = "Payment Status: Failed ❌";
  }
}

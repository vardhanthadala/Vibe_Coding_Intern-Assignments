document.getElementById("payButton").addEventListener("click", function () {
  const upiLink =
    "upi://pay?pa=merchant@bank&pn=VibeCode+Intern&am=1.00&cu=INR&tn=ORDER12345";

  window.location.href = upiLink;

  const status = document.getElementById("status");
  status.textContent = "Redirecting to UPI app...";

  setTimeout(() => {
    sms_confirmation();
  }, 5000);
});

# Assignment A — UPI Payment Flow with SMS Confirmation

## Overview

This project is part of the **VibeCode Intern assignment**.
It demonstrates a simple **UPI payment flow** with a simulated SMS-based payment confirmation.

---

## Features

* Displays an **order summary** (item, price, order ID).
* **Pay via UPI** button that opens your mobile UPI app (Google Pay, PhonePe, etc.) with pre-filled payment details.
* **Simulated SMS confirmation** updates the payment status automatically after a few seconds.

> Note: Real SMS reading is not implemented for security reasons. This simulation demonstrates the workflow and satisfies the bonus requirement.

---

## Tech Stack

* HTML, CSS, JavaScript
* Hosted on **Vercel**
* Designed for **mobile browsers** (UPI apps only open on mobile)

---

## Installation / Usage

1. Clone the repository:

```bash
git clone https://github.com/<your-username>/vibecoding-assignments.git
```

2. Navigate to the Assignment A folder:

```bash
cd vibecoding-assignments/assignment-a
```

3. Open `index.html` in a **mobile browser**.
4. Click **Pay via UPI** to trigger the UPI payment.
5. Wait a few seconds → **Payment Status** updates automatically.

---

## UPI Deep Link Format

Example link used in this project:

```
upi://pay?pa=merchant@bank&pn=VibeCode+Intern&am=1.00&cu=INR&tn=ORDER12345
```


---

## Notes

* Desktop browsers cannot open UPI links; test on **mobile devices only**.
* SMS confirmation is simulated for demonstration purposes.

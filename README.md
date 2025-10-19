# Assignment A — UPI Payment Flow with SMS Confirmation 💳📲

## Overview 📝

This project is part of the **VibeCode Intern assignment**.  
It demonstrates a simple **UPI payment flow** with a simulated SMS-based payment confirmation.

---

## Features ✨

* 🛒 Displays an **order summary** (item, price, order ID).  
* 💸 **Pay via UPI** button that opens your mobile UPI app (Google Pay, PhonePe, etc.) with pre-filled payment details.  
* 📩 **Simulated SMS confirmation** updates the payment status automatically after a few seconds.

> ⚠️ Note: Real SMS reading is not implemented for security reasons. This simulation demonstrates the workflow and satisfies the bonus requirement.

---

## Hosted on Vercel 🌐

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=flat-square)](https://vibe-coding-intern-assignment.vercel.app/)

---

## Tech Stack 🛠️

* HTML, CSS, JavaScript  
* Hosted on **Vercel**  
* Designed for **mobile browsers** (UPI apps only open on mobile)

---

## UPI Deep Link Format 🔗

Example link used in this project:


```
upi://pay?pa=merchant@bank&pn=VibeCode+Intern&am=1.00&cu=INR&tn=ORDER12345
```


---

## Notes ⚡

* 🖥️ Desktop browsers cannot open UPI links; test on **mobile devices only**.  
* 📱 SMS confirmation is simulated for demonstration purposes.
------

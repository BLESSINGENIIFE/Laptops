function calculateInstallment() {
  const price = document.getElementById("price").value;
  const months = document.getElementById("months").value;
  const result = document.getElementById("result");

  if (!price || !months || price <= 0 || months <= 0) {
    result.innerText = "Please enter valid numbers.";
    return;
  }

  const interestRate = 0.05; // 5% monthly interest
  const total = price * (1 + interestRate * months);
  const monthly = total / months;

  result.innerHTML = `
    Total Payable: ₦${total.toFixed(2)} <br>
    Monthly Payment: ₦${monthly.toFixed(2)}
  `;
}

// Contact Form Message
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for contacting EasyPay Laptops! We'll get back to you soon.");
  this.reset();
});

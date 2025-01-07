document
  .getElementById("add-customer-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const contactNumber = document.getElementById("contact-number").value;
    console.log(`Adding customer: ${name}, ${contactNumber}`);
    // Add customer logic here
  });

document.getElementById("search-btn").addEventListener("click", function () {
  const customerId = document.getElementById("customer-id").value;
  console.log(`Searching for customer ID: ${customerId}`);
  // Search customer logic here
});

/*ran code for syntax errors chatgpt added this line of code as well  this event listener automatically closes
 an alert after a few minutes, but i think its unnesessary for that many detail and i commented it out but you guy can
 check it out*/
/*document.addEventListener("DOMContentLoaded", () => {
    // Auto-dismiss alerts after 5 seconds
   const alerts = document.querySelectorAll(".alert")
    alerts.forEach((alert) => {
      setTimeout(() => {
        // Initialize Bootstrap Alert (assuming Bootstrap is globally available)
        const bsAlert = new bootstrap.Alert(alert)
        bsAlert.close()
      }, 5000)x
   })*/
  
    // if same as billing address checkbox true, copy paste code, currently not working
    const sameAddressCheckbox = document.getElementById("same-address")
    if (sameAddressCheckbox) {
      sameAddressCheckbox.addEventListener("change", function () {
        if (this.checked) {
          document.getElementById("delivery-first-name").value = document.getElementById("billing-first-name").value
          document.getElementById("delivery-last-name").value = document.getElementById("billing-last-name").value
          document.getElementById("delivery-address").value = document.getElementById("billing-address").value
          document.getElementById("delivery-city").value = document.getElementById("billing-city").value
          document.getElementById("delivery-state").value = document.getElementById("billing-state").value
          document.getElementById("delivery-zip").value = document.getElementById("billing-zip").value
          document.getElementById("delivery-country").value = document.getElementById("billing-country").value
        }
      })
    }
  
  
    // to prevent negative numbers
    const quantityInputs = document.querySelectorAll('input[type="number"]')
    quantityInputs.forEach((input) => {
      input.addEventListener("change", function () {
        if (this.value < 1) {
          this.value = 1
        }
      })
    })
  
  
  
// External JavaScript for interaction

function validateForm() {
    var feedbackText = document.getElementById("feedbackText").value;
  
    if (feedbackText.trim() === "") {
      alert("Feedback cannot be empty!");
      return false;
    }
  
    // Add more validation if needed
  
    alert("Thank you for your feedback!");
    return true;
  }
  
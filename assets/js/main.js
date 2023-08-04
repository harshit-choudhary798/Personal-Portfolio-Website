
  function sendEmail(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Generate the mailto link with the form details
    var mailtoLink = "mailto:harshit184007@gmail.com" +
      "?subject=" + encodeURIComponent("New Contact Form Submission") +
      "&body=" + encodeURIComponent("Name: " + name + "\n" +
                                    "Email: " + email + "\n" +
                                    "Message: " + message);

    // Open the user's email client with the mailto link
    window.location.href = mailtoLink;
  }


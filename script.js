
  const currentPage = location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {
    if(link.getAttribute("href") === currentPage){
      link.classList.add("active");
    }
  });

// Email section start here 

(function(){
      emailjs.init("rBqFN7Kd_CP7G_aue");
  })();

  document.getElementById("contact-form")
    .addEventListener("submit", function(event) {
      event.preventDefault();

      emailjs.sendForm("service_bhumi123", "template_50gfy0q", this)
        .then(function() {
          alert("Message Sent Successfully ");
          document.getElementById("contact-form").reset();
        }, function(error) {
          alert("Failed to Send ");
        });
    });
// Navigation menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
	nav.classList.toggle("show");
});

// Image gallery modal
const images = document.querySelectorAll(".gallery img");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal-img");
const modalClose = document.querySelector(".modal-close");

images.forEach((image) => {
	image.addEventListener("click", () => {
		modal.classList.add("show");
		modalImg.src = image.src;
	});
});

modalClose.addEventListener("click", () => {
	modal.classList.remove("show");
});

// Form submission
const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const button = document.querySelector("button[type=submit]");

form.addEventListener("submit", (event) => {
	event.preventDefault();
	button.innerHTML = "Sending...";
	button.disabled = true;

	// Send the form data to a server
	const data = {
		name: nameInput.value,
		email: emailInput.value,
		message: messageInput.value,
	};
	console.log(data);

	// Simulate a delay
	setTimeout(() => {
		button.innerHTML = "Submit";
		button.disabled = false;
		alert("Form submitted successfully!");
	}, 2000);
});


function openWhatsApp() {
  var phoneNumber = "9012899253";
  var message = "Hello!"
  var url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
}

function openEmail() {
	var email = "ag822106@gmail.com"; 
	var subject = "type the Subject"; 
	var body = "Say you are free to say"; 
	var url = "mailto:" + email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
	window.open(url, "_blank");
  }
  

 

  const slides = document.querySelectorAll(".carousel__slide");

  slides.forEach(slide => {
	slide.addEventListener("click", () => {
	  const url = slide.parentNode.href;
	  window.location.href = url;
	});
  });
  







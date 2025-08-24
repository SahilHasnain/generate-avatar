document.addEventListener("DOMContentLoaded", function () {
  // Get DOM elements
  const avatarContainer = document.getElementById("avatarContainer");
  const avatarText = document.getElementById("avatarText");
  const textSelect = document.getElementById("textSelect");
  const styleSelect = document.getElementById("styleSelect");
  const iconContainer = document.getElementById("iconContainer");
  const iconButtons = document.querySelectorAll(".icon-btn");
  const downloadBtn = document.getElementById("downloadBtn");

  // Update avatar text when select changes
  textSelect.addEventListener("change", function () {
    avatarText.textContent = this.value;
  });

  // Update avatar style when select changes
  styleSelect.addEventListener("change", function () {
    // Remove all gradient classes
    avatarContainer.classList.remove(
      "gradient-bg",
      "gradient-bg-2",
      "gradient-bg-3",
      "gradient-bg-4",
      "gradient-bg-5"
    );
    // Add selected gradient class
    avatarContainer.classList.add(this.value);

    // If special offer gradient is selected, show pulsing animation
    const limitTimeOfferBadge = document.querySelector(".animate-pulse");
    if (this.value === "gradient-bg-5" && limitTimeOfferBadge) {
      limitTimeOfferBadge.style.display = "inline-block";
    } else if (limitTimeOfferBadge) {
      limitTimeOfferBadge.style.display = "inline-block";
    }
  });

  // Update icon when button is clicked
  iconButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const iconClass = this.getAttribute("data-icon");
      iconContainer.innerHTML = `<i class="fas ${iconClass}"></i>`;

      // Highlight selected button
      iconButtons.forEach((btn) =>
        btn.classList.remove("bg-primary", "text-white")
      );
      this.classList.add("bg-primary", "text-white");

      // If gift or consultation icon is selected, enhance the free consultation message
      if (iconClass === "fa-gift" || iconClass === "fa-comments") {
        if (textSelect.value.indexOf("Free") === -1) {
          textSelect.value = "First Consultation 100% Free";
          avatarText.textContent = "First Consultation 100% Free";
        }

        // Change to special offer gradient
        if (styleSelect.value !== "gradient-bg-5") {
          styleSelect.value = "gradient-bg-5";
          avatarContainer.classList.remove(
            "gradient-bg",
            "gradient-bg-2",
            "gradient-bg-3",
            "gradient-bg-4",
            "gradient-bg-5"
          );
          avatarContainer.classList.add("gradient-bg-5");
        }
      }
    });
  });

  // Function to download avatar as image
  downloadBtn.addEventListener("click", function () {
    // Create canvas for rendering
    html2canvas(avatarContainer, {
      scale: 2,
      logging: false,
      backgroundColor: null,
    }).then((canvas) => {
      // Create download link
      const link = document.createElement("a");
      link.download = "developer-avatar.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  });

  // Load html2canvas library dynamically
  function loadHtml2Canvas() {
    const script = document.createElement("script");
    script.src = "https://html2canvas.hertzen.com/dist/html2canvas.min.js";
    script.onload = () => console.log("html2canvas loaded");
    document.body.appendChild(script);
  }

  loadHtml2Canvas();

  // Add window resize handler to keep avatar responsive
  window.addEventListener("resize", function () {
    // Add any resize-specific logic here if needed
  });

  // Add animation on hover
  avatarContainer.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-5px)";
    this.style.boxShadow = "0 15px 30px -10px rgba(59, 130, 246, 0.5)";
  });

  avatarContainer.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)";
    this.style.boxShadow = "0 10px 25px -5px rgba(59, 130, 246, 0.4)";
  });
});

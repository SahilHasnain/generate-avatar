document.addEventListener("DOMContentLoaded", function () {
  // Get DOM elements
  const avatarContainer = document.getElementById("avatarContainer");
  const avatarText = document.getElementById("avatarText");
  const textSelect = document.getElementById("textSelect");
  const styleSelect = document.getElementById("styleSelect");
  const iconContainer = document.getElementById("iconContainer");
  const iconButtons = document.querySelectorAll(".icon-btn");
  const downloadBtn = document.getElementById("downloadBtn");

  // Set default to free website offer
  avatarContainer.classList.remove("gradient-bg");
  avatarContainer.classList.add("gradient-free");
  styleSelect.value = "gradient-free";

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
      "gradient-bg-5",
      "gradient-bg-6",
      "gradient-free"
    );
    // Add selected gradient class
    avatarContainer.classList.add(this.value);

    // Update text for free website offer gradients
    if (this.value === "gradient-free" || this.value === "gradient-bg-6") {
      if (!textSelect.value.includes("FREE")) {
        textSelect.value = "Get Your Complete Website - 100% FREE";
        avatarText.textContent = "Get Your Complete Website - 100% FREE";
      }
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

      // If globe icon is selected, emphasize website development
      if (iconClass === "fa-globe") {
        textSelect.value = "I Build Websites For FREE - Limited Slots";
        avatarText.textContent = "I Build Websites For FREE - Limited Slots";

        // Change to free website gradient
        styleSelect.value = "gradient-free";
        avatarContainer.classList.remove(
          "gradient-bg",
          "gradient-bg-2",
          "gradient-bg-3",
          "gradient-bg-4",
          "gradient-bg-5",
          "gradient-bg-6",
          "gradient-free"
        );
        avatarContainer.classList.add("gradient-free");
      }

      // If gift icon is selected, emphasize the free website offer
      if (iconClass === "fa-gift") {
        textSelect.value = "Get Your Complete Website - 100% FREE";
        avatarText.textContent = "Get Your Complete Website - 100% FREE";

        // Change to free website gradient
        styleSelect.value = "gradient-free";
        avatarContainer.classList.remove(
          "gradient-bg",
          "gradient-bg-2",
          "gradient-bg-3",
          "gradient-bg-4",
          "gradient-bg-5",
          "gradient-bg-6",
          "gradient-free"
        );
        avatarContainer.classList.add("gradient-free");
      }

      // If consultation icon is selected, use a different free offer message
      if (iconClass === "fa-comments") {
        textSelect.value = "FREE Website Development - No Hidden Costs";
        avatarText.textContent = "FREE Website Development - No Hidden Costs";

        // Change to bold red gradient
        styleSelect.value = "gradient-bg-6";
        avatarContainer.classList.remove(
          "gradient-bg",
          "gradient-bg-2",
          "gradient-bg-3",
          "gradient-bg-4",
          "gradient-bg-5",
          "gradient-bg-6",
          "gradient-free"
        );
        avatarContainer.classList.add("gradient-bg-6");
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

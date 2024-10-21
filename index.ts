interface ContactFormData {
  name: string;
  email: string;
  contactNumber: string;
  subject: string;
  message: string;
}

const form = document.getElementById("contactForm") as HTMLFormElement;
const responseMessage = document.getElementById(
  "responseMessage"
) as HTMLElement;
const popup = document.querySelector(".popup") as HTMLElement;
const container = document.querySelector(".container") as HTMLElement;
const backButton = document.getElementById("backButton") as HTMLButtonElement;

form.addEventListener("submit", async (event: Event) => {
  event.preventDefault(); 
  const data: ContactFormData = {
    name: (document.getElementById("name") as HTMLInputElement).value,
    email: (document.getElementById("email") as HTMLInputElement).value,
    contactNumber: (
      document.getElementById("contactNumber") as HTMLInputElement
    ).value,
    subject: (document.getElementById("subject") as HTMLInputElement).value,
    message: (document.getElementById("message") as HTMLTextAreaElement).value,
  };

  if (!validateForm(data)) {
    displayMessage("Please fill out all required fields correctly.", "error");
    return;
  }

  try {
    const response = await fetch(
      "https://6713e140690bf212c760121b.mockapi.io/contacts",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    if (response.ok) {
      displayMessage("Form submitted successfully!", "success");
      form.reset();
      showPopup();
    } else {
      throw new Error("Submission failed.");
    }
  } catch (error) {
    displayMessage("An error occurred. Please try again.", "error");
  }
});

function showPopup(): void {
  popup.style.display = "flex";
}

backButton.addEventListener("click", () => {
  popup.style.display = "none";
});

function validateForm(data: ContactFormData): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return (
    data.name.trim() !== "" &&
    emailRegex.test(data.email) &&
    data.contactNumber.trim() !== "" &&
    data.subject.trim() !== "" &&
    data.message.trim() !== ""
  );
}

function displayMessage(message: string, type: "success" | "error"): void {
  responseMessage.textContent = message;
  responseMessage.style.color = type === "success" ? "green" : "red";
}
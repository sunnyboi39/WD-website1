const yearElement = document.getElementById("year");

if (yearElement) {
	yearElement.textContent = new Date().getFullYear();
}

const copyEmailButton = document.getElementById("copy-email");
const emailAddress = "smiths109@montclair.edu";

if (copyEmailButton) {
	copyEmailButton.addEventListener("click", async () => {
		try {
			await navigator.clipboard.writeText(emailAddress);
			copyEmailButton.textContent = "Copied";
			window.setTimeout(() => {
				copyEmailButton.textContent = "Copy email";
			}, 1500);
		} catch {
			window.prompt("Copy this email address:", emailAddress);
		}
	});
}

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const button = item.querySelector(".faq-question");
    const icon = item.querySelector(".icon");

    button.addEventListener("click", () => {

        const isActive = item.classList.contains("active");

        faqItems.forEach(faq => {
            faq.classList.remove("active");
            faq.querySelector(".icon").textContent = "+";
        });

        if (!isActive) {
            item.classList.add("active");
            icon.textContent = "−";
        }
    });

    button.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            button.click();
        }
    });
});

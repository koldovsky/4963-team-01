const faqItemHeaders = document.querySelectorAll(".faq__question-title");

faqItemHeaders.forEach(faqItemHeader => {
    faqItemHeader.addEventListener("click", () => {
        const currentlyActiveFaqItemHeader = document.querySelector(".faq__question-title--active");
        if (currentlyActiveFaqItemHeader && currentlyActiveFaqItemHeader !== faqItemHeader) {
            currentlyActiveFaqItemHeader.classList.toggle("faq__question-title--active");
            currentlyActiveFaqItemHeader.nextElementSibling.style.maxHeight = 0;
        }

        faqItemHeader.classList.toggle("faq__question-title--active");
        const faqItemBody = faqItemHeader. nextElementSibling;
        if(faqItemHeader.classList.contains("faq__question-title--active")) {
            faqItemBody.style.maxHeight = faqItemBody.scrollHeight + "px";
        }
        else {
            faqItemBody.style.maxHeight = 0;
        }
    });
});
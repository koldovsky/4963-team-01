const faqQuestions = document.querySelector(".faq__questions");

if (faqQuestions) {
  faqQuestions.addEventListener("click", (event) => {
    const faqItemHeader = event.target.closest(".faq__question-title");
    console.log("Clicked FAQ item header:", faqItemHeader);
    if (!faqItemHeader || !faqQuestions.contains(faqItemHeader)) return;

    const currentlyActiveFaqItemHeader = faqQuestions.querySelector(
      ".faq__question-title--active",
    );

    if (
      currentlyActiveFaqItemHeader &&
      currentlyActiveFaqItemHeader !== faqItemHeader
    ) {
      currentlyActiveFaqItemHeader.classList.remove(
        "faq__question-title--active",
      );
      currentlyActiveFaqItemHeader.nextElementSibling.style.maxHeight = 0;
    }

    faqItemHeader.classList.toggle("faq__question-title--active");
    const faqItemBody = faqItemHeader.nextElementSibling;

    if (faqItemHeader.classList.contains("faq__question-title--active")) {
      faqItemBody.style.maxHeight = faqItemBody.scrollHeight + "px";
    } else {
      faqItemBody.style.maxHeight = 0;
    }
  });
}

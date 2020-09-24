// Select Accordion Button
const accordions = document.querySelectorAll(".accordion");

// Loop through the accordion
accordions.forEach((accordion) => {
  // Add Click Event Listener to Accordion
  accordion.addEventListener("click", function () {
    // Add class toggle to accordion
    accordion.classList.toggle("is-open");
    // select the next element sibling
    const content = accordion.nextElementSibling;
//    check if the content 
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
});

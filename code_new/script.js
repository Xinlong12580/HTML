const buttons = document.querySelectorAll("button");
const content = document.getElementById("content");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const page = button.getAttribute("data-page");

    fetch(`pages/${page}`)
      .then(response => response.text())
      .then(html => {
        content.innerHTML = html;
      })
      .catch(err => {
        content.innerHTML = "<p>Error loading page.</p>";
        console.error(err);
      });
  });
});

// Load default page
fetch("pages/About_Me.html")
  .then(res => res.text())
  .then(html => content.innerHTML = html);

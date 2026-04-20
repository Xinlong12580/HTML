const container = document.getElementById("tab-container");

["Home", "About", "Contact"].forEach(name => {
    const btn = document.createElement("button");

    btn.textContent = name;

    btn.addEventListener("click", () => {
        console.log(name + " clicked");
    });

    container.appendChild(btn);
});

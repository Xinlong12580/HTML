const tabs = document.querySelectorAll('.tab');
const content = document.getElementById("content");

function activate(tabId) 
{
    tabs.forEach(t => { 
        t.setAttribute('aria-selected', t.id === tabId);
        if (t.id !== tabId) {
            return;
        };
        const page = t.getAttribute("data-page");

        fetch(`pages/${page}`)
            .then(response => response.text())
            .then(html => { content.innerHTML = html; })
            .catch(err => {
                content.innerHTML = "<p>Error loading page.</p>";
                console.error(err);
            });
    });
}

tabs.forEach(tab => {
    tab.addEventListener('click', () => activate(tab.id));
});

activate("tab-AboutMe");




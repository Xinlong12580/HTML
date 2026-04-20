const content = document.getElementById("content");

async function activate(tabId) 
{
    const tabs = document.querySelectorAll('.tab');
    console.log("activating", tabId, tabs.length);
    tabs.forEach(async t => { 
        console.log("try activating", t.id);
        t.setAttribute('aria-selected', t.id === tabId);
        if (t.id !== tabId) {
            return;
        };
        const page = t.getAttribute("data-page");
      
        const response = await fetch(page);
  
        const html = await response.text();
        content.innerHTML = html;
        
        const js_name = "./" + page.replace("html", "js");
        console.log("js_name", js_name );
        const module = await import(js_name);
        console.log("content", content.innerHTML);
        await module.initPage(content);
    });
    console.log("finishing activating", tabId);
}


document.addEventListener("click", e => {
    const tab = e.target.closest(".tab");
    if (!tab) return;
    activate(tab.id);
    console.log("clicked", tab.id);
});

//tabs.forEach(tab => {
//    tab.addEventListener('click', () => activate(tab.id));
//});

activate("tab-AboutMe");




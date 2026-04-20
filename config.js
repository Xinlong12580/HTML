async function loadCSSFromJSON() {
    try {
        const response = await fetch("pages/css.json");
        if (!response.ok) {
            throw new Error("Failed to load pages.json");
        }

        const files = await response.json();

        files.forEach(href => {
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = "pages/" + href;

        document.head.appendChild(link);
        });

    } catch (err) {
    console.error(err);
    }
}
async function loadJSFromJSON() {
    try {
        const response = await fetch("pages/js.json");
        if (!response.ok) {
            throw new Error("Failed to load js.json");
        }

        const files = await response.json();

        files.forEach(src => {
            const script = document.createElement("script");
            script.src = "pages/" + src;
            script.defer = true;

        document.head.appendChild(script);
        });

    } catch (err) {
    console.error(err);
    }
}
async function loadHTMLFromJSON() {
    console.log("Hello");
    try {
        //const container = document.getElementById("tab-container");
        const container = document.getElementById("navi");
        const response = await fetch("pages/html.json");
        if (!response.ok) {
            throw new Error("Failed to load html.json");
        }

        const files = await response.json();

        files.forEach(html => {
            const start = html.indexOf('/') + '/'.length;
            const end = html.indexOf('.html');
            const name = html.slice(start, end);
            const title = name.replace(/([A-Z])/g, ' $1').trim();
            const button = document.createElement("button");
            button.textContent = title;
            button.className = "tab";
            button.role = "tab";
            button.id = "tab-" + name;
            button.setAttribute("aria-controls", "panel-" + name);
            if (html.includes("AboutMe")){button.setAttribute("aria-selected", true)}
            else { button.setAttribute("aria-selected", false);}
            button.setAttribute("data-page", "pages/" + html);
            container.appendChild(button);
        });
        console.log(document.body.innerHTML);
    } catch (err) {
    console.error(err);
    }
}

loadCSSFromJSON();
//loadJSFromJSON();
//loadHTMLFromJSON(); //Doesn't work

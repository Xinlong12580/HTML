export async function initPage(container){
  const note = container.querySelector("#note");

  const items = await fetch("./data/notes/notes.json").then(r => r.json());

  note.innerHTML = items.map(item => `
    <button class="note_button" data-id="${item}">${item.replace(/\.md$/, "")}</button>
  `).join("");

  note.addEventListener("click", async e => {
    const btn = e.target.closest("button");
    if (!btn) return;
    const mdPath = "./data/notes/" + btn.getAttribute("data-id");    
    const response = await fetch(mdPath);
    const mdText = await response.text();

    note.innerHTML = marked.parse(mdText);
    console.log("Clicked item", btn.dataset.id);
  });    
};

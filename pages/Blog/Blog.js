export async function initPage(container){
  const blog = container.querySelector("#blog");

  const items = await fetch("./data/blogs/blogs.json").then(r => r.json());

  blog.innerHTML = items.map(item => `
    <button class="blog_button" data-id="${item}">${item.replace(/\.md$/, "")}</button>
  `).join("");

  blog.addEventListener("click", async e => {
    const btn = e.target.closest("button");
    if (!btn) return;
    const mdPath = "./data/blogs/" + btn.getAttribute("data-id");    
    const response = await fetch(mdPath);
    const mdText = await response.text();

    blog.innerHTML = marked.parse(mdText);
    console.log("Clicked item", btn.dataset.id);
  });    
};

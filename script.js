document.addEventListener("DOMContentLoaded", () => {
    const filters = document.querySelectorAll("#filters input");
    const projectContainer = document.getElementById("projects");

    let selectedTags = [];

    filters.forEach(checkbox => {
        checkbox.addEventListener("change", () => {
            selectedTags = Array.from(filters)
                .filter(cb => cb.checked)
                .map(cb => cb.value);
            loadProjects();
        });
    });

    async function loadProjects() {
        const res = await fetch("projects.json");
        const projects = await res.json();
        projectContainer.innerHTML = "";

        projects.forEach(project => {
            if (selectedTags.length === 0 || selectedTags.some(tag => project.tags.includes(tag))) {
                const div = document.createElement("div");
                div.className = "project";
                div.innerHTML = \`
                    <h2>\${project.title}</h2>
                    <img src="\${project.image}" alt="\${project.title}">
                    <div>\${marked.parse(project.description_md)}</div>
                    <a href="${project.pdf}" target="_blank" rel="noopener">📄 View Project PDF</a>
                    <p><strong>Tags:</strong> \${project.tags.join(", ")}</p>
                \`;
                projectContainer.appendChild(div);
            }
        });
    }

    loadProjects();
});

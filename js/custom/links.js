fetch("/json_data/links.json").then(res => {
    return res.json();
}).then(links => {
    if ("true" === "true") {
        links.sort(() => 0.5 - Math.random());
    }
    links.forEach(link => {
        let item = document.createElement("div");
        item.className = "link-item";
        item.id = link.name;
        if (link.color) {
            item.style.setProperty("--primary-color", link.color);
        }
        let a = document.createElement("a");
        a.className = "link-url";
        a.href = link.url;
        a.alt = "portrait";
        a.target = "_blank";
        a.rel = "friend";
        a.title = link.name;
        let img = document.createElement("img");
        img.className = "link-avatar";
        img.loading = "lazy";
        img.src = link.avatar;
        img.alt = link.name;
        img.onerror = function() {
            this.src = "/img/links/nopic.jpg";
        };
        let info = document.createElement("div");
        info.className = "link-info";
        let blog = document.createElement("div");
        blog.className = "link-blog";
        blog.textContent = link.blog;
        let desc = document.createElement("div");
        desc.className = "link-desc";
        desc.textContent = link.desc;
        info.append(blog, desc);
        a.append(img);
        item.append(a, info);
        document.querySelector(".link-items").append(item);
    });
});
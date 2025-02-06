document.addEventListener("DOMContentLoaded", loadPosts);

function addPost() {
    const username = document.getElementById("username").value;
    const postContent = document.getElementById("postContent").value;

    if (username === "" || postContent === "") {
        alert("Please enter your name and post content.");
        return;
    }

    const post = {
        user: username,
        content: postContent,
        time: new Date().toLocaleString(),
    };

    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.unshift(post);
    localStorage.setItem("posts", JSON.stringify(posts));

    document.getElementById("postContent").value = ""; // Clear input
    loadPosts();
}

function loadPosts() {
    const postFeed = document.getElementById("postFeed");
    postFeed.innerHTML = ""; // Clear old posts

    let posts = JSON.parse(localStorage.getItem("posts")) || [];

    posts.forEach(post => {
        const div = document.createElement("div");
        div.classList.add("post");
        div.innerHTML = `<strong>${post.user}</strong> <small>(${post.time})</small><p>${post.content}</p>`;
        postFeed.appendChild(div);
    });
}
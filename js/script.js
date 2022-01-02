let postsArray = [];
const postList = document.getElementById('post-list');
const titleInput = document.getElementById('title');
const bodyInput = document.getElementById('textarea');
const formPost = document.getElementById('form');

function renderPosts(){
    let html = ""
    for(let post of postsArray){
        html += `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <br><hr/>
        `
    }
    postList.innerHTML = html
}

fetch('https://apis.scrimba.com/jsonplaceholder/posts')
.then(resp => resp.json())
.then( data => {
    postsArray = data.slice(0, 9);
    renderPosts();
})

formPost.addEventListener('submit',function(e){
    e.preventDefault()
    const postTitle = titleInput.value;
    const postBody = bodyInput.value;
    const post = {
        title : postTitle,
        body : postBody
    }
    const options = {
        method : "POST",
        body : JSON.stringify(post),
        headers: {
            'Content-Type': 'application/json'
        }
    }
fetch('https://apis.scrimba.com/jsonplaceholder/posts', options)
.then(resp => resp.json())
.then(recentpost => {
    postsArray.unshift(recentpost);
    renderPosts();
    form.reset();
})
})
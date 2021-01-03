// callbacks with javascript
const posts = [
    {title: 'PostOne', body:'this is post one'},
    {title: 'Post two', body:'this is post two'}
];

function createPost(post, callback){
    setTimeout(function(){
        posts.push(post);
        callback()
    }, 2000)
}

function getPosts() {
    setTimeout(function(){
        let output = '';
        posts.forEach(function(post){
            output += `<li>${posts.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000)
}

createPost({title: 'Post three', body:'This is post three'}, getPosts)
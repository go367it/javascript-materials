// fetch api statements in javascript
document.querySelector('#button1').addEventListener('click', getText);

document.querySelector('#button2').addEventListener('click', getJson);

// get local text file
function getText(){
    fetch('test.txt')
        .then(function(res){
            return res.text()
        })
        .then(function(data){
            console.log(data)
        })
        .catch(function(res){
            console.log(res)
        })
}

// get local Json file
function getJson(){
    fetch('posts.json')
        .then(function(res){
            return res.json()
        })
        .then(function(data){
            console.log(data)
        })
        .catch(function(err){
            console.log(err)
        })
}
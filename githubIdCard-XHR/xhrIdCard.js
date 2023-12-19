// const githubApi = "https://api.github.com/users/hiteshchoudhary";
const xhr = new XMLHttpRequest();
const showUser = document.querySelector("#userName");
const githubID = document.querySelector("#githubID");
const followers = document.querySelector("#followers");
const pic = document.querySelector("#profilePic");
const form = document.querySelector("form")

form.addEventListener('submit', function(e){
    e.preventDefault();
    const userName = document.querySelector("#user").value;
    const githubAPI = "https://api.github.com/users/" +  userName;
    console.log(userName);
    console.log(githubAPI);
    xhr.open('GET', githubAPI)
    xhr.onreadystatechange = function(){
        // console.log(xhr.readyState)
        if(xhr.readyState === 4){
            const data = JSON.parse(this.responseText);
            showUser.textContent = data.login;
            githubID.textContent = data.id;
            followers.textContent = data.followers;
            pic.src = data.avatar_url;
            // console.log(data.avatar_url);
        }
    }
    xhr.send()
})


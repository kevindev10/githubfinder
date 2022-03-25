
class UI {
  constructor(){
    this.profile = document.querySelector('#profile');
  }

  // Show profile

  showProfile(user){
    let output = `
    <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3">
          <img class="img-fluid mb-2" src="${user.avatar_url}">
          <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
        </div>
        <div class="col-md-9 mt-4">
          <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
          <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
          <span class="badge badge-success">Followers: ${user.followers}</span>
          <span class="badge badge-info">Following: ${user.following}</span>
          <br><br>
          <ul class="list-group">
            <li class="list-group-item">Company: ${user.company}</li>
            <li class="list-group-item">Website/Blog: ${user.blog}</li>
            <li class="list-group-item">Location: ${user.location}</li>
            <li class="list-group-item">Member Since: ${user.created_at}</li>
          </ul>
        </div>
      </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div id="repos"></div>
    `
    this.profile.innerHTML = output;

  }


  // Clear profile

  clearProfile(){
    this.profile.innerHTML = '';
  }


  // Show alert

  showAlert(message, classname){
    
    // Clear any alert first if any
    this.clearAlert()
    
    // Create Div element
    const div = document.createElement('div');

    // Add classes

    div.className = classname ;

    // Add message

    const msg = document.createTextNode(message);

    // Append message to div

    div.appendChild(msg);
    
    // Add div to body

    const searchContainer = document.querySelector('.searchContainer');
    const search = document.querySelector('.search');

    searchContainer.insertBefore(div, search);

    // Clear alert
    setTimeout(() =>{
      this.clearAlert()

    }, 2000)
     
  }


  // Clear Alert

   clearAlert(){
     
    const alert1 = document.querySelector('.alert');

    if(alert1){
       alert1.remove();
    }

    
   }



   // Show repos

   showRepos(repos){
     let output = ''; 
     repos.forEach((repo) =>{
       output += `
       <div class="card card-body mb-2">
        <div class="row">
          <div class="col-md-6">
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
          </div>
          <div class="col-md-6">
          <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
          <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
          <span class="badge badge-success">Forks: ${repo.forms_count}</span>
          </div>
        </div>
     </div>
       `
       
     })

     document.querySelector('#repos').innerHTML = output;
   }

 
}
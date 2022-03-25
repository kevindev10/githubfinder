
// instatiate Github
const github = new Github ;
const ui = new UI;


// search user event listener

document.querySelector('#searchUser').addEventListener('keyup', function(e){

  const searchUser = e.target.value;


  // Input validation

  if(searchUser !== ''){

    github.getProfile(searchUser)
    .then(data => {
      if(data.profile.message === 'Not Found'){
        ui.showAlert('User not found', 'alert alert-danger');
      }else{
        ui.showProfile(data.profile)
        ui.showRepos(data.repos)

      }
     
    })
    .catch(err => console.log(err))

  }else{
     ui.clearProfile();
  }
  
 
})




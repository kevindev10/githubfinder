
class Github {
  constructor (){
    this.client_Id ='99b9a1d5376b6472b24d';
    this.client_secret ='b2f4aa74b9ddbb20fdec38e7a9a11f5e56ed2bc3';
    this.per_page = 7;
  }


  //get profile 
  async getProfile(user){
    
  const fetchedProfile = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_Id}&client_secret${this.client_secret}`);

  const fetchedRepos = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.per_page}&client_id=${this.client_Id}&client_secret${this.client_secret}`);

  const profile = await fetchedProfile.json();

  const repos = await fetchedRepos.json();

    return{
      profile,
      repos
    }
  
  }

}

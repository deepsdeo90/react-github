import React, {Component} from 'react';
import RepoList from './RepoList';

class Profile extends Component{
	render(){
		return(
				<div className="card">
				  <div className="card-header">
				    {this.props.userData.name}
				  </div>
				  <div className="card-body">
				    <div className="row">
				    	  <div className="col-sm-4">
				    	  	<img className="img-thumbnail" src={this.props.userData.avatar_url} alt={this.props.userData.name} />
				    	  </div>
				
					  	  <div className="col-sm-8">
					  	  	<div className="row">
					  	  	<div className="col-sm-12">
						  	  	<a href={this.props.userData.repos_url} target="_blank" className="badge badge-primary">{this.props.userData.public_repos} Repos</a>
								<a href={this.props.userData.gists_url} target="_blank"className="badge badge-success">{this.props.userData.public_gists} Gists</a>
								<a href={this.props.userData.following_url} target="_blank"className="badge badge-danger">{this.props.userData.following} following</a>
								<a href={this.props.userData.followers_url} target="_blank"className="badge badge-info">{this.props.userData.followers} followers</a>
							</div>
							</div>
							<br />
							<div className="row">
							<div className="col-sm-12">
								<ul className="list-group">
								  <li className="list-group-item"><strong>Username: </strong>{this.props.userData.login}</li>
								  <li className="list-group-item"><strong>Location: </strong>{this.props.userData.location}</li>
								  <li className="list-group-item"><strong>Email: </strong>{this.props.userData.email}</li>
								 </ul>
								 <br />
								 <a href={this.props.userData.html_url} className="btn btn-primary btn-sm active" target="_blank">Visit Profile</a>

							</div>
							</div>
					  	  </div>
					</div>
					<hr />
					<h3>User Repositories</h3>
					<RepoList userRepos={this.props.userRepos} />
				  </div>
				</div>
			)
	}
}


export default Profile
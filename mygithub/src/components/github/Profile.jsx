import React, {Component} from 'react';
import RepoList from './RepoList.jsx';

class Profile extends Component {
	render() {
		return(
				<div className="card">
  				  	<div className="card-header">
  				  		<h3 className="card-title">{this.props.userData.name}</h3>
  				  	</div>
  					<div className="card-body">
    					<div className="row">
    						<div className="col-md-4">
    							<img src={this.props.userData.avatar_url} className="thumbnail" style={{width: "100%"}}/>
    						</div>
    						<div className="col-md-8">
    							<div className="row">
    								<div className="col-md-12">
    									<span className="badge badge-primary">{this.props.userData.public_repos} Repos</span>
    									<span className="badge badge-success">{this.props.userData.public_gists} Gists</span>
    									<span className="badge badge-info">{this.props.userData.followers} Followers</span>
    									<span className="badge badge-danger">{this.props.userData.following} Following</span>
    								</div>
    							</div>
    							<hr/>
    							<div className="row">
    								<div className="col-md-12">
    									<ul className="list-group">
    										<li className="list-group-item"><strong>Username: {this.props.userData.login}</strong></li>
    										<li className="list-group-item"><strong>Location: {this.props.userData.location}</strong></li>
    										<li className="list-group-item"><strong>E-mail: {this.props.userData.email}</strong></li>
    									</ul>
    								</div>
    							</div>
    							<br/>
    							<a className="btn btn-primary" target="_blank" href={this.props.userData.html_url}>View Profile</a>
    						</div>
    					</div>
    					<hr/>
    					<h3>User Repositories</h3>
    					<RepoList userRepos={this.props.userRepos} />
  					</div>
				</div>
			);
	}
}

export default Profile;
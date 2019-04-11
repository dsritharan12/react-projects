import React, {Component} from 'react';
import Profile from './github/Profile.jsx';
import Search from './github/Search.jsx';

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			userName: "dsritharan12",
			userData: [],
			userRepos: [],
			pages: 5
		}
	}

	getUserData(){
		$.ajax({
			url: 'https://api.github.com/users/' + this.state.userName + '?client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret,
			dataType: 'json',
			cache: false,
			success: function(data){
				this.setState({userData: data});
				console.log(data);
			}.bind(this),
			error: function(xhr, status, err){
				alert(err)
			}.bind(this)
		});
	}

	getUserRepos(){
		$.ajax({
			url: 'https://api.github.com/users/' + this.state.userName + '/repos?per_page=' + this.props.pages + '&client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret + '&sort=created',
			dataType: 'json',
			cache: false,
			success: function(data){
				this.setState({userRepos: data});
			}.bind(this),
			error: function(xhr, status, err){
				alert(err)
			}.bind(this)
		});
	}

	componentDidMount(){
		this.getUserData();
		this.getUserRepos();
	}

	handleFormSubmit(userName){
		this.setState({userName: userName}, function(){
			this.getUserData();
			this.getUserRepos();
		});
	}
	render(){
		return(
				<div>
					<Search onFormSubmit={this.handleFormSubmit.bind(this)}/>
					<Profile {...this.state} />
				</div>
			)
	}
}

App.propTypes = {
	clientId: React.PropTypes.string,
	clientSecret: React.PropTypes.string
};

App.defaultProps = {
	clientId: "8234c87bad8796970dea",
	clientSecret: "631a5fe6da3f10e7402c640979840fcfa1726ab8"
}


export default App;
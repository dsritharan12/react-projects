import React, {Component} from 'react';


class Search extends Component {
    onSubmit(e){
    	e.preventDefault();
    	let userName = this.refs.userName.value.trim();
    	if(!userName)
    	{
    		alert("please enter user name");
    		return;
    	}
    	this.props.onFormSubmit(userName);
    	this.refs.userName.value='';
    }
 	render() {
    	return(
  				<form onSubmit={this.onSubmit.bind(this)}>
  					<label>Search Github Users :  </label>
      				<input className="form-control" ref="userName" type="text"/>
         		</form>
              );
	}
}

export default Search;
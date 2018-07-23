import React, {Component} from 'react';

class Search extends Component{
	onSubmit(e){
		e.preventDefault();
		let username = this.refs.username.value.trim();
		if(!username){
			alert("Please enter username");
			return;
		}
		this.props.onFormSubmit(username);
		this.refs.username.value="";
	}
	render(){
		return(
			<form onSubmit={this.onSubmit.bind(this)}>
				<input type="text" ref="username" placeholder="Search By Username" className="form-control"/>
			</form>
			)
	}
}


export default Search